// Database of Footwear Products
        const PRODUCTS = [
            {
                id: 'sl-1',
                name: 'PUMA Mercedes Leadcat 2.0 Slides',
                category: 'slippers',
                price: 2890,
                rating: 4.9,
                reviews: 42,
                tag: 'Bestseller',
                image: './assestes/menslipper1.webp',
                // Full 3-angle coverage: Front / Side Profile / Top-Sole
                imgFront: './assestes/menslipper1.webp',
                imgSide: './assestes/menslipper1_side.webp',   // mirrored studio shot — real file on disk
                imgTop: './assestes/backside1.webp',
                description: 'Premium F1 motorsport edition slides with cushioned comfort.',
                sizes: [6, 7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menslipper1.webp',
                    left: './assestes/menslipper1_side.webp',
                    back: './assestes/backside1.webp'
                }
                // angle names inherited from CARD_ANGLE_LABELS.slippers (canonical)
            },
            {
                id: 'sl-2',
                name: 'Birkenstock Kyoto Navy Cork Sandals',
                category: 'slippers',
                price: 1990,
                rating: 4.8,
                reviews: 31,
                tag: 'Comfort',
                image: './assestes/menslipper2.webp',
                // Full 3-angle coverage: Front / Side Profile / Top-Sole
                imgFront: './assestes/menslipper2.webp',
                imgSide: './assestes/menslipper2_side.webp',   // mirrored studio shot — real file on disk
                imgTop: './assestes/backside2.webp',
                description: 'Authentic cork footbed sandals with adjustable navy suede strap.',
                sizes: [7, 8, 9, 10],
                images: {
                    top: './assestes/menslipper2.webp',
                    left: './assestes/menslipper2_side.webp',
                    back: './assestes/backside2.webp'
                }
                // angle names inherited from CARD_ANGLE_LABELS.slippers (canonical)
            },
            {
                id: 'sh-1',
                name: 'Korkai Hand-Burnished Oxfords',
                category: 'shoes',
                price: 5490,
                rating: 5.0,
                reviews: 28,
                tag: 'Luxury',
                image: './assestes/menshoe1.webp',
                description: 'Hand-painted mahogany patina oxfords for grand formal occasions.',
                sizes: [7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menshoe1.webp',
                    left: './assestes/shoetopview1.webp',
                    back: './assestes/menshoefront1.webp'
                }
            },
            {
                id: 'sh-2',
                name: 'Pearl Coast Penny Loafers',
                category: 'shoes',
                price: 4290,
                rating: 4.7,
                reviews: 19,
                tag: 'Trending',
                image: './assestes/menshoe2.webp',
                description: 'Slip-on suede loafers with genuine leather lining and regal look.',
                sizes: [6, 7, 8, 9, 10],
                images: {
                    top: './assestes/menshoe2.webp',
                    left: './assestes/shoetopview2.webp',
                    back: './assestes/menshoefront2.webp'
                }
            },
            {
                id: 'sl-3',
                name: 'PCW Collection Brown Comfort Slides',
                category: 'slippers',
                price: 3490,
                rating: 4.9,
                reviews: 55,
                tag: 'Festive',
                image: './assestes/menslipper3.webp',
                description: 'Dual-strap velcro comfort slides with cushioned daily wear footbed.',
                sizes: [7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menslipper3.webp',
                    back: './assestes/backside3.webp',
                    left: { standin: 'mirror' }   // no file on disk — mirrored primary
                }
            },
            {
                id: 'sh-3',
                name: 'Sultan Double Monk Straps',
                category: 'shoes',
                price: 4990,
                rating: 4.8,
                reviews: 23,
                tag: 'New',
                image: './assestes/menshoe3.webp',
                description: 'Double monk straps with brass buckles and Goodyear welt build.',
                sizes: [8, 9, 10, 11],
                // Card-level color variants (swatches switch the photo file itself).
                // zoom: per-variant scale override — source photos carry different white
                // margins, so each is scaled so the SHOE fills the tile like items 1-2 do.
                cardVariants: [
                    {
                        name: 'Main Color', hex: '#C41E24', image: './assestes/menshoe3.webp', zoom: 1.75,
                        images: {
                            top: './assestes/menshoe3.webp',
                            left: './assestes/shoetopview3.webp',
                            back: './assestes/menshoefront3.webp'
                        }
                    },
                    {
                        name: 'Black',      hex: '#141416', image: './assestes/menshoe3.1.webp', zoom: 1,
                        images: {
                            top: './assestes/menshoe3.1.webp',
                            left: './assestes/shoetopview3.1.webp',
                            back: './assestes/menshoefront3.1.webp'
                        }
                    },
                    {
                        name: 'Brown',      hex: '#D2B48C', image: './assestes/menshoe3.2.webp', zoom: 1.9,
                        images: {
                            top: './assestes/menshoe3.2.webp',
                            left: './assestes/shoetopview3.2.webp',
                            back: './assestes/menshoefront3.2.webp'
                        }
                    }
                ],
                images: {
                    top: './assestes/menshoe3.webp',
                    left: './assestes/shoetopview3.webp',
                    back: './assestes/menshoefront3.webp'
                }
            },
            {
                id: 'sh-4',
                name: 'Kayal Derby Cap-Toe Derbies',
                category: 'shoes',
                price: 4490,
                rating: 4.6,
                reviews: 17,
                tag: 'Classic',
                image: './assestes/menshoe4.webp',
                description: 'Classic cap-toe derbies with cushioned leather insoles.',
                sizes: [6, 7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menshoe4.webp',
                    left: './assestes/shoetopview4.webp',
                    back: './assestes/menshoefront4.webp'
                }
            },
            {
                id: 'sh-5',
                name: 'Sultan Chelsea Leather Boots',
                category: 'shoes',
                price: 5990,
                rating: 5.0,
                reviews: 21,
                tag: 'Premium',
                image: './assestes/menshoe5.webp',
                description: 'Elastic-side chelsea boots in burnished black calf leather.',
                sizes: [7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menshoe5.webp',
                    left: './assestes/shoetopview5.webp',
                    back: './assestes/menshoefront5.webp'
                }
            },
            {
                id: 'sh-6',
                name: 'Basic Footgear Minimal Leather Sneakers',
                category: 'shoes',
                price: 3990,
                rating: 4.7,
                reviews: 34,
                tag: 'Signature',
                image: './assestes/menshoe6.webp',
                description: 'Minimal full-grain leather sneakers with gold-tone accents.',
                sizes: [6, 7, 8, 9, 10],
                // Photos normalized on disk to the same fill style as the other shoe
                // models (trimmed transparent/white margins, scale-matched to items 1/2),
                // so the card fills its tile exactly like the shoes beside it.
                // (Previously a portrait canvas that needed zoom: 2.2 — dead config on
                // angle-dot cards; removed in favor of normalized source files.)
                images: {
                    top: './assestes/menshoe6.webp',
                    left: './assestes/shoetopview6.webp',
                    back: './assestes/menshoefront6.webp'
                }
            },
            {
                id: 'sh-7',
                name: 'Basic Footgear Runner Knit Trainers',
                category: 'shoes',
                price: 3490,
                rating: 4.5,
                reviews: 26,
                tag: 'Sport',
                image: './assestes/menshoe7.webp',
                description: 'Featherweight knit running trainers with responsive foam soles.',
                sizes: [6, 7, 8, 9, 10, 11],
                images: {
                    top: './assestes/menshoe7.webp',
                    left: './assestes/shoetopview7.webp',
                    back: './assestes/menshoefront7.webp'
                }
            }
        ];

        // ============================================================
        // PRODUCT -> WHATSAPP DEEP LINK
        // Every order line carries a clickable link that OPENS THE PAGE HIGHLIGHTING
        // THE EXACT MODEL the customer ordered (the product modal with its 3-angle
        // images, size options and full details), so the boutique owner can identify
        // it in one tap. Resolution order:
        //   1. SITE_BASE_URL set  →  <configured domain>/?product=<id>    (deployed site)
        //   2. live http/https    →  origin + pathname + ?product=<id>    (Vercel etc.)
        //   3. local preview      →  the page's own URL + ?product=<id> — still fully
        //      clickable and opens the local page on the owner's machine. WhatsApp
        //      only auto-links http(s) URLs, so set SITE_BASE_URL (or deploy) for
        //      phone-clickable https links.
        // Bare asset paths ("assestes/menslipper3.png") are NEVER sent — WhatsApp
        // does not hyperlink text without a protocol.
        const SITE_BASE_URL = '';

        function getProductImageLink(id) {
            const product = PRODUCTS.find(p => p.id === id);
            if (!product) return '';
            const qs = '?product=' + encodeURIComponent(id);
            if (SITE_BASE_URL) return SITE_BASE_URL.replace(/\/+$/, '') + '/' + qs;   // owner-configured live domain
            const loc = window.location;
            const isLiveSite = /^https?:$/.test(loc.protocol) &&
                !/^(localhost|127\.0\.0\.1|\[::1\])$/i.test(loc.hostname);
            if (isLiveSite) return loc.origin + (loc.pathname || '/') + qs;           // deployed → https deep link
            return loc.href.split('#')[0] + qs;                                       // local preview deep link
        }

        // ---------- Everyday Style Generator: curated 10-piece MEN'S FOOTWEAR lineup ----------
        // Adds 7 additional slipper/sandal entries (with the 3 originals = 10 total) using
        // varied names, realistic ₹ prices, sizes 6–11, colors and reliable placeholder images.
        const SLIPPER_BASE_NAMES = [
            'Kolhapuri Chappal', 'Leather Slide Slipper', 'V-Strap Daily Chappal', 'Memory Foam Ortho Slipper',
            'Toe-Ring Ethnic Chappal', 'Rubber Flip-Flops', 'Peshawari Slipper', 'PU Leather Slider',
            'Velcro Sports Sandal', 'Beach Casual Flip-Flops', 'Office Formal Chappal', 'Festive Embroidered Slipper'
        ];
        const SLIPPER_QUALIFIERS = ['Classic', 'Premium', 'Everyday', 'Lite'];
        const SLIPPER_COLORS = [
            'Tan', 'Black', 'Brown', 'Navy', 'Olive', 'Cherry Red', 'Mehendi Green', 'Grey'
        ];
        const SLIPPER_SIZE_SETS = [
            [6, 7, 8, 9, 10, 11], [6, 7, 8, 9, 10], [7, 8, 9, 10, 11],
            [6, 8, 9, 10, 11], [7, 8, 9, 10], [6, 7, 8, 9, 11]
        ];
        const FALLBACK_IMAGE = 'https://images.pexels.com/photos/14187813/pexels-photo-14187813.jpeg?auto=compress&cs=tinysrgb&w=800';
        // 47-image shared pool (all HTTP 200, no shoes/sneakers/heels) — the first 7 are used
        // for the generated items; the rest serve as color-variant imagery via the modulo maps below
        const SLIPPER_IMAGES = [
            'https://images.pexels.com/photos/11664691/pexels-photo-11664691.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/20374407/pexels-photo-20374407.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/23692992/pexels-photo-23692992.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/24863335/pexels-photo-24863335.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/25038742/pexels-photo-25038742.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/26925248/pexels-photo-26925248.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/27174537/pexels-photo-27174537.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/27377979/pexels-photo-27377979.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/27719438/pexels-photo-27719438.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/28963907/pexels-photo-28963907.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/29546294/pexels-photo-29546294.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/30335806/pexels-photo-30335806.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/30425717/pexels-photo-30425717.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/30737600/pexels-photo-30737600.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/31129841/pexels-photo-31129841.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/31451024/pexels-photo-31451024.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/31504382/pexels-photo-31504382.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/32685501/pexels-photo-32685501.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/32913135/pexels-photo-32913135.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/33475823/pexels-photo-33475823.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/33475834/pexels-photo-33475834.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/34447681/pexels-photo-34447681.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/34447683/pexels-photo-34447683.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/34505160/pexels-photo-34505160.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/35166184/pexels-photo-35166184.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/35185490/pexels-photo-35185490.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/36212466/pexels-photo-36212466.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/36937550/pexels-photo-36937550.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/37284757/pexels-photo-37284757.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/39245998/pexels-photo-39245998.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/39299315/pexels-photo-39299315.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/39308975/pexels-photo-39308975.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/39461294/pexels-photo-39461294.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/40355054/pexels-photo-40355054.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4462656/pexels-photo-4462656.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4996974/pexels-photo-4996974.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5386758/pexels-photo-5386758.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5470105/pexels-photo-5470105.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5743436/pexels-photo-5743436.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5988839/pexels-photo-5988839.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6008231/pexels-photo-6008231.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6910303/pexels-photo-6910303.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6964398/pexels-photo-6964398.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/9742012/pexels-photo-9742012.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/11588303/pexels-photo-11588303.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7781988/pexels-photo-7781988.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/31129829/pexels-photo-31129829.jpeg?auto=compress&cs=tinysrgb&w=800'
        ];

        // 10 local product photos shipped in the project root (menslipper1.jpg … menslipper10.png);
        // entries 1-3 above already use the first three files, so the generator maps indices 4-10 here.
        const LOCAL_SLIPPER_IMAGES = [
            './assestes/menslipper4.webp',
            './assestes/menslipper5.webp',
            './assestes/menslipper6.webp',
            './assestes/menslipper7.webp',
            './assestes/menslipper8.webp',
            './assestes/menslipper9.webp',
            './assestes/menslipper10.webp'
        ];

        // Authentic product overrides for the first three generated items (products 4-6):
        // keyed by generator index i, falling back to the generative naming below.
        const SLIPPER_NAME_OVERRIDES = {
            1: 'Birkenstock Mayari Mocca Sandals',
            2: 'PUMA Cool Cat 2.0 Grey Slides',
            3: 'Sparx Red & Black Graphic Slides',
            4: 'Skechers Foamies Teal Comfort Slides',
            5: 'PUMA Softride Pro Adjustable Slides',
            6: 'PUMA Royal Cross-Strap Leather Slides',
            7: 'ZARA Buckled Leather Thong Sandals'
        };
        const SLIPPER_DESCRIPTION_OVERRIDES = {
            1: 'Classic toe-loop sandals with adjustable oiled leather buckle straps.',
            2: 'Iconic cat logo padded slides featuring a soft cushioned footbed.',
            3: 'Sporty daily-wear printed slides with textured anti-slip sole.',
            4: 'Lightweight cushioned EVA slides with soft padded upper.',
            5: 'Velcro adjustable strap slides built with Softride cushioning.',
            6: 'Ergonomic cross-strap slippers with a sleek dual-tone finish.',
            7: 'Premium cork footbed thong sandals with adjustable side buckle.'
        };

        for (let i = 1; i <= 7; i++) {
            const baseName  = SLIPPER_BASE_NAMES[(i - 1) % SLIPPER_BASE_NAMES.length];
            const qualifier = SLIPPER_QUALIFIERS[Math.floor((i - 1) / SLIPPER_BASE_NAMES.length) % SLIPPER_QUALIFIERS.length];
            const color     = SLIPPER_COLORS[(i - 1) % SLIPPER_COLORS.length];
            const mainImg   = LOCAL_SLIPPER_IMAGES[i - 1];                              // multi-angle base name
            const angleStem = mainImg.replace(/\.(jpe?g|png)$/i, '');                   // './assestes/menslipper4'
            const angleExt  = (mainImg.match(/\.(jpe?g|png)$/i) || [''])[0];            // '.jpg' / '.png'
            const angleImgs = angle => angleStem + '_' + angle + angleExt;              // './assestes/menslipper4_back.jpg'

            PRODUCTS.push({
                id: 'sl-g' + i,
                name: SLIPPER_NAME_OVERRIDES[i] || `${qualifier} ${baseName}`,
                category: 'slippers',
                price: 349 + ((i % 20) * 80),                                   // ₹349 – ₹1,869
                rating: Math.round((4.0 + ((i * 7) % 10) / 10) * 10) / 10,       // 4.0 – 4.9
                reviews: 5 + ((i * 11) % 56),
                tag: ['Everyday', 'Comfort', 'Value Buy', 'New', 'Bestseller', 'Festive'][(i - 1) % 6],
                image: mainImg,                                                    // local hi-res product photo
                images: {
                    top: mainImg,
                    // backside1–10.png exist on disk — only wire a sole view when the
                    // file is real (never fabricate paths that 404 on every render)
                    ...(i <= 7 ? { back: './assestes/backside' + (i + 3) + '.webp' } : {}),
                    // Side profile: no dedicated file — mirrored primary stand-in
                    // (rendered with the same scaleX(-1) flip the interactive slider uses)
                    left: { standin: 'mirror' }
                },
                description: SLIPPER_DESCRIPTION_OVERRIDES[i] || `Sturdy ${baseName.toLowerCase()} in a smart ${color.toLowerCase()} finish with a soft cushioned sole — easy, comfortable wear for home, work, and street use.`,
                sizes: SLIPPER_SIZE_SETS[(i - 1) % SLIPPER_SIZE_SETS.length],
                color: color,
                // Color-to-image mapping: every color variant shows the same local hi-res photo;
                // the modal's color tint overlay still distinguishes each variant visually
                colorImages: {
                    'Tan Brown':  LOCAL_SLIPPER_IMAGES[i - 1],
                    'Black':      LOCAL_SLIPPER_IMAGES[i - 1],
                    'Chocolate':  LOCAL_SLIPPER_IMAGES[i - 1],
                    'Navy Blue':  LOCAL_SLIPPER_IMAGES[i - 1]
                }
            });
        }
        // ---------- End Everyday Style Generator ----------

        // Per-color images for the 3 original slippers too (so all 50 support color-image swap)
        PRODUCTS.filter(p => p.category === 'slippers' && !p.colorImages).forEach((p, oi) => {
            p.colorImages = {};
            ['Tan Brown', 'Black', 'Chocolate', 'Navy Blue'].forEach((c, k) => {
                p.colorImages[c] = SLIPPER_IMAGES[(29 + 4 * oi + k) % SLIPPER_IMAGES.length];
            });
        });

        // ============================================================
        // Owner-added products (Admin Dashboard -> "Add New Footwear Model"):
        // persisted in localStorage, hydrated into the live PRODUCTS catalog
        // at the very front so they lead New Arrivals, their category page,
        // home featured grid, search, cart and the product modal — no reloads.
        // ============================================================
        let DYNAMIC_PRODUCTS = [];
        try { DYNAMIC_PRODUCTS = JSON.parse(localStorage.getItem('bfDynamicProducts') || '[]'); } catch (err) { DYNAMIC_PRODUCTS = []; }
        // Legacy-session migration: dynamic products saved by older admin sessions
        // carry partial slot mappings (some with only 2 chips showing). Rebuild
        // every owner product into the CURRENT always-3-chip mapping at hydration:
        //   SHOES   → Side Profile leads (real side upload, else mirrored stand-in),
        //             Top View (real top upload, else detail stand-in),
        //             Front Angle (real front upload, else close-up stand-in) —
        //             all three canonical chips always present.
        //   SLIPPERS→ Side Profile / Alternate Side / Sole / Bottom — canonical
        //             labels inherited, every slot covered by real photo or stand-in.
        function remapLegacyOwnerProductAngles(p) {
            if (!p || !p.id || p.cardVariants) return;
            const front = p.imgFront || null;
            const side = p.imgSide || null;
            const top = p.imgTop || null;
            if (!front && !side && !top && !p.img) return;   // not an owner upload record
            // Robustness guards: legacy/partial records may be missing the images{}
            // map, the primary image, or the size run — every owner record leaves
            // here complete regardless of what was persisted.
            if (!Array.isArray(p.sizes) || !p.sizes.length) p.sizes = [6, 7, 8, 9, 10, 11];
            if (!p.description) p.description = 'Handpicked by the boutique owner — fresh addition to the collection.';
            if (!p.img) p.img = front || side || top;
            if (p.category === 'shoes' || p.category === 'Shoes') {
                const frontSrc = front || p.img;
                const sideSrc = (side && side !== frontSrc && side !== top) ? side : null;
                const topSrc = (top && top !== frontSrc && top !== side) ? top : null;
                p.image = sideSrc || p.img;           // side photo leads everywhere
                p.images = {
                    top: sideSrc || { standin: 'mirror' },                        // Side Profile (index 0)
                    left: topSrc || { standin: 'detail' },                        // Top View
                    back: (frontSrc && frontSrc !== sideSrc) ? frontSrc : { standin: 'closeup' }   // Front Angle
                };
                delete p.angleLabels;                 // inherit canonical shoe view names
            } else {
                const frontSrc = front || p.img;
                p.images = {
                    top: frontSrc,                                                 // catalog photo (index 0)
                    left: (side && side !== frontSrc) ? side : { standin: 'mirror' },          // Alternate Side
                    back: (top && top !== frontSrc && top !== side) ? top : { standin: 'detail' }  // Sole / Bottom
                };
                delete p.angleLabels;                 // inherit canonical slipper view names
                if (!p.image) p.image = p.img || frontSrc;   // partial legacy records
            }
        }
        DYNAMIC_PRODUCTS.forEach(p => {
            if (p && p.id && p.name && !PRODUCTS.some(x => x.id === p.id)) {
                try { remapLegacyOwnerProductAngles(p); } catch (err) {}
                PRODUCTS.unshift(p);
            }
        });

        let cart = [];
        let currentFilter = 'all';

        // Color & Size selection state for the product modal.
        // Color selection lives ONLY on the designated shoe (sh-3, Sultan Double
        // Monk Straps) via its cardVariants — every other model displays its true
        // photo with NO color chooser and NO simulated tinting.
        let selectedColor = '';                    // only meaningful for card-variant models (sh-3)
        let selectedSize = null;                   // user must pick (validated on Add)

        // ---------- Card-level color variant system (used by product sh-3) ----------
        // Selected variant per product id: { 'sh-3': 'Black', ... }
        let cardColor = {};

        // Resolve which image a given color variant should display
        function resolveVariant(product, name) {
            if (!product) return '';
            if (!product.cardVariants) return product.image;
            return (product.cardVariants.find(v => v.name === name) || product.cardVariants[0]).image;
        }

        // Per-variant / per-product zoom — source photos carry different white margins,
        // so each is scaled so the shoe subject fills the tile like the large shoe photos
        function variantZoom(product, name) {
            if (!product) return 1;
            if (!product.cardVariants) return product.zoom || 1;
            const v = product.cardVariants.find(v => v.name === name) || product.cardVariants[0];
            return v.zoom || 1;
        }

        // Smooth image swap helper (fade out, swap, fade in)
        function swapImageSmooth(img, newSrc) {
            if (!img || img.getAttribute('src') === newSrc) return;
            img.style.opacity = '0.15';
            setTimeout(() => {
                img.src = newSrc;
                syncSrcset(img, newSrc);
                img.onload = () => { img.style.opacity = '1'; };
            }, 180);
        }

        // Card swatch click: swap the card photo + highlight active swatch
        function pickCardVariant(productId, name) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.cardVariants) return;
            const variant = product.cardVariants.find(v => v.name === name);
            if (!variant) return;
            cardColor[productId] = name;
            syncCardVariantVisual(productId, name);
        }

        // Shared: update a product card's swatch highlight + photo to a given variant
        function syncCardVariantVisual(productId, name) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.cardVariants) return;
            const variant = product.cardVariants.find(v => v.name === name);
            if (!variant) return;

            const cardEl = [...document.querySelectorAll('button')]
                .find(b => (b.getAttribute('onclick') || '').includes(`openProductModal('${productId}')`))
                ?.closest('.group');
            if (!cardEl) return;

            cardEl.querySelectorAll('.variant-btn').forEach(btn => {
                const active = btn.dataset.variant === name;
                btn.classList.toggle('border-gold', active);
                btn.classList.toggle('ring-2', active);
                btn.classList.toggle('ring-gold/40', active);
                btn.classList.toggle('border-luxuryBorder', !active);
            });
            const img = cardEl.querySelector('.relative.h-64 img');
            if (img && product.images) {
                // slider card: refresh the current angle with the variant's own angle set
                cardAngleSet(productId, cardAngle[productId] || cardDefaults[productId] || 'top');
            } else if (img) {
                img.style.transform = 'scale(' + variantZoom(product, name) + ')';
                swapImageSmooth(img, variant.image);
            }
        }

        // Navigation Handler
        let currentPage = 'home';   // tracks the open storefront view for live refreshes

        function navigateTo(page, filter = null) {
            currentPage = page;
            const main = document.getElementById('mainContent');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update active header styling (underline bar is always present — only its
            // color changes, so neighbours never reflow when the active link changes)
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.page === page) {
                    btn.classList.add('text-gold', 'font-semibold', 'border-gold');
                    btn.classList.remove('text-ivory', 'border-transparent');
                } else {
                    btn.classList.remove('text-gold', 'font-semibold', 'border-gold');
                    btn.classList.add('text-ivory', 'border-transparent');
                }
            });

            if (page === 'home') {
                renderHome(main);
            } else if (page === 'slippers') {
                renderCatalog(main, 'slippers', 'MEN\'S FOOTWEAR', 'Ergonomic comfort meets hand-stitched leather finesse.');
            } else if (page === 'shoes') {
                renderCatalog(main, 'shoes', 'Men\'s Shoes', 'Discover our premium collection of handcrafted shoes and loafers.');
            } else if (page === 'new') {
                renderCatalog(main, 'all', 'New Arrivals 2026 Collection', 'Explore our latest festive additions crafted specifically for Kayalpattinam.');
            } else if (page === 'all') {
                renderCatalog(main, 'all', 'All Styles', 'Browse every slipper and shoe in the BASIC FOOTGEAR collection.');
            } else if (page === 'story') {
                renderStory(main);
            } else if (page === 'contact') {
                renderContact(main);
            }
        }

        // ---------- Hero Carousel Controller (auto-fade every 5s, infinite loop, dots) ----------
        let heroIndex = 0;
        let heroTimer = null;

        function heroPaint(container, index) {
            const slides = container.querySelectorAll('.hero-slide');
            heroIndex = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => {
                slide.style.opacity = i === heroIndex ? '1' : '0';
                slide.classList.toggle('active', i === heroIndex);
            });
        }

        function heroGoTo(index, manual = false) {
            const carousel = document.getElementById('heroCarousel');
            if (!carousel) return;
            heroPaint(carousel, index);
            if (manual) heroStartAutoplay(); // restart the 3s clock after manual control use
        }

        // Pause on hover / touch so users can study a slide
        function heroPauseCarousel() {
            if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
        }

        function heroStartAutoplay() {
            if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
            heroTimer = setInterval(() => {
                const carousel = document.getElementById('heroCarousel');
                if (!carousel) { clearInterval(heroTimer); heroTimer = null; return; } // home page left — stop cleanly
                heroPaint(carousel, heroIndex + 1);
            }, 3000);
        }

        // Render Home Page
        function renderHome(container) {
            container.innerHTML = `
                <!-- Hero Slider: compact auto-looping fade carousel on Royal Burgundy -->
                <section class="py-4 sm:py-6 bg-burgundy">
                    <div class="mx-auto w-[95%] max-w-[1300px]">
                        <div id="heroCarousel" class="relative overflow-hidden select-none"
                             style="border-radius: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                                    background-color: #32151F;">
                            <!-- Slides (high-res posters, compact cover-cropped frame) -->
                            <!-- Slides 1-5 (high-res 2060x761 posters, cover-cropped frame) -->
                            <img src="./assestes/slide1.webp" fetchpriority="high" width="2060" height="763"
                                 srcset="./assestes/slide1_480.webp 480w, ./assestes/slide1_800.webp 800w, ./assestes/slide1.webp 2060w"
                                 sizes="(min-width: 1370px) 1234px, 95vw"
                                 alt="Street Wear — We Don't Follow Trends, We Set the Standards. Lifestyle, Comfort, Culture."
                                 class="hero-slide absolute inset-0 w-full h-full object-cover object-center"
                                 style="opacity: 1; object-position: center;">
                            <img src="./assestes/slide2.webp" fetchpriority="low" decoding="async" width="2065" height="761"
                                 srcset="./assestes/slide2_480.webp 480w, ./assestes/slide2_800.webp 800w, ./assestes/slide2.webp 2065w"
                                 sizes="(min-width: 1370px) 1234px, 95vw"
                                 alt="Classic Comfort. Modern Confidence. — Unstoppable Time to Style."
                                 class="hero-slide absolute inset-0 w-full h-full object-cover object-center"
                                 style="opacity: 0; object-position: center;">
                            <img src="./assestes/slide3.webp" fetchpriority="low" decoding="async" width="2066" height="761"
                                 srcset="./assestes/slide3_480.webp 480w, ./assestes/slide3_800.webp 800w, ./assestes/slide3.webp 2066w"
                                 sizes="(min-width: 1370px) 1234px, 95vw"
                                 alt="Relaxed Fit, Refined Look — handcrafted leather slide sandals."
                                 class="hero-slide absolute inset-0 w-full h-full object-cover object-center"
                                 style="opacity: 0; object-position: center;">
                            <img src="./assestes/slide4.webp" fetchpriority="low" decoding="async" width="2070" height="760"
                                 srcset="./assestes/slide4_480.webp 480w, ./assestes/slide4_800.webp 800w, ./assestes/slide4.webp 2070w"
                                 sizes="(min-width: 1370px) 1234px, 95vw"
                                 alt="Walk Your Journey — light and strong BASIC FOOTGEAR lifestyle footwear."
                                 class="hero-slide absolute inset-0 w-full h-full object-cover object-center"
                                 style="opacity: 0; object-position: center;">
                            <img src="./assestes/slide5.webp" fetchpriority="low" decoding="async" width="2067" height="761"
                                 srcset="./assestes/slide5_480.webp 480w, ./assestes/slide5_800.webp 800w, ./assestes/slide5.webp 2067w"
                                 sizes="(min-width: 1370px) 1234px, 95vw"
                                 alt="The Sandals You'll Reach for All Summer — Easy Style for Everyday Plans."
                                 class="hero-slide absolute inset-0 w-full h-full object-cover object-center"
                                 style="opacity: 0; object-position: center;">
                        </div>
                </section>

                <!-- Value Highlights -->
                <section class="py-12 bg-obsidian border-b border-luxuryBorder">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-charcoal p-6 rounded-xl border border-luxuryBorder flex items-start space-x-4">
                            <div class="p-3 bg-burgundy text-gold rounded-lg text-xl"><i class="fa-solid fa-gem"></i></div>
                            <div>
                                <h3 class="font-serif font-bold text-ivory text-base mb-1">100% Genuine Leather</h3>
                                <p class="text-xs text-mutedText">Sourced from certified tanneries for supreme durability and soft feel.</p>
                            </div>
                        </div>
                        <div class="bg-charcoal p-6 rounded-xl border border-luxuryBorder flex items-start space-x-4">
                            <div class="p-3 bg-burgundy text-gold rounded-lg text-xl"><i class="fa-solid fa-shoe-prints"></i></div>
                            <div>
                                <h3 class="font-serif font-bold text-ivory text-base mb-1">Ergonomic Cushioning</h3>
                                <p class="text-xs text-mutedText">Special orthotic padding designed for all-day comfort during gatherings.</p>
                            </div>
                        </div>
                        <div class="bg-charcoal p-6 rounded-xl border border-luxuryBorder flex items-start space-x-4">
                            <div class="p-3 bg-burgundy text-gold rounded-lg text-xl"><i class="fa-solid fa-store"></i></div>
                            <div>
                                <h3 class="font-serif font-bold text-ivory text-base mb-1">Kayalpattinam Boutique</h3>
                                <p class="text-xs text-mutedText">Visit our store on Custom Street for personalized fitting & sizing advice.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Featured Products Grid -->
                <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-end mb-10">
                        <div>
                            <p class="text-xs text-gold font-serif uppercase tracking-widest mb-1">Curated Selection</p>
                            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-ivory">MEN'S FOOTWEAR</h2>
                        </div>
                        <button onclick="navigateTo('slippers')" class="text-xs text-gold hover:underline uppercase tracking-wider font-semibold">View All <i class="fa-solid fa-arrow-right ml-1"></i></button>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-deferred-grid="slippers"><!-- FEATURED GRID: filled post-paint (TBT) --></div>
                </section>

                <!-- Premium Banner: full-width burgundy band (identical to footer bg) -->
                <section class="py-16" style="background:#32151F;">
                    <div class="max-w-5xl mx-auto px-4 text-center">
                        <i class="fa-solid fa-crown text-gold text-3xl mb-4"></i>
                        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-gold tracking-widest uppercase mb-4">MODERN &amp; STYLISH DAILY FOOTWEAR</h2>
                        <p class="text-mutedText text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Step up your style game in the city! Discover our collection of contemporary leather slippers and sleek sneakers for every day. Shop directly online or contact our personal shopper service for expert styling advice.
                        </p>
                        <button onclick="navigateTo('contact')" class="gold-btn px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest">
                            SHOP NOW OR CONTACT PERSONAL SHOPPER
                        </button>
                    </div>
                </section>
            `;

            // Initialize the hero slider autoplay + pause-on-hover once the home markup is in the DOM
            const heroCarousel = document.getElementById('heroCarousel');
            if (heroCarousel) {
                heroPaint(heroCarousel, 0);
                heroStartAutoplay();
                // Pause while the user is studying a slide; resume when they leave
                heroCarousel.addEventListener('mouseenter', heroPauseCarousel);
                heroCarousel.addEventListener('mouseleave', heroStartAutoplay);
                // Touch devices: pause on tap-hold start, resume shortly after release
                heroCarousel.addEventListener('touchstart', heroPauseCarousel, { passive: true });
                heroCarousel.addEventListener('touchend', () => setTimeout(heroStartAutoplay, 2000), { passive: true });
            }

            // PERF (TBT): the featured product cards sit below the fold on mobile.
            // Their six-card build (templates + angle/stock state) is moved off the
            // boot's critical path: the hero + shell paint first, cards fill on the
            // idle queue. Catalog pages (`renderCatalog`) still build synchronously —
            // their grid IS the requested view.
            const gridSlot = container.querySelector('[data-deferred-grid]');
            if (gridSlot) {
                const fillGrid = () => {
                    // guard: user may have navigated away before the idle tick fired
                    if (!gridSlot.isConnected) return;
                    gridSlot.innerHTML = PRODUCTS
                        .filter(p => p.category === 'slippers')
                        .map((product, i) => renderProductCard(product, i)).join('');
                };
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(fillGrid, { timeout: 1200 });
                } else {
                    setTimeout(fillGrid, 60);
                }
            }
        }

        // Render Catalog View (Slippers or Shoes)
        function renderCatalog(container, categoryFilter, title, subtitle) {
            const filteredProducts = categoryFilter === 'all' 
                ? PRODUCTS 
                : PRODUCTS.filter(p => p.category === categoryFilter);

            container.innerHTML = `
                <div class="bg-burgundy py-12 border-b border-luxuryBorder">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-2">${title}</h1>
                        <p class="text-xs sm:text-sm text-mutedText">${subtitle}</p>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="flex justify-between items-center mb-8 pb-4 border-b border-luxuryBorder">
                        <p class="text-xs text-mutedText">Showing <span class="text-gold font-bold">${filteredProducts.length}</span> ${categoryFilter === 'slippers' ? 'slipper styles' : categoryFilter === 'shoes' ? 'shoe styles' : 'styles'}</p>
                        <div class="flex space-x-2">
                            <button onclick="navigateTo('all')" class="text-xs px-3 py-1.5 rounded bg-charcoal border border-luxuryBorder hover:border-gold text-ivory">All Styles</button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${filteredProducts.map((product, i) => renderProductCard(product, i)).join('')}
                    </div>
                </div>
            `;

            // Restore any card-level variant selections made before this re-render
            // (e.g., user picked a color, navigated away, and came back)
            Object.entries(cardColor).forEach(([pid, name]) => {
                const product = PRODUCTS.find(p => p.id === pid);
                if (product && product.cardVariants) {
                    syncCardVariantVisual(pid, name);
                }
            });

            // Restore card-level angle slider selections the same way
            Object.entries(cardAngle).forEach(([pid, angle]) => {
                const product = PRODUCTS.find(p => p.id === pid &&
                    (p.category === 'slippers' || p.category === 'shoes') && p.images);
                if (product && document.querySelector(`img[data-card-angle-img="${pid}"]`)) {
                    cardAngleSet(pid, angle);
                }
            });
        }

        // Render About Us
        function renderStory(container) {
            const values = [
                { icon: 'fa-star', title: 'Premium Quality', desc: 'Only the finest selected to be the finest.' },
                { icon: 'fa-shoe-prints', title: 'Modern Design', desc: 'Trendy style for every occasion.' },
                { icon: 'fa-walking', title: 'All-Day Comfort', desc: 'Designed for your active lifestyle.' },
                { icon: 'fa-gem', title: 'Affordable Luxury', desc: 'Premium looks at honest prices.' },
                { icon: 'fa-user', title: 'Customer-First', desc: 'Your satisfaction is our priority.' },
                { icon: 'fa-leaf', title: 'Sustainable Choice', desc: 'Better for you, friendlier to the planet.' }
            ];
            container.innerHTML = `
                <!-- ===== Hero banner ===== -->
                <section class="relative overflow-hidden about-hero-min" style="background-color:#05090A">
                    <img src="./assestes/aboutusbackground.webp" loading="lazy" decoding="async" alt="BASIC FOOTGEAR red Puma-style suede sneakers with white stripes and gold branding on an urban rooftop at sunset against a city skyline"
                         class="absolute inset-0 w-full h-full object-cover" style="object-position:83% 40%;">
                    <div class="absolute inset-0 about-hero-mask" style="background:linear-gradient(90deg, #05090A 0%, rgba(5,9,10,0.99) 40%, rgba(5,9,10,0.96) 46%, rgba(5,9,10,0.55) 62%, rgba(5,9,10,0.05) 100%);"></div>
                    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 h-full flex flex-col justify-center about-hero-text">
                        <nav class="text-xs text-[#B9B2AD] mb-8 lg:mb-10" aria-label="Breadcrumb">
                            <button onclick="navigateTo('home')" class="hover:text-gold transition">Home</button>
                            <span class="mx-2 text-[#D5B09A]">›</span>
                            <span class="text-[#F5F1ED]">About Us</span>
                        </nav>
                        <p class="about-label mb-3">Our Story</p>
                        <h1 class="font-serif font-bold leading-[1.06] text-4xl sm:text-5xl lg:text-[3.4rem]">
                            <span class="text-[#F5F1ED] block">ABOUT</span>
                            <span class="block" style="color:#D5B09A">BASIC FOOTGEAR</span>
                        </h1>
                        <div class="flex items-center gap-3 mt-7">
                            <span class="w-10 h-px flex-shrink-0" style="background:rgba(213,176,154,0.7)"></span>
                            <p class="text-sm" style="color:#D5B09A">More than just footwear — we're a lifestyle.</p>
                        </div>
                        <p class="mt-6 text-sm leading-relaxed text-[#B9B2AD] max-w-md">
                            At BASIC FOOTGEAR, we believe that great footwear does more than just complete your outfit — it moves with you, supports your journey, and tells your story.
                        </p>
                    </div>
                    <div class="hidden md:flex items-end gap-3 absolute bottom-8 right-6 lg:right-8" aria-hidden="true">
                        <div class="about-polaroid" style="transform:rotate(-4deg)">
                            <img src="./assestes/menshoe3.webp" loading="lazy" decoding="async" alt="BASIC FOOTGEAR red sneaker — side view" class="w-24 lg:w-28 aspect-square object-cover">
                        </div>
                        <div class="about-polaroid" style="transform:rotate(3deg)">
                            <img src="./assestes/shoetopview3.webp" loading="lazy" decoding="async" alt="BASIC FOOTGEAR red sneaker — top view" class="w-24 lg:w-28 aspect-square object-cover">
                        </div>
                    </div>
                </section>

                <!-- ===== Our Journey (deep black strip, textured backdrop, glass panel) ===== -->
                <section class="w-full relative overflow-hidden" style="background-color:#0A0A0A">
                    <!-- Subtle footwear texture backdrop + edge falloff -->
                    <img src="./assestes/about_hero.webp" aria-hidden="true" alt="" loading="lazy" decoding="async"
                         class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                         style="object-position:50% 35%; opacity:0.13;">
                    <div class="absolute inset-0 pointer-events-none"
                         style="background:linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 45%, rgba(10,10,10,0.9) 100%);"></div>

                    <!-- Glassmorphism content panel: gold hairline + soft glow -->
                    <div class="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
                        <div class="relative rounded-2xl overflow-hidden border border-gold/20 backdrop-blur-md"
                             style="background:rgba(255,255,255,0.03); box-shadow:0 0 90px rgba(214,181,116,0.10), inset 0 0 40px rgba(214,181,116,0.04), 0 20px 40px rgba(0,0,0,0.6);">
                            <div class="absolute -top-28 -right-28 w-80 h-80 rounded-full pointer-events-none"
                                 style="background:radial-gradient(circle, rgba(214,181,116,0.16), transparent 70%);"></div>
                            <div class="absolute -bottom-32 -left-24 w-72 h-72 rounded-full pointer-events-none"
                                 style="background:radial-gradient(circle, rgba(214,181,116,0.10), transparent 70%);"></div>

                            <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center p-6 sm:p-10 lg:p-14">
                                <!-- Photo: left design region of the asset, proportional crop, no distortion -->
                                <div class="journey-photo-crop relative w-full overflow-hidden rounded-xl border border-white/10"
                                     style="box-shadow:0 16px 36px rgba(0,0,0,0.55);">
                                    <img src="./assestes/aboutpagesecond.webp" loading="lazy" decoding="async" alt="BASIC FOOTGEAR black sport slides photographed beside a Puma Forever Faster box"
                                         class="absolute journey-photo-img" loading="lazy">
                                </div>
                                <!-- Content: real typography, razor-sharp at any scale -->
                                <div class="text-center lg:text-left">
                                    <p class="about-label" style="color:#D6B574; letter-spacing:0.25em;">Our Journey</p>
                                    <h2 class="font-serif font-bold uppercase leading-[1.08] text-[#F5F1ED] text-3xl sm:text-4xl lg:text-[2.9rem] mt-4">
                                        From a Simple Idea<br>to a Trusted Brand
                                    </h2>
                                    <div class="w-12 h-px mt-6 mb-6 mx-auto lg:mx-0" style="background:rgba(214,181,116,0.7)"></div>
                                    <p class="text-sm sm:text-base leading-relaxed text-[#CFC8C2] max-w-xl mx-auto lg:mx-0">
                                        BASIC FOOTGEAR started with a simple vision — to create high-quality, stylish and comfortable footwear for every man. What began as a small passion project has now grown into a brand trusted by thousands of customers who value comfort, craftsmanship and timeless style.
                                    </p>
                                    <div class="flex items-stretch justify-center lg:justify-start gap-10 sm:gap-14 mt-9">
                                        <div>
                                            <p class="font-serif font-bold text-4xl sm:text-5xl" style="color:#D6B574">100+</p>
                                            <p class="text-sm mt-2 text-[#F5F1ED]">Styles &amp; Counting</p>
                                        </div>
                                        <div class="w-px" style="background:rgba(214,181,116,0.35)"></div>
                                        <div>
                                            <p class="font-serif font-bold text-4xl sm:text-5xl" style="color:#D6B574">1</p>
                                            <p class="text-sm mt-2 text-[#F5F1ED]">Mission</p>
                                            <p class="text-sm text-[#CFC8C2]">Comfort For All</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ===== Our Values ===== -->
                <section class="about-values-bg border-b border-luxuryBorder/40">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] gap-12 lg:gap-16">
                        <div>
                            <p class="about-label mb-4">Our Values</p>
                            <h2 class="font-serif font-bold text-[#F5F1ED] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]">Built on Quality,<br>Driven by You</h2>
                            <div class="w-12 h-px my-7" style="background:rgba(213,176,154,0.5)"></div>
                            <p class="text-sm leading-relaxed text-[#B9B2AD] max-w-sm">
                                We focus on what truly matters — premium materials, thoughtful design and long-lasting comfort. Our every pair is crafted to support your everyday adventures, from the office to the weekend getaway.
                            </p>
                            <button onclick="navigateTo('slippers')" class="about-outline-btn mt-9 inline-flex items-center gap-3 px-7 py-3.5 text-[11px] font-semibold uppercase" style="letter-spacing:0.25em">
                                Explore Our Collection <i class="fa-solid fa-arrow-right text-xs" style="color:#D5B09A"></i>
                            </button>
                        </div>
                        <div class="about-values-grid grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-y-12">
                            ${values.map(v => `
                                <div class="flex flex-col">
                                    <span class="w-14 h-14 rounded-full border flex items-center justify-center mb-5 flex-shrink-0" style="border-color:rgba(213,176,154,0.45)">
                                        <i class="fa-solid ${v.icon} text-sm" style="color:#D5B09A"></i>
                                    </span>
                                    <h3 class="text-[13px] font-semibold uppercase mb-2" style="color:#D5B09A; letter-spacing:0.2em">${v.title}</h3>
                                    <p class="text-xs leading-relaxed text-[#B9B2AD]">${v.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- ===== Our Vision banner ===== -->
                <section class="relative overflow-hidden" style="background-color:#05090A">
                    <img src="./assestes/about_vision.webp" loading="lazy" decoding="async" alt="BASIC FOOTGEAR man overlooking a mountain valley at sunset"
                         class="absolute inset-0 w-full h-full object-cover" style="object-position:62% 42%;">
                    <div class="absolute inset-0" style="background:linear-gradient(90deg, #05090A 2%, rgba(5,9,10,0.92) 32%, rgba(5,9,10,0.45) 58%, rgba(5,9,10,0.05) 88%);"></div>
                    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <p class="about-label mb-4">Our Vision</p>
                        <h2 class="font-serif font-bold text-[#F5F1ED] leading-tight text-3xl sm:text-4xl lg:text-[2.75rem]">Step into a<br>Better Tomorrow</h2>
                        <div class="w-12 h-px my-7" style="background:rgba(213,176,154,0.5)"></div>
                        <p class="text-sm leading-relaxed text-[#B9B2AD] max-w-md">
                            We're not just building a footwear brand — we're building a community of men who value quality, style and purpose. With every step, we strive to make a positive impact on your life and on the world around us.
                        </p>
                    </div>
                    <div class="hidden sm:block absolute top-1/2 -translate-y-1/2 right-8 lg:right-24 text-center about-script text-3xl lg:text-4xl leading-[1.4] select-none" aria-hidden="true">
                        Better<br>Footwear<br>Brighter<br>Journeys
                    </div>
                </section>
            `;
        }

        // Render Contact & Store Info
        // Option-name escaping for the contact subject dropdown (model names are data-driven)
        function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
        function escAttr(s) { return escHtml(s).replace(/"/g, '&quot;'); }

        function renderContact(container) {
            container.innerHTML = `
                <!-- ===== Store & Contact ===== -->
                <section class="relative w-full overflow-hidden" style="background-color:#32151F">
                    <!-- Luxury backdrop photo fading in from the left edge -->
                    <img src="./assestes/aboutusbackground.webp" aria-hidden="true" alt="" loading="lazy" decoding="async"
                         class="hidden md:block absolute top-0 left-0 h-full w-[40%] object-cover pointer-events-none select-none"
                         style="object-position:92% 42%; opacity:0.5;
                                -webkit-mask-image:linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
                                mask-image:linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);">
                    <div class="absolute inset-0 pointer-events-none"
                         style="background:linear-gradient(90deg, rgba(50,21,31,0.5) 0%, rgba(50,21,31,0.9) 42%, rgba(24,11,15,0.97) 100%);"></div>
                    <span class="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.45em] text-gold/50 select-none pointer-events-none"
                          style="writing-mode:vertical-rl;">Premium Footgear</span>

                    <div class="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-10 lg:gap-14 items-center">

                        <!-- Left: boutique info -->
                        <div>
                            <div class="flex items-center gap-3 mb-5">
                                <span class="w-10 h-px bg-gold/70"></span>
                                <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Store &amp; Contact</p>
                            </div>
                            <h2 class="font-serif font-bold leading-[1.1] text-3xl sm:text-4xl lg:text-[2.9rem] text-ivory">
                                Visit Our<br><span class="text-gold">Kayalpattinam Boutique</span>
                            </h2>
                            <p class="mt-5 text-sm sm:text-[15px] text-mutedText leading-relaxed max-w-md">
                                Experience the leather quality and get custom size assistance in person. Our team is always happy to help you.
                            </p>

                            <!-- Contact details card (dark glass) -->
                            <div id="boutiqueLocation" class="mt-8 rounded-2xl border border-white/10 bg-obsidian/60 backdrop-blur-md p-6 sm:p-7 shadow-2xl scroll-mt-24">
                                <div class="space-y-6">
                                    <div class="flex items-start gap-4">
                                        <span class="flex-shrink-0 w-11 h-11 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold"><i class="fa-solid fa-phone text-sm"></i></span>
                                        <div>
                                            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">Phone</p>
                                            <a href="tel:+919384798122" class="text-sm text-ivory hover:text-gold transition">+91 93847 98122</a>
                                            <p class="text-xs text-mutedText mt-0.5">Mon — Sun, 10:00 AM – 9:30 PM</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <span class="flex-shrink-0 w-11 h-11 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold"><i class="fa-solid fa-envelope text-sm"></i></span>
                                        <div>
                                            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">Email</p>
                                            <a href="mailto:support@basicfootgear.com" class="text-sm text-ivory hover:text-gold transition">support@basicfootgear.com</a>
                                            <p class="text-xs text-mutedText mt-0.5">We reply within 24 hours</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <span class="flex-shrink-0 w-11 h-11 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold"><i class="fa-solid fa-location-dot text-sm"></i></span>
                                        <div>
                                            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">Store Address</p>
                                            <p class="text-sm text-ivory leading-relaxed">Custom Street / Main Bazaar Junction,<br>Kayalpattinam – 628204,<br>Thoothukudi District, Tamil Nadu.</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://wa.me/919384798122?text=Hello%20Basic%20Footgear,%20I%20am%20interested%20in%20visiting%20your%20Kayalpattinam%20store." target="_blank" rel="noopener"
                                   class="group mt-8 inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-gold/40 bg-obsidian/40 hover:bg-gold transition-all duration-300">
                                    <span class="w-8 h-8 rounded-full bg-white/10 group-hover:bg-obsidian/15 flex items-center justify-center transition"><i class="fa-brands fa-whatsapp text-[#25D366] text-lg"></i></span>
                                    <span class="text-xs font-bold uppercase tracking-[0.18em] text-gold group-hover:text-obsidian transition">Chat on WhatsApp</span>
                                    <i class="fa-solid fa-arrow-right-long text-gold group-hover:text-obsidian group-hover:translate-x-1 transition-all duration-300"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Right: Get in Touch (glass form card) -->
                        <div id="contactFormCard" class="relative rounded-2xl border border-gold/30 bg-obsidian/70 backdrop-blur-md shadow-2xl overflow-hidden scroll-mt-24"
                             style="box-shadow:0 0 80px rgba(214,181,116,0.08), 0 20px 40px rgba(0,0,0,0.6);">
                            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                                 style="background:radial-gradient(circle, rgba(214,181,116,0.14), transparent 70%);"></div>
                            <div class="relative p-6 sm:p-9 lg:p-10">
                                <div class="flex items-center gap-3 mb-4">
                                    <span class="w-8 h-px bg-gold/70"></span>
                                    <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Send Us a Message</p>
                                </div>
                                <h3 class="font-serif font-bold text-3xl text-ivory">Get in Touch.</h3>
                                <p class="mt-2 text-sm text-mutedText">Have a question about our products, sizing, orders or visiting our store? We'd be happy to help.</p>

                                <form id="contactForm" onsubmit="sendContactMessage(event)" class="mt-7 space-y-5" novalidate>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label for="cfName" class="block text-xs font-semibold text-ivory mb-2">Your Name <span class="text-gold">*</span></label>
                                            <div class="relative">
                                                <i class="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-mutedText text-sm pointer-events-none"></i>
                                                <input id="cfName" name="name" type="text" required placeholder="Enter your name"
                                                       class="w-full bg-black/50 border border-gold/25 rounded-lg pl-11 pr-4 py-3.5 text-sm text-ivory placeholder:text-mutedText/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition">
                                            </div>
                                        </div>
                                        <div>
                                            <label for="cfEmail" class="block text-xs font-semibold text-ivory mb-2">Email Address <span class="text-gold">*</span></label>
                                            <div class="relative">
                                                <i class="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-mutedText text-sm pointer-events-none"></i>
                                                <input id="cfEmail" name="email" type="email" required placeholder="Enter your email"
                                                       class="w-full bg-black/50 border border-gold/25 rounded-lg pl-11 pr-4 py-3.5 text-sm text-ivory placeholder:text-mutedText/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="cfMobile" class="block text-xs font-semibold text-ivory mb-2">Mobile Number (WhatsApp) <span class="text-gold">*</span></label>
                                        <div class="relative">
                                            <i class="fa-solid fa-mobile-screen absolute left-4 top-1/2 -translate-y-1/2 text-mutedText text-sm pointer-events-none"></i>
                                            <input id="cfMobile" name="mobile" type="tel" required minlength="10" maxlength="15" pattern="[0-9+ ]{10,15}" placeholder="e.g. 93847 98122" inputmode="tel"
                                                   class="w-full bg-black/50 border border-gold/25 rounded-lg pl-11 pr-4 py-3.5 text-sm text-ivory placeholder:text-mutedText/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition">
                                        </div>
                                    </div>
                                    <div>
                                        <label for="cfMessage" class="block text-xs font-semibold text-ivory mb-2">Message / Special Request</label>
                                        <div class="relative">
                                            <i class="fa-regular fa-comment-dots absolute left-4 top-4 text-mutedText text-sm pointer-events-none"></i>
                                            <textarea id="cfMessage" name="message" rows="4" required placeholder="Type your message here..."
                                                      class="w-full bg-black/50 border border-gold/25 rounded-lg pl-11 pr-4 pt-3.5 pb-3.5 text-sm text-ivory placeholder:text-mutedText/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition resize-y"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            class="w-full inline-flex items-center justify-center gap-3 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-[#2A1408] transition hover:brightness-110 active:scale-[0.99]"
                                            style="background:linear-gradient(90deg, #E9CD8C 0%, #D6B574 55%, #C9A45F 100%); box-shadow:0 10px 30px rgba(214,181,116,0.25);">
                                        <i class="fa-solid fa-paper-plane text-sm"></i> Send Message
                                        <i class="fa-solid fa-arrow-right-long text-sm"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ===== COD Workflow — how WhatsApp ordering works ===== -->
                <section id="codWorkflow" class="bg-obsidian py-16 border-y border-luxuryBorder scroll-mt-20">
                    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-10">
                            <div class="flex items-center justify-center gap-3 mb-4">
                                <span class="w-8 h-px bg-gold/70"></span>
                                <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">How Ordering Works</p>
                                <span class="w-8 h-px bg-gold/70"></span>
                            </div>
                            <h2 class="font-serif font-bold text-3xl sm:text-4xl text-ivory">Cash on Delivery, <span class="text-gold">the Kayalpattinam Way</span></h2>
                            <p class="mt-3 text-sm text-mutedText max-w-2xl mx-auto leading-relaxed">No advance payment, no checkout forms. Pick your styles, confirm on WhatsApp, and pay cash when your footwear arrives at your door.</p>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div class="rounded-xl border border-luxuryBorder bg-charcoal p-6 text-center hover:border-gold transition-all duration-300">
                                <span class="font-serif text-3xl font-bold text-gold/40">1</span>
                                <h3 class="font-serif font-bold text-ivory text-sm mt-2 mb-2">Pick Your Styles</h3>
                                <p class="text-xs text-mutedText leading-relaxed">Browse the collection, open any model, and add your size &amp; colour to the cart.</p>
                            </div>
                            <div class="rounded-xl border border-luxuryBorder bg-charcoal p-6 text-center hover:border-gold transition-all duration-300">
                                <span class="font-serif text-3xl font-bold text-gold/40">2</span>
                                <h3 class="font-serif font-bold text-ivory text-sm mt-2 mb-2">Confirm on WhatsApp</h3>
                                <p class="text-xs text-mutedText leading-relaxed">Enter your name, WhatsApp number and address — the order reaches us instantly on WhatsApp.</p>
                            </div>
                            <div class="rounded-xl border border-luxuryBorder bg-charcoal p-6 text-center hover:border-gold transition-all duration-300">
                                <span class="font-serif text-3xl font-bold text-gold/40">3</span>
                                <h3 class="font-serif font-bold text-ivory text-sm mt-2 mb-2">Owner Confirmation</h3>
                                <p class="text-xs text-mutedText leading-relaxed">We manually confirm availability, size and delivery time with you on WhatsApp.</p>
                            </div>
                            <div class="rounded-xl border border-luxuryBorder bg-charcoal p-6 text-center hover:border-gold transition-all duration-300">
                                <span class="font-serif text-3xl font-bold text-gold/40">4</span>
                                <h3 class="font-serif font-bold text-ivory text-sm mt-2 mb-2">Pay Cash on Delivery</h3>
                                <p class="text-xs text-mutedText leading-relaxed">Free local delivery across Kayalpattinam. Pay cash only when your pair arrives.</p>
                            </div>
                        </div>
                        <div class="mt-10 text-center">
                            <button onclick="openWhatsAppOrdering()" class="gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center">
                                <i class="fa-brands fa-whatsapp text-lg mr-2"></i> Start Your WhatsApp Order
                            </button>
                        </div>
                    </div>
                </section>
            `;
        }

        // Contact form -> sends a straightforward general inquiry to WhatsApp (site-wide order channel) + toast feedback
        function sendContactMessage(e) {
            e.preventDefault();
            const form = e.target;
            if (!form.checkValidity()) { form.reportValidity(); return; }
            const name = document.getElementById('cfName').value.trim();
            const email = document.getElementById('cfEmail').value.trim();
            const mobile = document.getElementById('cfMobile').value.trim();
            const message = document.getElementById('cfMessage').value.trim();
            const lines = [
                'Hello BASIC FOOTGEAR!',
                `Name: ${name}`,
                `Mobile: ${mobile}`,
                `Email: ${email}`,
                `Message: ${message}`
            ];
            window.open('https://wa.me/919384798122?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
            showToast('Inquiry ready in WhatsApp — just press send!');
            form.reset();
        }

        // Product Card Template (renders with the product's primary angle by default)
        // ===== Live stock (single source of truth: 'bfStockLevels' in localStorage) =====
        // The Executive Admin Dashboard writes stock through to this key on every
        // "Update Stock" edit and then fires a 'bfStockChanged' event, which refreshes
        // every storefront badge in place — no reload, no card re-render.
        function storefrontStock(productId) {
            try {
                const map = JSON.parse(localStorage.getItem('bfStockLevels') || '{}');
                const s = map[productId];
                return (typeof s === 'number' && s >= 0) ? s : 10;   // matches admin DEFAULT_STOCK
            } catch (err) { return 10; }
        }

        function storefrontStockBadgeHtml(productId) {
            const stock = storefrontStock(productId);
            let cls, label;
            if (stock <= 0) { cls = 'text-red-400 border-red-500/40 bg-red-500/10'; label = 'Out of Stock'; }
            else if (stock <= 3) { cls = 'text-gold border-gold/40 bg-gold/10'; label = `Only ${stock} pair${stock === 1 ? '' : 's'} left`; }
            else { cls = 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'; label = `In Stock: ${stock} pairs`; }
            return `<span data-stock-badge="${productId}" class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${cls}">
                            <i class="fa-solid fa-circle text-[5px]"></i>${label}
                        </span>`;
        }

        function refreshStockBadges(productId) {
            if (!productId) {
                [...document.querySelectorAll('[data-stock-badge]')].forEach(el => refreshStockBadges(el.dataset.stockBadge));
                return;
            }
            document.querySelectorAll(`[data-stock-badge="${productId}"]`).forEach(el => {
                el.outerHTML = storefrontStockBadgeHtml(productId);
            });
        }

        document.addEventListener('bfStockChanged', e => refreshStockBadges(e.detail && e.detail.id));

        function renderProductCard(product, gridIndex) {
            const isAngleCard = (product.category === 'slippers' || product.category === 'shoes') && product.images;
            const angleImages = isAngleCard ? (resolveCardImages(product) || product.images) : null;
            // only dot for angles with a DISTINCT photo (never two dots, one photo)
            const angleEntries = isAngleCard ? dedupeCardAngles(product, angleImages) : null;
            const primaryDefault = isAngleCard ? cardDefaultAngle(product) : 'top';
            if (isAngleCard) cardDefaults[product.id] = primaryDefault;
            const currentAngle = isAngleCard ? (cardAngle[product.id] || primaryDefault) : 'top';
            const currentEntry = isAngleCard ? (angleEntries.find(e => e.angle === currentAngle) || angleEntries[0]) : null;
            return `
                <div class="bg-charcoal border border-luxuryBorder rounded-xl overflow-hidden hover:border-gold transition-all duration-300 group flex flex-col justify-between"
                    ${isAngleCard ? `onmouseenter="cardSliderStart('${product.id}')" onmouseleave="cardSliderStop('${product.id}', true)"` : ''}>
                    <div>
                        <div class="relative h-64 overflow-hidden bg-white" style="padding: 16px; isolation: isolate;">
                            ${isAngleCard ? `
                            <img data-card-angle-img="${product.id}" src="${currentEntry ? currentEntry.src : product.image}" srcset="${srcsetForSrc(currentEntry ? currentEntry.src : product.image)}" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 30vw" loading="lazy" decoding="async"
                                ${currentEntry && currentEntry.standin ? `style="transform: ${angleTransformFor(product, angleImages, currentEntry.angle)};"` : ''}
                                onerror="handleCardImgError(this, '${product.id}', '${currentAngle}')" alt="${product.name}" class="photo-blend w-full h-full object-contain transition-all duration-500">
                            <div class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-[9px] uppercase tracking-widest font-bold pointer-events-none transition-all duration-300"
                                data-angle-chip="${product.id}"
                                style="background: rgba(10, 10, 10, 0.72); color: #D4AF37; border: 1px solid rgba(212, 175, 55, 0.45); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);">
                                ${angleLabelFor(product, currentEntry ? currentEntry.angle : 'top')}
                            </div>
                            <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5" data-card-dots="${product.id}">
                                ${angleEntries.map(({ angle: a }) => {
                                    const active = currentAngle === a;
                                    return `<button type="button" onclick="cardAngleSet('${product.id}', '${a}')" data-angle="${a}" title="${angleLabelFor(product, a)}" aria-label="Show ${angleLabelFor(product, a)} of ${product.name}"
                                        class="card-dot h-2 ${active ? 'w-4 rounded-full bg-gold' : 'w-2 rounded-full bg-obsidian/20 hover:bg-obsidian/40'} transition-all duration-200"></button>`;
                                }).join('')}
                            </div>
                            ` : `
                            <img src="${product.image}" srcset="${srcsetForSrc(product.image)}" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 30vw" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'" loading="lazy" decoding="async" alt="${product.name}" class="w-full h-full object-contain ${(product.cardVariants || product.zoom) ? '' : 'group-hover:scale-105'} transition-all duration-500" ${(product.cardVariants || product.zoom) ? `style="transform: scale(${variantZoom(product, product.cardVariants ? product.cardVariants[0].name : '')});"` : ''}>
                            `}
                        </div>
                        <div class="p-5">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-[10px] uppercase text-gold tracking-widest font-semibold">${product.category === 'slippers' ? 'Slipper / Sandal' : 'Dress Shoe'}</span>
                            </div>
                            <h3 class="font-serif font-bold text-ivory text-base mb-2 group-hover:text-gold transition whitespace-nowrap overflow-hidden text-ellipsis">${product.name}</h3>
                            <p class="text-xs text-mutedText mb-4 whitespace-nowrap overflow-hidden text-ellipsis">${product.description}</p>
                            ${product.cardVariants ? `<div class="flex items-center gap-2" data-variants="${product.id}">
                                <span class="text-[10px] uppercase text-mutedText tracking-widest">Color:</span>
                                ${product.cardVariants.map(v => {
                                    const active = (cardColor[product.id] || product.cardVariants[0].name) === v.name;
                                    return `<button type="button" onclick="pickCardVariant('${product.id}', '${v.name}')" data-variant="${v.name}" title="${v.name}"
                                        class="variant-btn w-5 h-5 rounded-full border-2 transition duration-200 ${active ? 'border-gold ring-2 ring-gold/40' : 'border-luxuryBorder hover:border-gold'}"
                                        style="background-color:${v.hex}"></button>`;
                                }).join('')}
                            </div>` : ''}
                            <div class="mt-2.5">
                                ${storefrontStockBadgeHtml(product.id)}
                            </div>
                        </div>
                    </div>
                    <div class="p-5 pt-3 flex items-center justify-end border-t border-luxuryBorder/40 mt-2">
                        <div class="flex space-x-2">
                            <button onclick="openProductModal('${product.id}')" aria-label="View ${product.name} details" title="Quick view" class="p-2.5 bg-obsidian border border-luxuryBorder rounded-lg text-ivory hover:text-gold hover:border-gold transition">
                                <i class="fa-solid fa-eye text-xs"></i>
                            </button>
                            <button onclick="addToCart('${product.id}')" class="gold-btn px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // ===== Card-level multi-angle slider (slippers + shoes) =====
        // Hovering a footwear card auto-slides its available views on a steady 2s
        // interval with a clean 0.3s opacity fade — no zooms, no transform morphs,
        // no loops that feel frantic. Leaving the card stops and resets.
        // The dots remain as an optional manual switcher.
        const CARD_ANGLE_ORDER = ['top', 'left', 'back'];
        // Canonical angle names — audited against the real photo files so every
        // label describes EXACTLY what is displayed:
        //   slippers: top slot = the 3/4 side-profile catalog photo, left slot =
        //   a mirrored/alternate side view, back slot = the sole/bottom tread shot.
        //   shoes:    top slot = side-profile photo, left slot = true top-down
        //   shot (shoetopview*.png), back slot = true front shot (menshoefront*.png).
        const CARD_ANGLE_LABELS = {
            slippers: { top: 'Side Profile', left: 'Alternate Side', back: 'Sole / Bottom' },
            shoes:    { top: 'Side Profile', left: 'Top View', back: 'Front Angle' }
        };
        // Single source of truth for angle names (cards, chips, modal captions)
        function angleLabelFor(product, angle) {
            const L = product.angleLabels || CARD_ANGLE_LABELS[product.category] || CARD_ANGLE_LABELS.slippers;
            return L[angle] || angle;
        }
        // Angle sets can be per-variant (sh-3): the set follows the card's selected color
        function resolveCardImages(product) {
            if (product.cardVariants) {
                const v = product.cardVariants.find(x => x.name === (cardColor[product.id] || product.cardVariants[0].name));
                if (v && v.images) return v.images;
            }
            return product.images;
        }
        let cardAngle = {};        // productId -> currently shown angle
        const cardSliderTimers = {};   // productId -> hover auto-slide interval
        const cardSwapSeq = {};    // productId -> swap token (guards stale fades)
        const cardDefaults = {};   // productId -> primary (index-0) angle assigned at render

        // Angle source normalizer: entries are either plain path strings or
        // stand-in markers like { standin: 'mirror' } (render the primary photo
        // with a CSS flip — no network request, no 404s, no broken tiles)
        function angleSrcFor(product, imgs, key) {
            const v = imgs ? imgs[key] : null;
            if (typeof v === 'string') return v;
            if (v && typeof v === 'object' && v.standin) return product.image;
            return product.image;
        }

        function angleIsStandin(product, imgs, key) {
            const v = imgs ? imgs[key] : null;
            return !!(v && typeof v === 'object' && v.standin);
        }

        // ===== Stand-in render styles =====
        // Every missing-angle slot of an owner-added product still gets its own
        // chip (canonical names), so the fallback view must stay VISUALLY
        // distinct from its sibling fallbacks — a one-photo upload must never
        // show the identical photo three times across its three dots:
        //   mirror  → plain flip (the other side look, e.g. Side Profile fallback)
        //   detail  → flip + gentle zoom (close-up framing, e.g. Top View fallback)
        //   closeup → no flip, gentle zoom (detail crop, e.g. Front Angle fallback)
        const STANDIN_STYLES = {
            mirror:  'scaleX(-1)',
            detail:  'scaleX(-1) scale(1.16)',
            closeup: 'scale(1.16)'
        };

        // Transform resolver for a card/modal angle view. Stand-in views render
        // the primary photo with the style their slot stands in FOR (they exist
        // only where no real photo covers the view) — including the top slot, so
        // a front-only shoe's "Side Profile" stand-in looks like the other side,
        // visually distinct from the unflipped "Front Angle" view. Real files
        // keep their slot transform (none — they are true photos, never re-flipped).
        function angleTransformFor(product, imgs, angle) {
            const v = imgs ? imgs[angle] : null;
            if (v && typeof v === 'object' && v.standin) return STANDIN_STYLES[v.standin] || STANDIN_STYLES.mirror;
            return ANGLE_TRANSFORMS[angle] || 'none';
        }

        // Distinct-perspective guard: skip angle entries whose photo is identical to
        // one already offered on the card (owner-added items may have fewer than 3
        // distinct uploads, so toggling should never show the same photo twice).
        // Stand-in views count as distinct even though they reuse the primary photo,
        // because they render flipped (mirrored side profile).
        function dedupeCardAngles(product, imgs) {
            const seen = new Set();
            const out = [];
            CARD_ANGLE_ORDER.forEach(a => {
                // A slot that does not exist at all contributes NO dot of its own —
                // its fallback photo (the primary) is already covered by another view
                // (critical when the primary itself is a mirrored stand-in: without
                // this guard a phantom "Top View" dot would render the frontal photo)
                if (!imgs || !imgs[a]) return;
                const standin = angleIsStandin(product, imgs, a);
                const src = angleSrcFor(product, imgs, a);
                const key = standin ? 'standin:' + a : src;
                if (!seen.has(key)) { seen.add(key); out.push({ angle: a, src, standin }); }
            });
            return out;
        }

        function cardAnglesFor(product) {
            return dedupeCardAngles(product, resolveCardImages(product) || product.images).map(e => e.angle);
        }

        // Every card ALWAYS starts at its primary angle (index 0 of its available
        // views — the Front view / default item photo). No random or staggered
        // starting states: secondary angles reveal themselves only through hover
        // auto-slide, dot clicks, or the navigation controls.
        function cardDefaultAngle(product) {
            const angles = cardAnglesFor(product);
            return angles[0];
        }

        // Initial-render guard for angle cards: a missing angle file (some catalog
        // entries reference photos that don't exist yet) must NOT degrade to the
        // generic FALLBACK_IMAGE — that would plaster the same stock photo across
        // neighboring cards. Fall back to this product's real primary photo with the
        // same CSS stand-in flip the interactive slider uses (mirrored = side view).
        function handleCardImgError(imgEl, productId, angleKey) {
            imgEl.onerror = null;
            imgEl.onload = null;
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) { imgEl.src = FALLBACK_IMAGE; return; }
            imgEl.style.opacity = '1';
            imgEl.src = product.image;
            // mirrored stand-in on ANY slot (incl. the top slot of front-only
            // shoes) → flip; the legacy slipper missing-file fallback keeps its flip
            const imgs = resolveCardImages(product);
            if (angleIsStandin(product, imgs, angleKey)) {
                imgEl.style.transform = angleTransformFor(product, imgs, angleKey);
            } else if (angleKey && angleKey !== 'top' && product.category === 'slippers') {
                imgEl.style.transform = ANGLE_TRANSFORMS[angleKey] || 'none';
            } else {
                imgEl.style.transform = '';
            }
        }

        // Hover always begins from the card's primary view (index 0), then loops
        // through its available views every 2s. Touch-only devices can't hover,
        // so they keep the dot switcher.
        function cardSliderStart(productId) {
            if (!window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;
            const product = PRODUCTS.find(p => p.id === productId &&
                (p.category === 'slippers' || p.category === 'shoes') && p.images);
            if (!product) return;
            cardSliderStop(productId);                     // clear any stale interval
            const primary = cardDefaults[productId] || cardDefaultAngle(product);   // always the primary (index-0) view
            cardAngle[productId] = primary;
            cardAngleSet(productId, primary);              // fades off a stale view; clean-skips when primary is live
            cardSliderTimers[productId] = setInterval(() => {
                const angles = cardAnglesFor(product);
                const i = Math.max(angles.indexOf(cardAngle[productId]), 0);
                cardAngleSet(productId, angles[(i + 1) % angles.length]);
            }, 2000);
        }

        function cardSliderStop(productId, revertToTop) {
            if (cardSliderTimers[productId]) {
                clearInterval(cardSliderTimers[productId]);
                delete cardSliderTimers[productId];
            }
            if (revertToTop) cardAngleSet(productId, cardDefaults[productId] || 'top');
        }

        function cardAngleChange(productId, step) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.images) return;
            const angles = cardAnglesFor(product);
            const idx = Math.max(angles.indexOf(cardAngle[productId] || cardDefaults[productId] || 'top'), 0);
            const next = angles[(idx + step + angles.length) % angles.length];
            cardAngleSet(productId, next);
        }

        function cardAngleSet(productId, angle) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.images) return;
            const prev = cardAngle[productId];
            cardAngle[productId] = angle;
            // live angle-name chip (top-left of the tile) — updated on EVERY path
            // (clean skip, fade swap, hover slide) so the name always matches the photo
            const chip = document.querySelector(`[data-angle-chip="${productId}"]`);
            if (chip) chip.textContent = angleLabelFor(product, angle);
            const img = document.querySelector(`img[data-card-angle-img="${productId}"]`);
            if (!img) return;
            // keep the accessible alt in sync with the angle being displayed
            img.alt = `${product.name} — ${angleLabelFor(product, angle)}`;

            const imgs = resolveCardImages(product);
            const standin = angleIsStandin(product, imgs, angle);
            const wanted = angleSrcFor(product, imgs, angle);
            // skip the whole fade dance when this exact view is already live on the
            // card (prevents pointless blink on hover-start / leave when primary is up)
            const clean = prev === angle &&
                img.getAttribute('src') &&
                img.getAttribute('src').indexOf(wanted) !== -1;
            if (clean) {
                // still make sure the dots — and the stand-in flip — reflect reality
                if (standin) {
                    img.style.transform = angleTransformFor(product, imgs, angle);   // any category with a mirrored stand-in
                }
                syncCardAngleDots(productId, angle);
                return;
            }

            // one swap token per requested change — an interrupting change cancels
            // the pending fade of the previous one (no flicker on fast switches)
            const seq = (cardSwapSeq[productId] || 0) + 1;
            cardSwapSeq[productId] = seq;

            // clean single-property fade: ease the photo out over 0.3s, swap the
            // source, then fade the next angle straight back in
            img.style.transition = 'opacity 0.3s ease-in-out';
            img.style.opacity = '0';
            setTimeout(() => {
                if (cardSwapSeq[productId] !== seq) return;   // superseded — skip
                const target = angleSrcFor(product, resolveCardImages(product), angle);   // variant-aware (sh-3 color swatches)
                if (standin) {
                    // stand-in view: no dedicated file — flip the primary photo in
                    // place (any category, ANY slot — incl. a front-only shoe's
                    // top-slot "Side Profile" stand-in). Checked BEFORE the top
                    // branch so returning to the primary restores its mirror.
                    img.style.transform = angleTransformFor(product, imgs, angle);
                    img.onerror = null;
                    img.onload = () => { img.style.opacity = '1'; };
                    img.src = target;
                    syncSrcset(img, target);
                } else if (angle === 'top') {
                    img.onerror = null;
                    img.style.transform = '';                      // clean primary view, no stand-in flip left over
                } else {
                    img.onerror = () => {
                        img.onerror = null;
                        img.onload = () => { img.style.opacity = '1'; };
                        img.src = product.image;                                   // graceful revert to the primary photo
                        syncSrcset(img, product.image);
                        // instantly-applied stand-in for missing files
                        img.style.transform = angleTransformFor(product, imgs, angle);
                    };
                }
                if (!standin) {
                    img.onload = () => {
                        img.style.opacity = '1';
                        // the REAL angle file loaded → display it untransformed
                        // (clears a previous view's stand-in flip, e.g. Left → Sole)
                        if (img.getAttribute('src') === target) img.style.transform = '';
                    };
                    img.src = target;
                }
                // failsafe: never let the photo hang in a faded state (covers any
                // path where load/error events don't fire, e.g. same-src swaps)
                setTimeout(() => {
                    if (cardSwapSeq[productId] === seq && img.getAttribute('src')) img.style.opacity = '1';
                }, 380);
            }, 320);

            document.querySelectorAll(`[data-card-dots="${productId}"] .card-dot`).forEach(d => {
                const active = d.dataset.angle === angle;
                d.style.transition = 'opacity 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out';
                d.style.opacity = active ? '1' : '0.55';
                d.classList.toggle('w-4', active);
                d.classList.toggle('w-2', !active);
                d.classList.toggle('bg-gold', active);
                d.classList.toggle('bg-obsidian/20', !active);
            });
        }

        function syncCardAngleDots(productId, angle) {
            document.querySelectorAll(`[data-card-dots="${productId}"] .card-dot`).forEach(d => {
                const active = d.dataset.angle === angle;
                d.style.transition = 'opacity 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out';
                d.style.opacity = active ? '1' : '0.55';
                d.classList.toggle('w-4', active);
                d.classList.toggle('w-2', !active);
                d.classList.toggle('bg-gold', active);
                d.classList.toggle('bg-obsidian/20', !active);
            });
        }

        // Product Modal Logic
        function openProductModal(id) {
            const product = PRODUCTS.find(p => p.id === id);
            if (!product) return;

            // Reset size choice on every open; color keeps its pre-selected default
            // (ONLY the designated shoe sh-3 carries color variants — all other
            // models have no color selection at all)
            selectedSize = null;
            selectedColor = product.cardVariants
                ? (cardColor[id] || product.cardVariants[0].name)
                : '';

            const modalContent = document.getElementById('modalContent');
            // Multi-angle thumbnails (slippers AND shoes): variant-aware (sh-3
            // follows the selected color), deduped to distinct perspectives
            const modalAngleEntries = ((product.category === 'slippers' || product.category === 'shoes') &&
                (resolveCardImages(product) || product.images))
                ? dedupeCardAngles(product, resolveCardImages(product) || product.images) : null;
            const modalPrimaryAngle = modalAngleEntries ? modalAngleEntries[0].angle : 'top';
            modalContent.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="relative h-72 sm:h-80 rounded-xl overflow-hidden border border-luxuryBorder bg-white" style="padding: 25px; isolation: isolate;">
                            <img id="modalImage" src="${modalAngleEntries ? angleSrcFor(product, resolveCardImages(product) || product.images, modalPrimaryAngle) : (product.cardVariants ? resolveVariant(product, selectedColor) : product.image)}" srcset="${srcsetForSrc(modalAngleEntries ? angleSrcFor(product, resolveCardImages(product) || product.images, modalPrimaryAngle) : (product.cardVariants ? resolveVariant(product, selectedColor) : product.image))}" sizes="(max-width: 767px) 88vw, 560px" ${modalAngleEntries ? `style="transform: ${angleTransformFor(product, resolveCardImages(product) || product.images, modalPrimaryAngle)};"` : ''} onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'" class="photo-blend w-full h-full object-contain transition-all duration-300" decoding="async" alt="${product.name}">
                    </div>
                    <p class="text-[10px] uppercase tracking-widest text-gold mt-2 text-center font-semibold" id="modalAngleName">Now Viewing: ${modalAngleEntries ? angleLabelFor(product, modalPrimaryAngle) : 'Main View'}</p>
                    ${modalAngleEntries && modalAngleEntries.length ? `<div class="grid grid-cols-${Math.max(modalAngleEntries.length, 1)} gap-2 mt-2" id="angleWrap">
                        ${modalAngleEntries.map(({ angle: a, src, standin }, i) => {
                            const label = angleLabelFor(product, a);
                            const active = i === 0;   // modal always opens on the primary view
                            return `<div class="text-center">
                                <button type="button" onclick="pickAngle('${product.id}', '${a}')" data-angle="${a}" title="${label}" aria-label="Show ${label} of ${product.name}"
                                    class="angle-btn w-full h-14 rounded-lg border-2 overflow-hidden bg-white p-1 flex items-center justify-center transition duration-200 ${active ? 'border-gold ring-2 ring-gold/40' : 'border-luxuryBorder hover:border-gold'}">
                                    <img src="${src}" ${standin ? `style="transform: ${angleTransformFor(product, resolveCardImages(product) || product.images, a)};"` : ''} onerror="this.onerror=null; this.src='${product.image}'; setAngleTransform(this, '${product.category === 'slippers' ? a : 'top'}');" class="photo-blend max-w-full max-h-full object-contain" alt="${label}">
                                </button>
                                <p data-angle-cap="${a}" class="text-[9px] uppercase tracking-widest ${active ? 'text-gold' : 'text-mutedText'} mt-1">${label}</p>
                            </div>`;
                        }).join('')}
                    </div>` : ''}
                    </div>
                    <div>
                        <span class="text-xs text-gold font-serif tracking-widest uppercase">${product.category}</span>
                        <h2 class="font-serif text-2xl font-bold text-ivory mt-1 mb-2">${product.name}</h2>
                        <!-- Price intentionally not displayed (clean COD storefront) -->
                        <p class="text-xs text-mutedText leading-relaxed mb-6">${product.description}</p>
                        
                        ${product.cardVariants ? `
                        <div class="mb-6">
                            <label class="block text-xs text-gold mb-2 uppercase font-semibold">Select Color:</label>
                            <div class="flex flex-wrap gap-3" id="colorWrap">
                                ${product.cardVariants.map(v => `
                                    <button type="button" onclick="pickModalVariant('${product.id}', '${v.name}')" data-color="${v.name}" title="${v.name}" aria-label="Select ${v.name} color"
                                        class="color-btn w-9 h-9 rounded-full border-2 flex items-center justify-center transition duration-200 ${v.name === selectedColor ? 'border-gold ring-2 ring-gold/40' : 'border-luxuryBorder hover:border-gold'}"
                                        style="background-color:${v.hex}">
                                    </button>`).join('')}
                            </div>
                            <p id="colorName" class="text-xs text-mutedText mt-2">Selected Color: ${selectedColor}</p>
                        </div>` : ''}

                        <div class="mb-6">
                            <label class="block text-xs text-gold mb-2 uppercase font-semibold">Select Size (UK/IND):</label>
                            <div class="flex flex-wrap gap-2" id="sizeWrap">
                                ${product.sizes.map(s => `<button type="button" onclick="pickSize(${s})" data-size="${s}"
                                    class="size-btn px-3 py-1.5 bg-obsidian border border-luxuryBorder rounded text-xs font-bold text-ivory hover:border-gold transition duration-150">${s}</button>`).join('')}
                            </div>
                            <p id="sizeWarn" class="hidden text-xs text-gold mt-2">Please select a size first.</p>
                        </div>

                        <button onclick="addSelectionToCart('${product.id}')" class="gold-btn w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest">
                            Add to Cart & Order
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('productModal').classList.remove('hidden');
        }

        function closeProductModal() {
            document.getElementById('productModal').classList.add('hidden');
        }

        // Color/Size selection inside the modal
        // (no generic pickColor — color switching happens ONLY through
        // pickModalVariant for the designated shoe sh-3)

        // Variant image switching inside the modal (card-variant products only —
        // the actual photo file swaps, and the card selection is kept in sync)
        function pickModalVariant(productId, name) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.cardVariants) return;
            const variant = product.cardVariants.find(v => v.name === name);
            if (!variant) return;
            selectedColor = name;
            cardColor[productId] = name;
            const modalImg = document.getElementById('modalImage');
            swapImageSmooth(modalImg, variant.image);
            // color switch swaps the variant's own angle file set — the modal now
            // shows the new variant's primary (top) view; keep the caption, the
            // thumbnail active states and the sources perfectly in step
            document.querySelectorAll('#angleWrap .angle-btn').forEach((btn, i) => {
                const active = i === 0;   // return to the variant's primary view
                btn.classList.toggle('border-gold', active);
                btn.classList.toggle('ring-2', active);
                btn.classList.toggle('ring-gold/40', active);
                btn.classList.toggle('border-luxuryBorder', !active);
                const cap = btn.parentElement.querySelector('[data-angle-cap]');
                if (cap) {
                    cap.classList.toggle('text-gold', active);
                    cap.classList.toggle('text-mutedText', !active);
                }
                if (i === 0) {
                    const img = btn.querySelector('img');
                    const vImgs = resolveCardImages(product) || product.images;
                    const entry = dedupeCardAngles(product, vImgs)[0];
                    if (entry && img) img.src = entry.src;
                }
            });
            const nameEl = document.getElementById('modalAngleName');
            if (nameEl) nameEl.textContent = 'Now Viewing: ' + angleLabelFor(product, 'top');
            // keep the underlying card in sync (image + swatch highlight)
            syncCardVariantVisual(productId, name);
            document.querySelectorAll('#colorWrap .color-btn').forEach(btn => {
                const active = btn.dataset.color === name;
                btn.classList.toggle('border-gold', active);
                btn.classList.toggle('ring-2', active);
                btn.classList.toggle('ring-gold/40', active);
                btn.classList.toggle('border-luxuryBorder', !active);
            });
            document.getElementById('colorName').textContent = 'Selected Color: ' + name;
        }

        function pickSize(size) {
            selectedSize = size;
            document.querySelectorAll('#sizeWrap .size-btn').forEach(btn => {
                const active = parseInt(btn.dataset.size) === size;
                btn.classList.toggle('bg-gold', active);
                btn.classList.toggle('text-obsidian', active);
                btn.classList.toggle('border-gold', active);
                btn.classList.toggle('bg-obsidian', !active);
                btn.classList.toggle('text-ivory', !active);
                btn.classList.toggle('border-luxuryBorder', !active);
            });
            const warn = document.getElementById('sizeWarn');
            if (warn) warn.classList.add('hidden');
        }

        // ===== Responsive image variants (WebP srcset) =====
        // Every seed photo ships as <stem>.webp (full) plus a downscaled
        // <stem>_800.webp; IMG_W records each file's native full width so the
        // w-descriptors stay truthful. Owner uploads are data URLs — never in
        // this map — so srcsetForSrc returns '' and they just use the src.
        const IMG_W = {
            slide1: 2060, slide2: 2065, slide3: 2066, slide4: 2070, slide5: 2067,
            'about_hero': 1920, 'about_vision': 1920, 'aboutpagesecond': 1672, 'aboutusbackground': 2016,
            'menshoe1': 1296, 'menshoe2': 1296, 'menshoe3': 600, 'menshoe3.1': 1536, 'menshoe3.2': 2000,
            'menshoe4': 1296, 'menshoe5': 1296, 'menshoe6': 1296, 'menshoe7': 1296,
            'menshoefront1': 1296, 'menshoefront2': 1296, 'menshoefront3': 1024, 'menshoefront3.1': 1481, 'menshoefront3.2': 1024,
            'menshoefront4': 1296, 'menshoefront5': 1296, 'menshoefront6': 1296, 'menshoefront7': 1296,
            'shoetopview1': 1296, 'shoetopview2': 1296, 'shoetopview3': 1302, 'shoetopview3.1': 1353, 'shoetopview3.2': 1024,
            'shoetopview4': 1296, 'shoetopview5': 1296, 'shoetopview6': 1296, 'shoetopview7': 1296,
            'menslipper1': 1155, 'menslipper2': 1024, 'menslipper3': 1412, 'menslipper4': 1024, 'menslipper5': 944,
            'menslipper6': 1412, 'menslipper7': 1068, 'menslipper8': 1063, 'menslipper9': 1411, 'menslipper10': 1368,
            'menslipper1_side': 1155, 'menslipper2_side': 1024,
            'backside1': 1155, 'backside2': 1024, 'backside3': 1156, 'backside4': 1024, 'backside5': 944,
            'backside6': 1156, 'backside7': 1068, 'backside8': 1063, 'backside9': 1155, 'backside10': 1124
        };
        function srcsetForSrc(src) {
            if (!src || typeof src !== 'string') return '';
            const m = src.match(/assestes\/(.+?)\.(?:webp|png|jpe?g)/i);
            if (!m) return '';
            const stem = m[1];
            const w = IMG_W[stem];
            if (!w) return '';
            const base = src.replace(/\.(webp|png|jpe?g)$/i, '');
            return w > 800 ? `${base}.webp ${w}w, ${base}_800.webp 800w` : `${base}.webp ${w}w`;
        }
        // keep an <img>'s srcset in step whenever the JS swaps its src
        function syncSrcset(img, newSrc) {
            if (!img) return;
            const set = srcsetForSrc(newSrc);
            if (set) img.setAttribute('srcset', set); else img.removeAttribute('srcset');
        }

        // ===== Multi-angle photo switching (slippers) =====
        // Angles with dedicated files on disk (backside1–10.png for the sole view)
        // are shown untransformed. Angle files that don't exist yet (left)
        // fall back to the primary photo with a light CSS stand-in.
        const ANGLE_TRANSFORMS = {
            top: 'none',
            back: 'none',
            left: 'scaleX(-1)'
        };
        function setAngleTransform(node, angle) {
            if (!node) return;
            if (Object.prototype.hasOwnProperty.call(ANGLE_TRANSFORMS, angle)) {
                node.style.transform = ANGLE_TRANSFORMS[angle];
            } else {
                // raw transform passthrough ('scaleX(-1)', 'none', '')
                node.style.transform = angle || 'none';
            }
        }
        function pickAngle(productId, angle) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product || !product.images) return;
            const img = document.getElementById('modalImage');
            if (!img) return;
            // keep the accessible alt in sync with the angle being displayed
            img.alt = `${product.name} — ${angleLabelFor(product, angle)}`;

            // variant-aware source (sh-3 thumbnails follow the selected color)
            const imgs = resolveCardImages(product) || product.images;
            const standin = angleIsStandin(product, imgs, angle);
            const target = angleSrcFor(product, imgs, angle);
            // the stand-in style applies to ANY stand-in view, including
            // the top slot of front-only owner shoes ("Side Profile" stand-in)
            const flip = standin ? angleTransformFor(product, imgs, angle) : (ANGLE_TRANSFORMS[angle] || 'none');

            img.onerror = null;
            if (standin) {
                // mirrored stand-in: primary photo + flip, no network request
                img.onload = () => { img.style.opacity = '1'; setAngleTransform(img, flip); };
            } else if (angle === 'top') {
                // Original image, untransformed
                img.onload = () => { img.style.opacity = '1'; setAngleTransform(img, 'none'); };
            } else {
                img.onerror = () => {
                    img.onerror = null;
                    img.onload = () => { img.style.opacity = '1'; };
                    img.src = product.image;           // graceful revert to the primary photo
                    syncSrcset(img, product.image);
                    setAngleTransform(img, flip);      // CSS stand-in for the missing slipper angle
                };
                img.onload = () => {
                    img.style.opacity = '1';
                    // the REAL angle file loaded → display it untransformed
                    setAngleTransform(img, 'none');
                };
            }
            // clean single-layer swap: micro-fade → swap → the onload handler restores
            // opacity. Missing angle files revert to the primary photo with their
            // instantly-applied stand-in transform (no aggressive scaling anywhere).
            img.style.opacity = '0.3';
            setTimeout(() => { img.src = target; syncSrcset(img, target); }, 160);
            // failsafe: same-src swaps may skip the load event — never hang faded
            setTimeout(() => {
                if (img.style.opacity !== '1' && img.getAttribute('src')) {
                    img.style.opacity = '1';
                    setAngleTransform(img, (standin || (angle !== 'top' && img.getAttribute('src') === product.image)) ? flip : 'none');
                }
            }, 400);

            document.querySelectorAll('#angleWrap .angle-btn').forEach(btn => {
                const active = btn.dataset.angle === angle;
                btn.classList.toggle('border-gold', active);
                btn.classList.toggle('ring-2', active);
                btn.classList.toggle('ring-gold/40', active);
                btn.classList.toggle('border-luxuryBorder', !active);
                // thumbnail caption: active view's name lights up in gold
                const cap = btn.parentElement.querySelector('[data-angle-cap]');
                if (cap) {
                    cap.classList.toggle('text-gold', active);
                    cap.classList.toggle('text-mutedText', !active);
                }
            });
            // live "Now Viewing" readout — always the exact name of the shown photo
            const nameEl = document.getElementById('modalAngleName');
            if (nameEl) nameEl.textContent = 'Now Viewing: ' + angleLabelFor(product, angle);
        }

        // Toast confirmation
        let toastTimer = null;
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMsg').textContent = message;
            toast.classList.remove('hidden');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.add('hidden'), 3500);
        }

        // Cart persistence (LocalStorage)
        function saveCart() {
            try { localStorage.setItem('aureus_cart', JSON.stringify(cart)); } catch (e) {}
        }
        function loadCart() {
            try {
                const saved = localStorage.getItem('aureus_cart');
                if (saved) {
                    cart = JSON.parse(saved) || [];
                    // normalize image paths saved before the assestes/ folder move
                    // (idempotent — already-prefixed paths pass through untouched)
                    const fixPath = p => typeof p === 'string'
                        ? p.replace(/^\.\/(?:assestes\/)?(?=mens|backside|slide)/, './assestes/')
                        : '';
                    cart = cart.map(it => ({
                        ...it,
                        image: fixPath(it.image),
                        pickedImage: it.pickedImage ? fixPath(it.pickedImage) : undefined
                    }));
                }
            } catch (e) {}
        }

        // Cart Logic
        function addToCart(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const color = product.cardVariants
                ? (cardColor[productId] || product.cardVariants[0].name)
                : '';   // no color selection on non-variant models
            const size = selectedSize || product.sizes[0];
            const key = productId + '-' + color + '-' + size;
            const variantImage = product.cardVariants ? resolveVariant(product, color) : product.image;

            const existing = cart.find(item => item.key === key);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...product, qty: 1, key: key, pickedColor: color, pickedSize: size, pickedImage: variantImage });
            }
            saveCart();
            updateCartUI();
            // open the Add-to-Cart popup/drawer immediately (no raw price blot on
            // the card itself — the drawer is the single place to review selection)
            showToast(`Added to Cart: ${product.name} - Size: ${size}${color ? ', Color: ' + color : ''}`);
            openCartModal();
        }

        // Add from the detail modal with chosen Color + Size (validated)
        function addSelectionToCart(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            if (!selectedSize) {
                const warn = document.getElementById('sizeWarn');
                if (warn) warn.classList.remove('hidden');
                return;
            }

            const color = selectedColor || (product.cardVariants ? product.cardVariants[0].name : '');
            const size = selectedSize;
            const key = productId + '-' + color + '-' + size;
            const variantImage = product.cardVariants ? resolveVariant(product, color) : product.image;

            const existing = cart.find(item => item.key === key);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...product, qty: 1, key: key, pickedColor: color, pickedSize: size, pickedImage: variantImage });
            }
            saveCart();
            updateCartUI();
            showToast(`Added to Cart: ${product.name} — Size: ${size}, Color: ${color}`);
            closeProductModal();
            openCartModal();
        }

        function updateCartUI() {
            const list = document.getElementById('cartItemsList');
            const countEl = document.getElementById('cartCount');

            // Quantity-only bookkeeping — no price display or subtotal calculation
            // anywhere in the cart drawer (store runs WhatsApp-quotation pricing)
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            countEl.textContent = totalQty;

            if (cart.length === 0) {
                list.innerHTML = `<p class="text-center text-xs text-mutedText py-8">Your shopping cart is empty.</p>`;
                return;
            }

            list.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between p-3 bg-obsidian border border-luxuryBorder rounded-lg">
                    <div class="flex items-center space-x-3">
                        <img src="${item.pickedImage || item.image}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'" class="w-12 h-12 object-cover rounded border border-luxuryBorder" alt="${item.name}">
                        <div>
                            <h4 class="text-xs font-bold text-ivory">${item.name}</h4>
                            <p class="text-xs text-gold">Qty: ${item.qty}</p>
                            <p class="text-[10px] text-mutedText">Size: ${item.pickedSize || '—'}${item.pickedColor ? ` • Color: ${item.pickedColor}` : ''}</p>
                        </div>
                    </div>
                    <button onclick="removeFromCart('${item.key}')" aria-label="Remove ${item.name} from cart" class="text-mutedText hover:text-red-400 text-xs p-1">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }

        function removeFromCart(key) {
            cart = cart.filter(item => item.key !== key);
            saveCart();
            updateCartUI();
        }

        function openCartModal() {
            document.getElementById('cartModal').classList.remove('hidden');
        }

        function closeCartModal() {
            document.getElementById('cartModal').classList.add('hidden');
        }

        // ===== Footer Customer-Service helpers =====
        // WhatsApp Direct Ordering: open the cart drawer when the customer already
        // picked styles, otherwise straight into a WhatsApp chat.
        function openWhatsAppOrdering() {
            if (cart.length > 0) {
                openCartModal();
                showToast('Your cart is ready — confirm your details to send the WhatsApp order.');
            } else {
                window.open('https://wa.me/919384798122?text=' + encodeURIComponent('Hello BASIC FOOTGEAR! I would like to place a COD footwear order.'), '_blank');
                showToast('WhatsApp opened — tell us what you like and we handle the rest!');
            }
        }

        // Navigate to the Store & Contact page, then glide to a specific section
        // (codWorkflow / boutiqueLocation / contactFormCard). The page also
        // auto-scrolls to top on navigation, which can swallow the first scroll —
        // so scroll twice (the second pass wins) and skip when already fully visible.
        function goToContactSection(sectionId) {
            navigateTo('contact');
            [700, 1400].forEach(delay => {
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                    if (!fullyVisible) {
                        el.scrollIntoView({ behavior: 'smooth', block: sectionId === 'contactFormCard' ? 'center' : 'start' });
                    }
                }, delay);
            });
        }

        // Slipper & Shoe Size Guide modal
        function openSizeGuideModal() {
            document.getElementById('sizeGuideModal').classList.remove('hidden');
        }
        function closeSizeGuideModal() {
            document.getElementById('sizeGuideModal').classList.add('hidden');
        }

        function sendWhatsAppOrder() {
            if (cart.length === 0) {
                alert('Please add at least one pair of footwear to your cart.');
                return;
            }

            // ===== Customer details (all three required) =====
            const nameInput = document.getElementById('cartCustomerName');
            const phoneInput = document.getElementById('cartCustomerPhone');
            const addressInput = document.getElementById('deliveryAddress');
            const custName = nameInput.value.trim();
            const custPhone = phoneInput.value.trim();
            const address = addressInput.value.trim();

            [nameInput, phoneInput, addressInput].forEach(el => el.classList.remove('border-red-500'));
            if (!custName || !custPhone || !address) {
                [nameInput, phoneInput, addressInput].forEach(el => { if (!el.value.trim()) el.classList.add('border-red-500'); });
                showToast('Please fill in your Name, WhatsApp Number and Delivery Address to place the order.');
                return;
            }

            // ===== Generate a unique COD Order ID =====
            let orderId = `COD-${Math.floor(1000 + Math.random() * 9000)}`;
            while (ordersData.some(o => o.id === orderId)) {
                orderId = `COD-${Math.floor(1000 + Math.random() * 9000)}`;
            }

            const itemsText = cart.map(item => `${item.name} (${item.id}) x ${item.qty}`).join(', ');
            const sizesText = [...new Set(cart.map(i => i.pickedSize ? `UK ${i.pickedSize}` : null).filter(Boolean))].join(', ') || '—';
            const colorsText = [...new Set(cart.map(i => i.pickedColor).filter(Boolean))].join(', ') || '—';
            const totalCost = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

            // Normalize mobile to the 10-digit local format the dashboard's wa.me/91 links expect
            let digits = custPhone.replace(/\D/g, '');
            if (digits.length > 10 && digits.startsWith('91')) digits = digits.slice(2);
            if (digits.length > 10 && digits.startsWith('0')) digits = digits.slice(1);

            // ===== Register the COD order into the Executive Admin Dashboard =====
            const newOrder = {
                id: orderId,
                name: custName,
                mobile: digits,
                items: itemsText,
                size: sizesText,
                color: colorsText,
                price: `₹${totalCost.toLocaleString('en-IN')}`,
                address: address,
                status: 'New Order',
                notes: `Auto-registered from website cart on ${new Date().toLocaleDateString('en-IN')} — order sent via WhatsApp checkout.`,
                source: 'store'
            };
            ordersData.unshift(newOrder);
            saveOrdersData();
            renderOrdersTable(ordersData);
            updateKPIs();
            showToast(`Order ${orderId} registered in Admin Dashboard — opening WhatsApp…`);

            // ===== WhatsApp message with full customer + order details =====
            let text = `*NEW FOOTWEAR ORDER - BASIC FOOTGEAR KAYALPATTINAM*\n\n`;
            text += `*Order ID:* ${orderId}\n*Customer Name:* ${custName}\n*WhatsApp Number:* ${custPhone}\n\n`;

            cart.forEach((item, index) => {
                text += `${index + 1}. *${item.name}* (Size: ${item.pickedSize || '—'}, Color: ${item.pickedColor || '—'})\n   Qty: ${item.qty} | Price: ₹${(item.price * item.qty).toLocaleString()}\n`;
                // Clickable deep link on its OWN line: label + newline + URL, so
                // WhatsApp auto-detects the URL as a clickable blue hyperlink and
                // opens the page highlighting the exact model (3-angle photos,
                // sizes, details) for the boutique owner
                const link = getProductImageLink(item.id);
                if (link) text += `Product View: \n${link}\n`;
                // Image reference: the exact photo the customer ordered (the selected
                // variant image when applicable). Resolved dynamically — works for
                // owner-added models, color variants and catalog items alike,
                // with NO hardcoded paths. Large uploaded data-URLs are skipped
                // (the Product View deep link already shows the model).
                const imgSrc = item.pickedImage || item.image || '';
                if (imgSrc && !/^data:/i.test(imgSrc)) {
                    try {
                        const absImg = new URL(imgSrc, window.location.href).href;
                        text += `Image Reference: \n${absImg}\n`;
                    } catch (err) { /* relative path unresolvable — Product View link still identifies the model */ }
                }
            });

            text += `\n*Total COD Amount:* ₹${totalCost.toLocaleString()}`;
            text += `\n*Delivery/Pickup Address:* ${address}`;
            text += `\n\nPlease confirm availability and payment details. Thank you!`;

            const encodedText = encodeURIComponent(text);
            window.open(`https://wa.me/919384798122?text=${encodedText}`, '_blank');
        }

        // Search Trigger
        function handleSearch(e) {
            const query = e.target.value.toLowerCase().trim();
            if(!query) return;
            
            if (e.key === 'Enter') {
                const main = document.getElementById('mainContent');
                const matched = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
                
                main.innerHTML = `
                    <div class="max-w-7xl mx-auto px-4 py-12">
                        <h2 class="font-serif text-2xl font-bold text-ivory mb-6">Search Results for "${query}"</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${matched.length > 0 ? matched.map((p, i) => renderProductCard(p, i)).join('') : '<p class="text-mutedText text-xs">No matching luxury styles found.</p>'}
                        </div>
                    </div>
                `;
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Initial Load
        // PERF: was window.onload — that waits for EVERY subresource (async font
        // CSS, Google Fonts, Font Awesome, all images) before rendering the home
        // view, serialising the LCP hero behind the font chain. DOMContentLoaded
        // gives us the same guaranteed-complete DOM (all sections parsed) without
        // waiting on any network resources.
        function bootStorefront() {
            loadCart();
            updateCartUI();
            navigateTo('home');

            // Deep link support (?product=<id>): opens the page highlighting the
            // EXACT model a customer ordered — its category view, then the product
            // modal with the 3-angle images, size options and full details.
            const deepId = new URLSearchParams(window.location.search).get('product');
            if (deepId) {
                const p = PRODUCTS.find(x => x.id === deepId);
                if (p) {
                    navigateTo(p.category === 'shoes' ? 'shoes' : 'slippers');
                    setTimeout(() => openProductModal(deepId), 350);
                }
                try { history.replaceState(null, '', window.location.pathname); } catch (err) { /* file:// guard */ }
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bootStorefront);
        } else {
            bootStorefront();
        }
