/**
 * ============================================================
 *  BASIC FOOTGEAR — GOOGLE APPS SCRIPT BACKEND (Code.gs)
 * ============================================================
 *  Standalone-safe database backend for the Basic Footgear
 *  store (web + Capacitor Android app) + FCM push engine.
 *
 *  Sheets managed automatically:
 *    • "Products" — id, title, category, price, image, description, stock
 *    • "Orders"   — id, name, mobile, items, size, color, price, address, status, source
 *    • "Tokens"   — Token, Timestamp                  (FCM device tokens, auto-created)
 *
 *  Endpoints (this script deployed as a WEB APP):
 *    GET  <webAppUrl>?action=products            → full product list (JSON array)
 *    GET  <webAppUrl>?action=product&id=<id>     → single product (deep-link resolution)
 *    GET  <webAppUrl>?action=orders              → full order list (JSON array)
 *    GET  <webAppUrl>?action=tokens              → all registered FCM tokens (clean JSON array of token strings)
 *    POST <webAppUrl>  body={"type":"product", id, title, category, price, image, description, stock}
 *    POST <webAppUrl>  body={"type":"order",   id, name, mobile, items, size, color, price, address, status, source}
 *         → saves the order AND broadcasts a push to every registered device
 *    POST <webAppUrl>  body={"type":"token",   token, platform, updated}   → Token/Timestamp upsert, NO duplicates
 *    POST <webAppUrl>  body={"type":"push",    title, body, product}   (manual broadcast, optional)
 *
 *  ONE-TIME FIREBASE SETUP (for push sending — do this once):
 *    1. Firebase Console → ⚙ Project settings → Service accounts
 *       → "Generate new private key" → downloads a JSON file
 *    2. Copy its ENTIRE content, then run once from the editor:
 *         setFcmServiceAccount('<the full JSON here>')
 *       (stores it in Script Properties as FCM_SA_JSON — never in the sheet)
 *    3. The app (@capacitor/push-notifications in the Android APK) registers
 *       device tokens automatically; every new order then pushes to all of them.
 *
 *  DEPLOY SETTINGS (critical):
 *    Deploy → Manage deployments → Edit → Version: New version
 *      Execute as: Me
 *      Who has access: Anyone        ← MUST be "Anyone"
 *    → the /exec URL stays the same (APPS_SCRIPT_URL in index.html)
 * ============================================================
 */

/** Header definitions — single source of truth for all sheets. */
var PRODUCTS_HEADER = ['id', 'title', 'category', 'price', 'image', 'description', 'stock'];
var ORDERS_HEADER = ['id', 'name', 'mobile', 'items', 'size', 'color', 'price', 'address', 'status', 'source'];
var TOKENS_HEADER = ['Token', 'Timestamp'];
var DB_NAME = 'Basic Footgear DB';

/**
 * Standalone-safe sheet accessor.
 * Opens the bound spreadsheet when the script is container-bound; otherwise
 * opens (or creates, on first use) the "Basic Footgear DB" spreadsheet kept
 * in Script Properties. Ensures the requested sheet + header row exist.
 */
function getSheet_(name, header) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    var props = PropertiesService.getScriptProperties();
    var id = props.getProperty('BF_SHEET_ID');
    if (id) {
      try {
        ss = SpreadsheetApp.openById(id);
      } catch (err) {
        ss = null;   // stored id points to a deleted spreadsheet — recreate below
      }
    }
    if (!ss) {
      ss = SpreadsheetApp.create(DB_NAME);
      props.setProperty('BF_SHEET_ID', ss.getId());
    }
  }
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sheet.getLastRow() === 0) sheet.appendRow(header);
  return sheet;
}

/** Read every data row of a sheet below the header. */
function readRows_(sheet, width) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, width).getValues();
}

/** Append or update one record keyed by its id column (0). */
function upsertRow_(sheet, header, record) {
  var rows = readRows_(sheet, header.length);
  var idCol = record[0];
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i][0]) === String(idCol)) {
      sheet.getRange(i + 2, 1, 1, header.length).setValues([record]);   // update in place
      return false; // updated
    }
  }
  sheet.appendRow(record);
  return true; // newly inserted
}

/** JSON response helper. */
function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ============================================================
 *  TOKENS SHEET (FCM device tokens)
 *  Header is exactly ["Token", "Timestamp"]. The sheet is
 *  created automatically on first use; if an older or foreign
 *  header row exists, it is normalised in place.
 * ============================================================
 */

/** Standalone-safe Tokens sheet accessor + header normalisation. */
function getTokensSheet_(name, header) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    var props = PropertiesService.getScriptProperties();
    var id = props.getProperty('BF_SHEET_ID');
    if (id) {
      try {
        ss = SpreadsheetApp.openById(id);
      } catch (err) {
        ss = null;   // stored id points to a deleted spreadsheet — recreate below
      }
    }
    if (!ss) {
      ss = SpreadsheetApp.create(DB_NAME);
      props.setProperty('BF_SHEET_ID', ss.getId());
    }
  }
  var sheet = ss.getSheetByName('Tokens') || ss.insertSheet('Tokens');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(TOKENS_HEADER);                       // auto-create with headers
  } else {
    var head = sheet.getRange(1, 1, 1, Math.max(2, sheet.getLastColumn())).getValues()[0];
    if (String(head[0]).toLowerCase() !== 'token' || String(head[1] || '').toLowerCase() !== 'timestamp') {
      sheet.getRange(1, 1, 1, Math.max(2, head.length)).clearContent();
      sheet.getRange(1, 1, 1, TOKENS_HEADER.length).setValues([TOKENS_HEADER]);   // fix old header
    }
  }
  return sheet;
}

/**
 * Upsert ONE FCM token into the Tokens sheet — NO duplicates.
 * Matches on the trimmed, case-insensitive token value in column A.
 *   - new token  → append [token, timestamp]
 *   - known token→ refresh only the Timestamp cell (keeps row position)
 */
function upsertToken_(sheet, token, timestamp) {
  var t = String(token || '').trim();
  if (!t) return { saved: false, reason: 'empty token' };
  var stamp = timestamp || new Date().toISOString();
  var lastRow = sheet.getLastRow();
  var values = lastRow > 1 ? sheet.getRange(2, 1, lastRow - 1, 1).getValues() : [];
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === t.toLowerCase()) {
      sheet.getRange(i + 2, 2).setValue(stamp);   // update timestamp in place
      return { saved: true, action: 'updated' };
    }
  }
  sheet.appendRow([t, stamp]);
  return { saved: true, action: 'inserted' };
}

/* ============================================================
 *  FCM SEND ENGINE (HTTP v1 — works for ALL current Firebase
 *  projects; the legacy server-key API is retired)
 * ============================================================
 */

/**
 * One-time setup helper: run from the editor with the service-account JSON.
 * Bulletproof version: full validation, 3-attempt transient retry on the
 * properties write, read-back verification and REAL error messages
 * (Apps Script hides everything as "An unknown error has occurred").
 */
function setFcmServiceAccount(json) {
  var parsed;
  try {
    parsed = JSON.parse(json);
  } catch (parseErr) {
    throw new Error('Service-account JSON could not be parsed (' + (parseErr && parseErr.message || parseErr) +
      '). Make sure the WHOLE file content was copied from { to } with no truncation.');
  }
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Service-account JSON is not an object — copy the whole Firebase file.');
  }
  var problems = [];
  if (!parsed.private_key || String(parsed.private_key).indexOf('BEGIN PRIVATE KEY') === -1) {
    problems.push('private_key missing or not a PEM key');
  }
  if (!parsed.client_email || String(parsed.client_email).indexOf('@') < 0) {
    problems.push('client_email missing');
  }
  if (!parsed.project_id) problems.push('project_id missing');
  if (problems.length) {
    throw new Error('Service-account JSON incomplete: ' + problems.join('; '));
  }

  // Transient Google infra hiccups ("unknown error, try again later") are
  // common on the first write — retry up to 3 times with a small backoff.
  var lastErr = null;
  for (var attempt = 0; attempt < 3; attempt++) {
    try {
      PropertiesService.getScriptProperties().setProperty('FCM_SA_JSON', json);
      lastErr = null;
      break;
    } catch (propErr) {
      lastErr = propErr;
      Utilities.sleep(600 * (attempt + 1));
    }
  }
  if (lastErr) {
    throw new Error('Script Properties write failed after 3 attempts — wait a minute and run again. (' +
      (lastErr && lastErr.message || lastErr) + ')');
  }

  // Read back: prove the value REALLY persisted (verifies, not just "maybe").
  var check = '';
  try { check = PropertiesService.getScriptProperties().getProperty('FCM_SA_JSON') || ''; } catch (e) { check = ''; }
  if (!check) {
    throw new Error('FCM_SA_JSON read-back empty — Google Properties may still be caching; wait a minute and run again.');
  }
  return 'CONFIGURED OK — service account saved for project "' + parsed.project_id +
    '" (' + parsed.client_email + '). Scripts Properties now hold the key.';
}

/** OAuth2 JWT-bearer token exchange against the service account (self-caching). */
function getFcmAccessToken_(sa) {
  var props = PropertiesService.getScriptProperties();
  var now = Math.floor(Date.now() / 1000);
  var cached = props.getProperty('FCM_ACCESS');
  var exp = parseInt(props.getProperty('FCM_ACCESS_EXP') || '0', 10);
  if (cached && exp > now + 60) return cached;

  var header = Utilities.base64EncodeWebSafe(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).replace(/=+$/, '');
  var claim = Utilities.base64EncodeWebSafe(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  })).replace(/=+$/, '');
  var sig = Utilities.base64EncodeWebSafe(
    Utilities.computeRsaSha256Signature(header + '.' + claim, sa.private_key)
  ).replace(/=+$/, '');
  var assertion = header + '.' + claim + '.' + sig;

  var resp = UrlFetchApp.fetch('https://oauth2.googleapis.com/token', {
    method: 'post',
    payload: { grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: assertion },
    muteHttpExceptions: true
  });
  var token = JSON.parse(resp.getContentText()).access_token;
  if (!token) throw new Error('OAuth token exchange failed: ' + resp.getContentText());
  props.setProperty('FCM_ACCESS', token);
  props.setProperty('FCM_ACCESS_EXP', String(now + 3500));
  return token;
}

/** Send one push message via FCM HTTP v1. */
function sendFcm_(token, title, body, data) {
  var sa = JSON.parse(PropertiesService.getScriptProperties().getProperty('FCM_SA_JSON'));
  var url = 'https://fcm.googleapis.com/v1/projects/' + sa.project_id + '/messages:send';
  var payload = {
    message: {
      token: token,
      notification: { title: title, body: body },
      data: data || {}   // strings only — data.product drives the tap-to-open flow
    }
  };
  var resp = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + getFcmAccessToken_(sa) },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
  return { code: resp.getResponseCode(), body: resp.getContentText().slice(0, 200) };
}

/** Push to every registered device token. */
function notifyAllTokens_(title, body, data) {
  var tokensSheet = getTokensSheet_();
  var lastRow = tokensSheet.getLastRow();
  var tokens = lastRow > 1 ? tokensSheet.getRange(2, 1, lastRow - 1, 1).getValues() : [];
  var results = [];
  for (var i = 0; i < tokens.length; i++) {
    var t = String(tokens[i][0]).trim();
    if (!t) continue;
    try {
      results.push({ token: t.slice(0, 12) + '…', result: sendFcm_(t, title, body, data) });
    } catch (err) {
      results.push({ token: t.slice(0, 12) + '…', error: String(err && err.message || err) });
    }
  }
  return results;
}

/** Manual test from the editor — pushes to all devices. */
function testPush() {
  var out = notifyAllTokens_('BASIC FOOTGEAR', 'Push test — notifications working!', { info: 'setup-test' });
  Logger.log(JSON.stringify(out));
  return out;
}

/** Manual test from the editor — simulates a full order alert. */
function testOrderPush() {
  var out = notifyAllTokens_('New COD Order — BASIC FOOTGEAR', 'COD-1234 · QA Customer · ₹499', { product: 'sl-1' });
  Logger.log(JSON.stringify(out));
  return out;
}

/* ============================================================
 *  WEB APP HANDLERS
 * ============================================================
 */

/**
 * GET handler.
 *   ?action=products            → [ …products ]
 *   ?action=product&id=<id>     → { …product } or {}
 *   ?action=orders              → [ …orders ]
 *   ?action=tokens              → [ …tokens ]
 *   (no action)                 → products list (default)
 */
function doGet(e) {
  var params = (e && e.parameter) || {};
  var action = params.action || 'products';
  var sheet, rows, i, out;

  if (action === 'product') {
    var wantId = String(params.id || '');
    sheet = getSheet_('Products', PRODUCTS_HEADER);
    rows = readRows_(sheet, PRODUCTS_HEADER.length);
    for (i = 0; i < rows.length; i++) {
      if (String(rows[i][0]) === wantId) {
        return jsonOut_({
          id: rows[i][0], title: rows[i][1], category: rows[i][2], price: rows[i][3],
          image: rows[i][4], description: rows[i][5], stock: rows[i][6]
        });
      }
    }
    return jsonOut_({});   // unknown id — app falls back to its friendly toast
  }

  if (action === 'orders') {
    sheet = getSheet_('Orders', ORDERS_HEADER);
    rows = readRows_(sheet, ORDERS_HEADER.length);
    out = [];
    for (i = 0; i < rows.length; i++) {
      out.push({
        id: rows[i][0], name: rows[i][1], mobile: rows[i][2], items: rows[i][3],
        size: rows[i][4], color: rows[i][5], price: rows[i][6], address: rows[i][7],
        status: rows[i][8], source: rows[i][9]
      });
    }
    return jsonOut_(out);
  }

  if (action === 'tokens') {
    // Robust token list: Tokens sheet exists / auto-created with
    // "Token", "Timestamp" headers; column A → clean JSON array of tokens.
    var tokensSheet = getTokensSheet_();
    var tLastRow = tokensSheet.getLastRow();
    var tValues = tLastRow > 1 ? tokensSheet.getRange(2, 1, tLastRow - 1, 1).getValues() : [];
    var tokens = [];
    for (i = 0; i < tValues.length; i++) {
      var t = String(tValues[i][0]).trim();
      if (t) tokens.push(t);   // skip blanks, trim, no duplication here
    }
    return ContentService.createTextOutput(JSON.stringify(tokens))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // default: products list (action === 'products')
  sheet = getSheet_('Products', PRODUCTS_HEADER);
  rows = readRows_(sheet, PRODUCTS_HEADER.length);
  out = [];
  for (i = 0; i < rows.length; i++) {
    out.push({
      id: rows[i][0], title: rows[i][1], category: rows[i][2], price: rows[i][3],
      image: rows[i][4], description: rows[i][5], stock: rows[i][6]
    });
  }
  return jsonOut_(out);
}

/**
 * POST handler (body is JSON sent as text/plain by the app — no preflight).
 *   type:"product" → Products sheet (upsert by id)
 *   type:"order"   → Orders sheet (upsert by id) + PUSH broadcast to all devices
 *   type:"token"   → Tokens sheet (upsert by token)
 *   type:"push"    → manual broadcast {title, body, product}
 */
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var type = d.type || 'product';

    if (type === 'order') {
      var ordersSheet = getSheet_('Orders', ORDERS_HEADER);
      upsertRow_(ordersSheet, ORDERS_HEADER, [
        d.id || '', d.name || '', d.mobile || '', d.items || '', d.size || '',
        d.color || '', d.price != null ? d.price : '', d.address || '',
        d.status || 'New Order', d.source || 'store'
      ]);
      // Broadcast the new order to every registered device. A dead FCM
      // config must NEVER fail the order save — caught + reported separately.
      var pushResults = null;
      try {
        pushResults = notifyAllTokens_(
          'New COD Order — BASIC FOOTGEAR',
          (d.id || 'New order') + ' · ' + (d.name || 'Customer') + ' · ' + (d.price != null ? d.price : ''),
          { order: String(d.id || ''), product: String(d.product || '') }
        );
      } catch (pushErr) {
        pushResults = [{ error: 'push not configured — set FCM_SA_JSON via setFcmServiceAccount()' }];
      }
      return jsonOut_({ status: 'saved', push: pushResults });
    }

    if (type === 'token') {
      // Append/refresh the FCM token in the Tokens sheet — NO duplicates
      // (dedupe via upsertToken_ on the trimmed, case-insensitive token).
      var tokensSheet = getTokensSheet_();
      var tokRes = upsertToken_(tokensSheet, d.token, d.updated);
      return jsonOut_({ status: tokRes.saved ? 'saved' : 'skipped', detail: tokRes });
    }

    if (type === 'push') {
      var results = notifyAllTokens_(d.title || 'BASIC FOOTGEAR', d.body || '', { product: String(d.product || '') });
      return jsonOut_({ status: 'sent', results: results });
    }

    // default: product save (type === 'product')
    var productsSheet = getSheet_('Products', PRODUCTS_HEADER);
    upsertRow_(productsSheet, PRODUCTS_HEADER, [
      d.id || '', d.title || d.name || '', d.category || '',
      d.price != null ? d.price : '', d.image || '',
      d.description || '', d.stock != null ? d.stock : ''
    ]);
    return jsonOut_({ status: 'saved' });
  } catch (err) {
    return jsonOut_({ status: 'error', message: String(err && err.message || err) });
  }
}

/**
 * ============================================================
 *  ONE-TIME FCM SETUP (kept PRIVATE — never commit a real key)
 * ============================================================
 *  In the GOOGLE APPS SCRIPT EDITOR (private to your account):
 *    1. Firebase Console → Project settings → Service accounts
 *       → "Generate new private key" → download the JSON
 *    2. Add this function locally with the JSON embedded:
 *         function initFcmServiceAccount() {
 *           var serviceAccount = { ...your service-account JSON... };
 *           return setFcmServiceAccount(JSON.stringify(serviceAccount));
 *         }
 *    3. Run it ONCE (stores the key in Script Properties as
 *       FCM_SA_JSON), then DELETE the embedded JSON.
 *    4. NEVER commit the live private key to a public repo —
 *       anyone holding it can send push notifications as your
 *       Firebase project. Rotate immediately if it leaks.
 * ============================================================
 */

/**
 * Diagnostic — run from the editor at ANY time to check the saved FCM setup
 * without hitting Google APIs: confirms properties really hold the config.
 */
function getFcmStatus() {
  var out;
  try {
    var raw = PropertiesService.getScriptProperties().getProperty('FCM_SA_JSON') || '';
    if (!raw) {
      out = 'STATUS: NOT CONFIGURED — FCM_SA_JSON empty. Add initFcmServiceAccount() locally (private) and run it once.';
    } else {
      var p = JSON.parse(raw);
      var pk = String(p.private_key || '');
      var keyOk = pk.indexOf('-----BEGIN') === 0 && pk.indexOf('PRIVATE KEY-----') > 0;
      out = 'STATUS: CONFIGURED — project "' + p.project_id + '", account "' + p.client_email +
        '", PEM key: ' + (keyOk ? 'PRESENT' : 'MISSING/WRONG — re-run the local init with a fresh JSON.') +
        ' (push sending tests: testPush() / testOrderPush())';
    }
  } catch (err) {
    out = 'STATUS ERROR: ' + (err && err.message || err) + ' — re-run the local init.';
  }
  Logger.log(out);
  return out;
}
