/**
 * ============================================================
 *  BASIC FOOTGEAR — GOOGLE APPS SCRIPT BACKEND (Code.gs)
 * ============================================================
 *  Standalone-safe database backend for the Basic Footgear
 *  store (web + Capacitor Android app).
 *
 *  Sheets managed automatically:
 *    • "Products" — id, title, category, price, image, description, stock
 *    • "Orders"   — id, name, mobile, items, size, color, price, address, status, source
 *
 *  Endpoints (this script deployed as a WEB APP):
 *    GET  <webAppUrl>?action=products            → full product list (JSON array)
 *    GET  <webAppUrl>?action=product&id=<id>     → single product (deep-link resolution)
 *    GET  <webAppUrl>?action=orders              → full order list (JSON array)
 *    POST <webAppUrl>  body={"type":"product", id, title, category, price, image, description, stock}
 *    POST <webAppUrl>  body={"type":"order",   id, name, mobile, items, size, color, price, address, status, source}
 *
 *  DEPLOY SETTINGS (critical):
 *    Deploy → New deployment → Type: Web app
 *      Execute as: Me
 *      Who has access: Anyone        ← MUST be "Anyone", NOT "Anyone with Google account"
 *    → copy the /exec URL into C:\slipperproject\index.html (APPS_SCRIPT_URL)
 *
 *  Notes:
 *    • Works when the script is STANDALONE (no bound spreadsheet):
 *      it auto-creates a spreadsheet named "Basic Footgear DB" on first
 *      write and remembers its id in Script Properties.
 *    • POST uses a text/plain body from the app — this avoids the CORS
 *      preflight that Apps Script cannot answer. No extra handling needed.
 *    • Duplicate protection: re-POSTing the same id does NOT create a
 *      second row (update-if-exists instead).
 * ============================================================
 */

/** Header definitions — single source of truth for both sheets. */
var PRODUCTS_HEADER = ['id', 'title', 'category', 'price', 'image', 'description', 'stock'];
var ORDERS_HEADER = ['id', 'name', 'mobile', 'items', 'size', 'color', 'price', 'address', 'status', 'source'];
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
      return true;
    }
  }
  sheet.appendRow(record);
  return true;
}

/** JSON response helper. */
function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GET handler.
 *   ?action=products            → [ …products ]
 *   ?action=product&id=<id>     → { …product } or {}
 *   ?action=orders              → [ …orders ]
 *   (no action / anything else) → products list (default)
 */
function doGet(e) {
  var params = (e && e.parameter) || {};
  var action = params.action || 'products';
  var productsSheet = getSheet_('Products', PRODUCTS_HEADER);
  var ordersSheet = null;

  if (action === 'product') {
    var wantId = String(params.id || '');
    var prows = readRows_(productsSheet, PRODUCTS_HEADER.length);
    for (var i = 0; i < prows.length; i++) {
      if (String(prows[i][0]) === wantId) {
        return jsonOut_({
          id: prows[i][0], title: prows[i][1], category: prows[i][2], price: prows[i][3],
          image: prows[i][4], description: prows[i][5], stock: prows[i][6]
        });
      }
    }
    return jsonOut_({});   // unknown id — app falls back to its friendly toast
  }

  if (action === 'orders') {
    ordersSheet = getSheet_('Orders', ORDERS_HEADER);
    var orows = readRows_(ordersSheet, ORDERS_HEADER.length);
    var orders = [];
    for (var j = 0; j < orows.length; j++) {
      orders.push({
        id: orows[j][0], name: orows[j][1], mobile: orows[j][2], items: orows[j][3],
        size: orows[j][4], color: orows[j][5], price: orows[j][6], address: orows[j][7],
        status: orows[j][8], source: orows[j][9]
      });
    }
    return jsonOut_(orders);
  }

  // default: products list (action === 'products')
  var rows = readRows_(productsSheet, PRODUCTS_HEADER.length);
  var products = [];
  for (var k = 0; k < rows.length; k++) {
    products.push({
      id: rows[k][0], title: rows[k][1], category: rows[k][2], price: rows[k][3],
      image: rows[k][4], description: rows[k][5], stock: rows[k][6]
    });
  }
  return jsonOut_(products);
}

/**
 * POST handler (body is JSON sent as text/plain by the app — no preflight).
 *   type:"product" → Products sheet : [id, title, category, price, image, description, stock]
 *   type:"order"   → Orders sheet   : [id, name, mobile, items, size, color, price, address, status, source]
 * Re-posting the same id updates the existing row (no duplicates).
 */
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var isOrder = d.type === 'order';

    if (isOrder) {
      var ordersSheet = getSheet_('Orders', ORDERS_HEADER);
      upsertRow_(ordersSheet, ORDERS_HEADER, [
        d.id || '', d.name || '', d.mobile || '', d.items || '', d.size || '',
        d.color || '', d.price != null ? d.price : '', d.address || '',
        d.status || 'New Order', d.source || 'store'
      ]);
    } else {
      var productsSheet = getSheet_('Products', PRODUCTS_HEADER);
      upsertRow_(productsSheet, PRODUCTS_HEADER, [
        d.id || '', d.title || d.name || '', d.category || '',
        d.price != null ? d.price : '', d.image || '',
        d.description || '', d.stock != null ? d.stock : ''
      ]);
    }
    return jsonOut_({ status: 'saved' });
  } catch (err) {
    return jsonOut_({ status: 'error', message: String(err && err.message || err) });
  }
}
