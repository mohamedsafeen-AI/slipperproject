// STORE OWNER WHATSAPP
        const STORE_OWNER_WA = "919384798122";

        // COD ORDERS DATA
        let ordersData = [
            {
                id: "COD-101",
                name: "Fadhil Ahmed",
                mobile: "9843956568",
                items: "Pearl Coast Penny Loafers (sh-4) x 2",
                size: "UK 6",
                color: "Tan Brown",
                price: "₹8,580",
                address: "Mannady, Chennai - 600001",
                status: "New Order",
                notes: "Customer confirmed COD order via WhatsApp cart."
            },
            {
                id: "COD-102",
                name: "Ahzan Razak",
                mobile: "9843956568",
                items: "Sultan Double Monk Straps (sh-1) x 2, Pearl Coast Penny Loafers x 1",
                size: "UK 8 & UK 6",
                color: "Main Color & Tan Brown",
                price: "₹14,270",
                address: "Main Bazaar, Kayalpattinam - 628204",
                status: "Out for Delivery",
                notes: "Out for local delivery in Kayalpattinam. Cash collection upon delivery."
            },
            {
                id: "COD-103",
                name: "Mohamed Aslam",
                mobile: "9123456789",
                items: "Kayal Velvet Luxury Slipper (sl-2)",
                size: "UK 7",
                color: "Black Velvet",
                price: "₹3,490",
                address: "Custom Street, Kayalpattinam - 628204",
                status: "Cash Collected",
                notes: "Cash collected at boutique storefront."
            },
            {
                id: "COD-104",
                name: "Yaser Arafath",
                mobile: "9876543210",
                items: "Runner Knit Sport Trainers (sh-7)",
                size: "UK 10",
                color: "Grey",
                price: "₹5,290",
                address: "Kilakarai, Ramanathapuram",
                status: "Cancelled",
                notes: "Customer cancelled COD request."
            }
        ];

        // Orders registered by real customers through the storefront cart are
        // persisted in localStorage so they survive refreshes / new sessions.
        function saveOrdersData() {
            try {
                localStorage.setItem('bfSavedOrders', JSON.stringify(ordersData.filter(o => o.source === 'store')));
            } catch (err) { /* storage full — dashboard keeps working for this session */ }
        }
        try {
            const savedOrders = JSON.parse(localStorage.getItem('bfSavedOrders') || '[]');
            if (Array.isArray(savedOrders)) {
                savedOrders.forEach(o => {
                    if (o && o.id && !ordersData.some(x => x.id === o.id)) ordersData.unshift(o);
                });
            }
        } catch (err) { /* corrupt storage — fall back to seed data */ }

        // STOCK LEVELS — the admin grid is driven by the LIVE storefront catalog
        // (PRODUCTS, ~50 slippers + shoes incl. owner-added models). Only stock
        // counts are stored here; every catalog item defaults to 10 pairs until
        // the owner edits it (persisted across sessions).
        const DEFAULT_STOCK = 10;
        let stockLevels = {};
        try { stockLevels = JSON.parse(localStorage.getItem('bfStockLevels') || '{}'); } catch (err) { stockLevels = {}; }

        function saveStockLevels() {
            try { localStorage.setItem('bfStockLevels', JSON.stringify(stockLevels)); }
            catch (err) { /* storage full — stock edits stay live for this session */ }
        }

        function getStock(productId) {
            const s = stockLevels[productId];
            return (typeof s === 'number' && s >= 0) ? s : DEFAULT_STOCK;
        }

        // GET IN TOUCH INQUIRIES DATA
        let inquiriesData = [
            { id: "INQ-201", name: "Ahsan Maricar", mobile: "9843956568", email: "ahsan@gmail.com", msg: "Intha slipper UK 8 size stock la irukaa brother?", time: "10 mins ago" },
            { id: "INQ-202", name: "Sheikh Abdullah", mobile: "9789012345", email: "sheikh@gmail.com", msg: "Do you offer custom leather fitting for home delivery in Kayalpattinam?", time: "1 hour ago" },
            { id: "INQ-203", name: "Siddiq Buhari", mobile: "9655123456", email: "buhari@gmail.com", msg: "Can I collect Cash on Delivery directly at your Kayalpattinam store?", time: "3 hours ago" }
        ];

        // INITIALIZE DASHBOARD (lazy — first open)
        function initAdminDashboard() {
            startLiveClock();
            renderOrdersTable(ordersData);
            renderProductsGrid();
            renderInquiries();
            updateKPIs();

            // Search Filter
            document.getElementById('globalSearchInput').addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase();
                const filtered = ordersData.filter(o =>
                    o.name.toLowerCase().includes(query) ||
                    o.id.toLowerCase().includes(query) ||
                    o.mobile.includes(query) ||
                    o.address.toLowerCase().includes(query)
                );
                renderOrdersTable(filtered);
            });
        }

        // TOGGLE: open the dashboard overlay over the storefront
        function openAdminDashboard() {
            document.getElementById('adminDashboard').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // lock storefront scroll while open
            document.getElementById('adminDashboard').scrollTop = 0;
            if (!window.__adminDashboardReady) {
                initAdminDashboard();
                window.__adminDashboardReady = true;
            }
        }

        // TOGGLE: close the dashboard and seamlessly return to the store view
        function closeAdminDashboard() {
            document.getElementById('adminDashboard').classList.add('hidden');
            document.body.style.overflow = '';
            // tidy up any open admin sub-modals behind the overlay
            closeModal('orderModal');
            closeModal('addProductModal');
        }

        // ============================================================
        // ADMIN AUTHENTICATION — strict hardcoded credential gate
        // BOTH the exact admin email AND exact password must match,
        // otherwise access is denied, fields are cleared, and an
        // inline error is shown.
        // ============================================================
        const ADMIN_EMAIL = 'mohamedsafeen590@gmail.com';
        const ADMIN_PASSWORD = 'admin123';

        function openAdminAuthModal() {
            document.getElementById('adminAuthError').classList.add('hidden');
            document.getElementById('adminAuthModal').classList.remove('hidden');
            setTimeout(() => document.getElementById('adminAuthEmail').focus(), 120);
        }

        function closeAdminAuthModal() {
            document.getElementById('adminAuthModal').classList.add('hidden');
            clearAdminAuthFields();
            document.getElementById('adminAuthError').classList.add('hidden');
        }

        function clearAdminAuthFields() {
            document.getElementById('adminAuthEmail').value = '';
            const pw = document.getElementById('adminAuthPassword');
            pw.value = '';
            pw.type = 'password'; // reset the show/hide toggle state
            document.getElementById('adminAuthEyeIcon').className = 'fa-regular fa-eye';
        }

        function handleAdminLogin(e) {
            e.preventDefault();
            const email = document.getElementById('adminAuthEmail').value.trim();
            const password = document.getElementById('adminAuthPassword').value;
            const err = document.getElementById('adminAuthError');

            // STRICT CHECK: exact email AND exact password, nothing else opens the dashboard
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                err.classList.add('hidden');
                closeAdminAuthModal();
                openAdminDashboard();
                showToast('Welcome back, Executive Admin!');
            } else {
                // DENY: clear inputs + inline error message
                clearAdminAuthFields();
                err.classList.remove('hidden');
            }
        }

        // Show / Hide password convenience toggle
        function toggleAdminPassword() {
            const pw = document.getElementById('adminAuthPassword');
            const show = pw.type === 'password';
            pw.type = show ? 'text' : 'password';
            document.getElementById('adminAuthEyeIcon').className = show ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
        }

        // LIVE CLOCK
        function startLiveClock() {
            setInterval(() => {
                const now = new Date();
                document.getElementById('liveClock').innerText = now.toLocaleTimeString('en-US', { hour12: false }) + " IST";
                document.getElementById('liveDate').innerText = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
            }, 1000);
        }

        // TAB SWITCHING
        function switchTab(tabId) {
            const tabs = ['ordersTab', 'productsTab', 'inquiriesTab'];
            tabs.forEach(t => {
                document.getElementById(t).classList.add('hidden');
                const btn = document.getElementById('btn-' + t);
                btn.classList.remove('nav-tab-active');
                btn.classList.add('text-gray-400');
            });

            document.getElementById(tabId).classList.remove('hidden');
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.add('nav-tab-active');
            activeBtn.classList.remove('text-gray-400');
        }

        // UPDATE KPI COUNTS
        function updateKPIs() {
            document.getElementById('kpiTotalOrders').innerText = ordersData.length;
            // COD Order Value recalculated live from the remaining active orders
            // (price strings may be formatted like "₹8,580" — strip to digits first)
            const codValue = ordersData.reduce((sum, o) => {
                const amt = parseFloat(String(o.price || '').replace(/[^\d.]/g, ''));
                return sum + (isNaN(amt) ? 0 : amt);
            }, 0);
            document.getElementById('kpiTotalRevenue').innerText = '₹' + codValue.toLocaleString('en-IN');
            document.getElementById('badgeOrderCount').innerText = ordersData.filter(o => o.status === 'New Order').length;
            document.getElementById('kpiPendingDeliveries').innerText = ordersData.filter(o => o.status === 'Out for Delivery' || o.status === 'New Order').length + " Orders";
            document.getElementById('kpiInquiriesCount').innerText = inquiriesData.length + " Pending";
            document.getElementById('badgeInquiryCount').innerText = inquiriesData.length;
        }

        // RENDER ORDERS TABLE
        function renderOrdersTable(data) {
            const tbody = document.getElementById('ordersTableBody');
            tbody.innerHTML = '';

            if(data.length === 0) {
                tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-gray-500">No COD orders matching query.</td></tr>`;
                return;
            }

            data.forEach(order => {
                let badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
                if(order.status === 'Out for Delivery') badgeClass = 'bg-blue-500/20 text-blue-300 border-blue-500/30';
                if(order.status === 'Cash Collected') badgeClass = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
                if(order.status === 'Cancelled') badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';

                // Pre-filled WhatsApp response message
                const msg = encodeURIComponent(`Hello ${order.name}, this is BASIC FOOTGEAR Kayalpattinam regarding your COD Order #${order.id}.\nItems: ${order.items}\nTotal COD Amount: ${order.price}\nDelivery Address: ${order.address}.\nPlease confirm your availability for cash payment on delivery. Thank you!`);
                const waUrl = `https://wa.me/91${order.mobile}?text=${msg}`;

                tbody.innerHTML += `
                    <tr class="hover:bg-burgundy/30 transition-colors">
                        <td class="p-3.5 font-mono text-gold font-bold">${order.id}</td>
                        <td class="p-3.5">
                            <div class="font-semibold text-gray-200">${order.name}</div>
                            <div class="text-[10px] text-gray-400"><i class="fa-solid fa-phone text-gold/70 mr-1"></i>${order.mobile}</div>
                        </td>
                        <td class="p-3.5">
                            <div class="font-medium text-gray-200 max-w-xs truncate">${order.items}</div>
                            <span class="text-[10px] text-gold bg-gold/10 px-1.5 py-0.5 rounded border border-gold/20">Size: ${order.size}</span>
                        </td>
                        <td class="p-3.5 font-bold text-emerald-400">${order.price} <br><span class="text-[9px] text-gray-400 uppercase font-normal">(COD Cash)</span></td>
                        <td class="p-3.5 max-w-xs truncate text-gray-300">${order.address}</td>
                        <td class="p-3.5">
                            <select onchange="updateOrderStatus('${order.id}', this.value)" aria-label="Update COD delivery status for order ${order.id}" class="text-[10px] font-semibold rounded-lg px-2 py-1 border ${badgeClass} bg-obsidian/80 focus:outline-none">
                                <option value="New Order" ${order.status==='New Order'?'selected':''}>New Order (Pending)</option>
                                <option value="Out for Delivery" ${order.status==='Out for Delivery'?'selected':''}>Out for Delivery (COD)</option>
                                <option value="Cash Collected" ${order.status==='Cash Collected'?'selected':''}>Cash Collected & Completed</option>
                                <option value="Cancelled" ${order.status==='Cancelled'?'selected':''}>Cancelled / Returned</option>
                            </select>
                        </td>
                        <td class="p-3.5 text-center">
                            <div class="flex items-center justify-center gap-2">
                                <button onclick="viewOrderDetails('${order.id}')" title="View Address &amp; Details" aria-label="View order ${order.id}" class="lux-act-btn">
                                    <i class="fa-solid fa-eye"></i>
                                </button>
                                <a href="${waUrl}" target="_blank" title="Send WhatsApp Delivery Update" aria-label="WhatsApp order ${order.id}" class="lux-act-btn lux-act-wa">
                                    <i class="fa-brands fa-whatsapp text-sm"></i>
                                </a>
                                <button onclick="deleteOrder('${order.id}')" title="Delete / Remove this Order" aria-label="Delete order ${order.id}" class="lux-act-btn lux-act-del">
                                    <i class="fa-solid fa-trash text-[11px]"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            });
        }

        // RENDER PRODUCTS GRID — the FULL store catalog (every slipper + shoe on
        // the website, including owner-added models), split into two dedicated
        // category collections so inventory never mixes together.
        function adminCatalogCardHtml(p) {
            const isAngleCard = !!p.images;
            const chipsEntries = isAngleCard ? dedupeCardAngles(p, resolveCardImages(p) || p.images) : null;
            // Stand-in (mirrored side) views now participate: the chip carries a
            // data-standin marker and setProductAngle applies the same scaleX(-1)
            // flip the storefront slider uses — so EVERY slipper shows all 3 chips
            // (Side Profile / Alternate Side / Sole / Bottom) even without a
            // dedicated side photo file on disk.
            const chipsHtml = chipsEntries
                ? chipsEntries.map((e, i) =>
                    `<button type="button" onclick="setProductAngle(this)" data-src="${e.src}" data-standin="${e.standin ? 1 : 0}" class="angle-chip ${i === 0 ? 'angle-chip-active' : ''}">${angleLabelFor(p, e.angle)}</button>`
                ).join('')
                : '';
            const firstEntry = chipsEntries && chipsEntries.length ? chipsEntries[0] : null;
            const imgSrc = firstEntry ? firstEntry.src : p.image;
            const stock = getStock(p.id);
            const category = p.category === 'shoes' ? 'Shoes' : 'Slippers';

            return `
                    <div data-pid="${p.id}" class="glass-card rounded-2xl overflow-hidden border border-gold/20 group hover:border-gold/50 transition-all">
                        <div class="h-40 overflow-hidden relative">
                            <img src="${imgSrc}" loading="lazy" decoding="async" alt="${p.name}" class="prod-angle-img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" ${firstEntry && firstEntry.standin ? `style="transform: scaleX(-1);"` : ''}>
                            <span class="absolute top-3 right-3 bg-obsidian/80 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold/30">${category}</span>
                            <div class="absolute bottom-2 left-2 flex gap-1.5 flex-wrap">${chipsHtml}</div>
                        </div>
                        <div class="p-4 space-y-2">
                            <h4 class="font-serif font-bold text-sm text-gray-100">${p.name}</h4>
                            <div class="flex justify-between items-center text-xs">
                                <span class="font-bold text-gold text-sm">₹${p.price.toLocaleString()}</span>
                                <span class="text-gray-400">Stock: <strong class="${stock < 10 ? 'text-amber-400':'text-emerald-400'}">${stock} pairs</strong></span>
                            </div>
                            <div class="pt-2 border-t border-gold/10 flex justify-between items-center">
                                <span class="text-[10px] text-gray-500">ID: ${p.id}</span>
                                <button onclick="quickEditStock('${p.id}')" class="text-[11px] text-gold hover:underline font-semibold"><i class="fa-solid fa-pen-to-square mr-1"></i>Update Stock</button>
                            </div>
                        </div>
                    </div>
                `;
        }

        function renderProductsGrid() {
            const renderCollection = (gridId, countId, category) => {
                const list = PRODUCTS.filter(p => p.category === category);
                const grid = document.getElementById(gridId);
                if (grid) grid.innerHTML = list.map(adminCatalogCardHtml).join('');
                const countEl = document.getElementById(countId);
                if (countEl) countEl.innerText = `${list.length} Models`;
                return list.length;
            };

            const slipperCount = renderCollection('slippersGrid', 'slippersCount', 'slippers');
            const shoeCount = renderCollection('shoesGrid', 'shoesCount', 'shoes');

            const total = document.getElementById('catalogCount');
            if (total) total.innerText = slipperCount + shoeCount;
        }

        // RENDER WHATSAPP INQUIRIES
        function renderInquiries() {
            const container = document.getElementById('inquiriesContainer');
            container.innerHTML = '';

            inquiriesData.forEach(inq => {
                const encodedMsg = encodeURIComponent(`Hello ${inq.name}, thank you for reaching out to BASIC FOOTGEAR Kayalpattinam! Regarding your message: "${inq.msg}"`);
                const waUrl = `https://wa.me/91${inq.mobile}?text=${encodedMsg}`;

                container.innerHTML += `
                    <div class="glass-card-burgundy rounded-2xl p-4 border border-gold/20 space-y-3 relative">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="font-bold text-sm text-gold">${inq.name}</h4>
                                <p class="text-[10px] text-gray-400"><i class="fa-solid fa-phone text-gold/60 mr-1"></i>${inq.mobile}</p>
                            </div>
                            <span class="text-[10px] text-gray-500">${inq.time}</span>
                        </div>
                        <p class="text-xs text-gray-300 bg-obsidian/60 p-3 rounded-xl border border-gold/10 italic">"${inq.msg}"</p>
                        <div class="flex justify-between items-center pt-2">
                            <span class="text-[10px] text-gold/70">${inq.email}</span>
                            <a href="${waUrl}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-all">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>Reply on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                `;
            });
        }

        // MODAL LOGIC
        function deleteOrder(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            if (!confirm(`Delete COD order ${orderId} from ${order.name}? This cannot be undone.`)) return;
            ordersData = ordersData.filter(o => o.id !== orderId);
            saveOrdersData();
            renderOrdersTable(ordersData);
            updateKPIs();
            showToast(`Order ${orderId} removed from the dashboard.`);
        }

        function viewOrderDetails(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if(!order) return;

            document.getElementById('modalOrderId').innerText = `COD Order: ${order.id}`;
            document.getElementById('modalOrderContent').innerHTML = `
                <div class="space-y-2">
                    <p><strong>Customer Name:</strong> ${order.name}</p>
                    <p><strong>Phone Number:</strong> ${order.mobile}</p>
                    <p><strong>Ordered Items:</strong> ${order.items}</p>
                    <p><strong>Footwear Size / Color:</strong> ${order.size} | ${order.color}</p>
                    <p><strong>COD Total Amount:</strong> <span class="text-emerald-400 font-bold">${order.price}</span></p>
                    <p><strong>Delivery Address:</strong> <span class="text-gold">${order.address}</span></p>
                    <p><strong>Notes/Payment:</strong> Cash on Delivery (COD)</p>
                    <p><strong>Current COD Status:</strong> <span class="text-gold font-bold">${order.status}</span></p>
                </div>
            `;

            const msg = encodeURIComponent(`Hello ${order.name}, regarding your COD order #${order.id} from BASIC FOOTGEAR Kayalpattinam...`);
            document.getElementById('modalWaBtn').onclick = () => window.open(`https://wa.me/91${order.mobile}?text=${msg}`, '_blank');
            document.getElementById('orderModal').classList.remove('hidden');
        }

        function closeModal(modalId) {
            const m = document.getElementById(modalId);
            if (m) m.classList.add('hidden');
        }

        function openAddProductModal() {
            resetAdminAnglePreviews();
            document.getElementById('addProductModal').classList.remove('hidden');
        }

        // ============================================================
        // 3-ANGLE IMAGE INPUTS (Front / Side / Top-Sole)
        // Each angle accepts a PC file upload (FileReader -> data URL)
        // OR a typed local relative path / hosted URL. The latest action
        // per angle wins; thumbnails preview live inside the modal.
        // ============================================================
        const adminAngleState = { Front: '', Side: '', Top: '' };

        function adminAngleFile(input, angle) {
            const file = input.files && input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => compressAdminAngle(ev.target.result, angle);
            reader.readAsDataURL(file);
        }

        // Downscale uploads to <=640px JPEG so the data URLs stay light enough
        // for localStorage persistence (falls back to the raw file on failure)
        function compressAdminAngle(dataUrl, angle) {
            const img = new Image();
            img.onload = () => {
                try {
                    const MAX = 640;
                    const scale = Math.min(1, MAX / Math.max(img.width, img.height));
                    const c = document.createElement('canvas');
                    c.width = Math.max(1, Math.round(img.width * scale));
                    c.height = Math.max(1, Math.round(img.height * scale));
                    const ctx = c.getContext('2d');
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, c.width, c.height);
                    ctx.drawImage(img, 0, 0, c.width, c.height);
                    setAdminAnglePreview(angle, c.toDataURL('image/jpeg', 0.72));
                } catch (err) {
                    setAdminAnglePreview(angle, dataUrl);
                }
            };
            img.onerror = () => setAdminAnglePreview(angle, dataUrl);
            img.src = dataUrl;
        }

        function adminAnglePath(input, angle) {
            setAdminAnglePreview(angle, input.value.trim());
        }

        function setAdminAnglePreview(angle, src) {
            adminAngleState[angle] = src || '';
            const img = document.getElementById('newProdPrev' + angle);
            const wrap = document.getElementById('newProdPrevWrap' + angle);
            if (!src) {
                img.removeAttribute('src');
                img.onload = null; img.onerror = null;
                wrap.classList.add('hidden');
                return;
            }
            img.onload = () => wrap.classList.remove('hidden');
            img.onerror = () => { wrap.classList.add('hidden'); adminAngleState[angle] = ''; };
            img.src = src;
        }

        function resetAdminAnglePreviews() {
            ['Front', 'Side', 'Top'].forEach(a => {
                document.getElementById('newProdImg' + a).value = '';
                document.getElementById('newProdPath' + a).value = '';
                setAdminAnglePreview(a, '');
            });
        }

        // 3-angle thumbnail switcher on catalog cards
        function setProductAngle(btn) {
            const card = btn.closest('.glass-card');
            card.querySelectorAll('.angle-chip').forEach(c => c.classList.remove('angle-chip-active'));
            btn.classList.add('angle-chip-active');
            const img = card.querySelector('.prod-angle-img');
            img.src = btn.dataset.src;
            // mirrored stand-in view (Alternate Side without a real side file):
            // flip the primary photo in place, exactly like the storefront slider
            if (btn.dataset.standin === '1') {
                img.style.transform = 'scaleX(-1)';
            } else {
                img.style.transform = '';   // real angle file: clear any leftover flip
            }
        }

        function handleAddProduct(e) {
            e.preventDefault();
            const front = adminAngleState.Front;
            const side = adminAngleState.Side;
            const top = adminAngleState.Top;
            if (!front && !side && !top) {
                showToast('Add at least one angle image — upload a file or type its path');
                return;
            }
            const newP = {
                // Fully dynamic reference ID: unique even if two models are added in
                // the same millisecond — no manual hardcoding anywhere in the flow
                id: `own-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`,
                name: document.getElementById('newProdName').value,
                category: document.getElementById('newProdCat').value,
                price: parseInt(document.getElementById('newProdPrice').value),
                stock: parseInt(document.getElementById('newProdStock').value),
                img: front || side || top,  // card default: Front view (or first available angle)
                imgFront: front,
                imgSide: side,
                imgTop: top
            };

            // Register the owner's stock count (persisted with the catalog sync)
            stockLevels[newP.id] = isNaN(newP.stock) ? DEFAULT_STOCK : newP.stock;
            saveStockLevels();
            document.dispatchEvent(new CustomEvent('bfStockChanged', { detail: { id: newP.id } }));

            // ===== Register on the STOREFRONT =====
            // Unshifting into PRODUCTS instantly leads New Arrivals ("all"), the home
            // featured grid and search, while the mapped category routes it into the
            // Slippers or Shoes collection. images{} feeds the cards' existing
            // 3-angle dot slider + hover auto-slide; angleLabels inherit the
            // canonical per-category view names (shoes: Side Profile / Top View /
            // Front Angle — slippers: Side Profile / Alternate Side / Sole/Bottom).
            // Asset mapping is fully automatic and PER CATEGORY — and EVERY slot
            // is always covered (real upload → true photo; missing → a visually
            // distinct style of stand-in) so every new product ALWAYS renders
            // all 3 angle chips and all 3 carousel dots:
            //   SLIPPERS: catalog photo first (index 0), Alternate Side as the other
            //             side (upload or 'mirror' stand-in), Sole/Bottom view
            //             (tread upload or 'detail' stand-in).
            //   SHOES:    Side Profile ALWAYS leads (real side upload, else mirrored
            //             'mirror' stand-in), Top View (real top upload, else
            //             'detail' stand-in), Front Angle (real front upload,
            //             else 'closeup' stand-in).
            const frontSrc = newP.imgFront || newP.img;
            const isOwnerShoe = newP.category === 'Shoes';
            let storefrontProduct;
            if (isOwnerShoe) {
                const sideSrc = (newP.imgSide && newP.imgSide !== frontSrc && newP.imgSide !== newP.imgTop) ? newP.imgSide : null;
                const topSrc = (newP.imgTop && newP.imgTop !== frontSrc && newP.imgTop !== newP.imgSide) ? newP.imgTop : null;
                storefrontProduct = {
                    id: newP.id,
                    name: newP.name,
                    category: 'shoes',
                    price: newP.price,
                    rating: 4.8,
                    reviews: 0,
                    tag: 'New',
                    image: sideSrc || newP.img,   // side photo leads everywhere (card default, cart, modal)
                    images: {
                        // Side Profile = the card's PRIMARY/first view on load
                        top: sideSrc || { standin: 'mirror' },               // mirrored primary = the other side
                        left: topSrc || { standin: 'detail' },               // Top View (real top, else detail stand-in)
                        back: (frontSrc && frontSrc !== sideSrc) ? frontSrc : { standin: 'closeup' }   // Front Angle
                    },
                    // no angleLabels → inherits the canonical shoe names:
                    // Side Profile (index 0) / Top View / Front Angle — matching seed shoes
                    description: 'Handpicked by the boutique owner — fresh addition to the collection.',
                    sizes: [6, 7, 8, 9, 10, 11],
                    imgFront: newP.imgFront,
                    imgSide: newP.imgSide,
                    imgTop: newP.imgTop
                };
            } else {
                storefrontProduct = {
                    id: newP.id,
                    name: newP.name,
                    category: 'slippers',
                    price: newP.price,
                    rating: 4.8,
                    reviews: 0,
                    tag: 'New',
                    image: newP.img,
                    images: {
                        top: frontSrc,                                        // catalog photo (index 0)
                        ...(newP.imgSide && newP.imgSide !== frontSrc
                            ? { left: newP.imgSide }                          // Alternate Side (real side file/upload)
                            : { left: { standin: 'mirror' } }),               // Alternate Side (mirrored primary)
                        ...(newP.imgTop && newP.imgTop !== frontSrc && newP.imgTop !== newP.imgSide
                            ? { back: newP.imgTop } : { back: { standin: 'detail' } })   // Sole / Bottom (or detail stand-in)
                    },
                    // no angleLabels → inherits the canonical slipper names:
                    // Side Profile / Alternate Side / Sole / Bottom — matching seed slippers
                    description: 'Handpicked by the boutique owner — fresh addition to the collection.',
                    sizes: [6, 7, 8, 9, 10, 11],
                    imgFront: newP.imgFront,
                    imgSide: newP.imgSide,
                    imgTop: newP.imgTop
                };
            }
            PRODUCTS.unshift(storefrontProduct);
            DYNAMIC_PRODUCTS.unshift(storefrontProduct);
            try {
                localStorage.setItem('bfDynamicProducts', JSON.stringify(DYNAMIC_PRODUCTS));
            } catch (err) {
                showToast('Note: images too large for offline persistence — product stays live for this session');
            }

            // Live DOM refresh of whatever storefront view is open (no page reload)
            if (['home', 'slippers', 'shoes', 'new', 'all'].includes(currentPage)) navigateTo(currentPage);

            renderProductsGrid();
            closeModal('addProductModal');
            resetAdminAnglePreviews();
            showToast(`New footwear added to New Arrivals & ${storefrontProduct.category === 'shoes' ? 'Shoes' : 'Slippers'} collection!`);
        }

        function updateOrderStatus(id, newStatus) {
            const order = ordersData.find(o => o.id === id);
            if(order) {
                order.status = newStatus;
                updateKPIs();
                showToast(`COD ${id} status updated: ${newStatus}`);
            }
        }

        function quickEditStock(id) {
            const newStock = prompt("Enter updated stock count for ID " + id + ":");
            if(newStock !== null) {
                const prod = PRODUCTS.find(p => p.id === id);
                if(prod) {
                    const parsed = parseInt(newStock);
                    stockLevels[id] = isNaN(parsed) ? getStock(id) : parsed;
                    saveStockLevels();
                    // LIVE STOREFRONT SYNC: refresh the customer-facing stock badges instantly
                    document.dispatchEvent(new CustomEvent('bfStockChanged', { detail: { id } }));
                    renderProductsGrid();
                    showToast(`Stock updated for ${id}: ${stockLevels[id]} pairs`);
                }
            }
        }

        function filterOrdersTable() {
            const filterVal = document.getElementById('orderStatusFilter').value;
            if(filterVal === 'ALL') {
                renderOrdersTable(ordersData);
            } else {
                const filtered = ordersData.filter(o => o.status === filterVal);
                renderOrdersTable(filtered);
            }
        }

        function refreshDashboardData() {
            const icon = document.getElementById('refreshIcon');
            icon.classList.add('fa-spin');
            setTimeout(() => {
                icon.classList.remove('fa-spin');
            }, 600);
        }

        /* ============================================================
           ACCESSIBILITY: FONT AWESOME GLYPHS ARE DECORATIVE
           Font Awesome renders icons via <i> elements, which can't
           carry an alt attribute. The correct, standards-compliant
           treatment is aria-hidden="true" so screen readers skip the
           glyph — every control it decorates either has visible text
           or its own aria-label (see button/form audit).
           A MutationObserver keeps icons injected by dynamic re-renders
           (product grid, cart drawer, orders table, modals) tagged too.
           ============================================================ */
        (function tagDecorativeIcons() {
            const SEL = 'i[class*="fa-"]';
            const tag = (el) => { if (!el.hasAttribute('aria-hidden')) el.setAttribute('aria-hidden', 'true'); };
            // initial full pass (defer scripts run before DCL — all static glyphs exist)
            document.querySelectorAll(SEL).forEach(tag);
            // PERF: the observer no longer rescans the WHOLE document and rewrites
            // attributes on every mutation (O(doc) per mutation during re-renders).
            // It coalesces bursts into one idle/rAF pass and skips glyphs already
            // tagged, so dynamic re-renders cost near-zero main-thread time.
            let queued = false;
            const process = () => {
                queued = false;
                document.querySelectorAll(SEL).forEach(el => tag(el));
            };
            const schedule = () => {
                if (queued) return;
                queued = true;
                (window.requestIdleCallback || window.requestAnimationFrame)(process);
            };
            new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
        })();
