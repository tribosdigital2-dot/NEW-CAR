document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(r => revealOnScroll.observe(r));

    // 2. FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // 3. Mockup Animation Logic
    const mockupPrint = document.getElementById('mockup-print');
    const mockupArea = document.querySelector('.mockup-print-area');
    const baseWhite = document.getElementById('mockup-base-white');
    const baseBlack = document.getElementById('mockup-base-black');

    const mockupDesigns = [
        { src: "car imagens/Blusa preta (1).png", color: "preto", scale: "0.82", x: 0, y: "1" },
        { src: "car imagens/Blusa preta (2).png", color: "preto", scale: "0.66", x: 0, y: "-9" },
        { src: "car imagens/Blusa preta (3).png", color: "preto", scale: "0.82", x: 0, y: "6" },
        { src: "car imagens/Blusa preta (4).png", color: "preto", scale: "0.74", x: 0, y: "-4" },
        { src: "car imagens/Blusa preta (5).png", color: "preto", scale: "0.88", x: 0, y: 0 },
        { src: "car imagens/Blusa preta (6).png", color: "preto", scale: "0.88", x: 0, y: "0" },
        { src: "car imagens/Blusa branca (1).png", color: "branco", scale: "0.84", x: 0, y: 0 },
        { src: "car imagens/Blusa branca (2).png", color: "branco", scale: "0.82", x: 0, y: 0 },
        { src: "car imagens/Blusa branca (3).png", color: "branco", scale: "0.78", x: 0, y: 0 },
        { src: "car imagens/Blusa branca (4).png", color: "branco", scale: "0.84", x: 0, y: 0 },
        { src: "car imagens/Blusa branca (5).png", color: "branco", scale: "0.8", x: 0, y: 0 }
    ];

    let designIndex = 0;
    
    // Initial setup for the first image
    if (mockupPrint && mockupDesigns.length > 0) {
        const first = mockupDesigns[0];
        mockupPrint.style.transform = `scale(${first.scale}) translate(${first.x}%, ${first.y}%)`;
    }

    function swapDesign() {
        if (!mockupPrint) return;
        mockupPrint.classList.add('fade');
        setTimeout(() => {
            designIndex = (designIndex + 1) % mockupDesigns.length;
            const current = mockupDesigns[designIndex];
            
            if (current.color === 'preto') {
                baseWhite.classList.remove('active');
                baseBlack.classList.add('active');
                mockupPrint.style.mixBlendMode = 'normal';
            } else {
                baseBlack.classList.remove('active');
                baseWhite.classList.add('active');
                mockupPrint.style.mixBlendMode = 'multiply';
            }
            
            // Apply transform dynamically
            mockupPrint.style.transform = `scale(${current.scale}) translate(${current.x}%, ${current.y}%)`;
            
            // Wait for the new image to fully load before fading back in
            mockupPrint.onload = () => {
                mockupPrint.classList.remove('fade');
                mockupPrint.onload = null;
            };
            
            mockupPrint.src = current.src;
            
            // Failsafe: if the image is already cached, onload might not fire
            if (mockupPrint.complete) {
                mockupPrint.classList.remove('fade');
                mockupPrint.onload = null;
            }
        }, 400);
    }

    // Start Auto-rotation
    if (mockupPrint) setInterval(swapDesign, 3000);

    // 4. Video Facade Logic
    document.querySelectorAll('.video-facade').forEach(facade => {
        facade.addEventListener('click', () => {
            const videoId = facade.getAttribute('data-video-id');
            facade.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        });
    });

    // 5. Sticky CTA Logic
    const stickyBar = document.getElementById('sticky-cta');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) stickyBar.classList.add('active');
        else stickyBar.classList.remove('active');
    });

    // 6. iPhone Grid Population
    const grid = document.getElementById('phoneGrid');
    const images = [
        "Mockup Celular/imgi_101_1-1513.png",
        "Mockup Celular/imgi_24_1-722.png",
        "Mockup Celular/imgi_26_1-752.png",
        "Mockup Celular/imgi_27_1-760.png",
        "Mockup Celular/imgi_29_1-764.png",
        "Mockup Celular/imgi_31_1-767.png",
        "Mockup Celular/imgi_32_1-774.png",
        "Mockup Celular/imgi_36_1-786.png",
        "Mockup Celular/imgi_65_1-1065.png",
        "Mockup Celular/imgi_66_1-1069.png",
        "Mockup Celular/imgi_67_1-1075.png",
        "Mockup Celular/imgi_72_1-1085.png",
        "Mockup Celular/imgi_73_1-1088.png",
        "Mockup Celular/imgi_74_1-1095.png",
        "Mockup Celular/imgi_75_1-1096.png",
        "Mockup Celular/imgi_76_1-1097.png",
        "Mockup Celular/imgi_77_1-1108.png",
        "Mockup Celular/imgi_80_1-1228.png",
        "Mockup Celular/imgi_83_1-1322.png",
        "Mockup Celular/imgi_85_1-1328.png",
        "Mockup Celular/imgi_88_1-1346.png",
        "Mockup Celular/imgi_92_1-1364.png",
        "Mockup Celular/imgi_93_1-1368.png",
        "Mockup Celular/imgi_95_1-1374.png",
        "Mockup Celular/imgi_96_1-1376.png",
        "Mockup Celular/imgi_97_1-1415.png"
    ];
    if (grid) {
        images.forEach(src => {
            const div = document.createElement('div');
            div.className = 'mockup-img-container';
            div.innerHTML = `<img src="${src}" loading="lazy">`;
            grid.appendChild(div);
        });
    }

    // 7. Hero Video Smooth Fade-in once loaded
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', () => {
            heroVideo.classList.add('loaded');
        });
        // Failsafe: if video was already cached/loaded
        if (heroVideo.readyState >= 2) {
            heroVideo.classList.add('loaded');
        }
    }

    // 8. Discount Offer Popup Logic & Dynamic Pricing Updates
    const offerPopup = document.getElementById('discount-popup');
    const closeOffer = document.getElementById('close-offer');
    const activateOffer = document.getElementById('btn-activate-offer');
    const successBar = document.getElementById('coupon-success-bar');
    const triggerSection = document.querySelector('.video-hero');
    let offerShown = false;

    if (offerPopup) {
        // A. Scroll-past-hero Trigger
        if (triggerSection) {
            const offerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting && entry.boundingClientRect.top < 0 && !offerShown) {
                        offerPopup.classList.add('active');
                        offerShown = true;
                    }
                });
            }, { threshold: 0 });

            offerObserver.observe(triggerSection);
        }

        // B. Desktop Exit-Intent Trigger
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 50 && !offerShown) {
                offerPopup.classList.add('active');
                offerShown = true;
            }
        });
    }

    if (closeOffer) {
        closeOffer.addEventListener('click', () => {
            offerPopup.classList.remove('active');
        });
    }

    if (activateOffer) {
        activateOffer.addEventListener('click', () => {
            offerPopup.classList.remove('active');
            
            // Show bottom success bar
            if (successBar) {
                successBar.classList.add('active');
            }

            // DYNAMICALLY UPDATE PRICES AND BADGES ACROSS THE PAGE
            const priceAmount = document.querySelector('.price-main-centered .amount');
            const stickyCtaPrice = document.querySelector('.sticky-info .text-highlight');
            const discountBadgeText = document.querySelector('.discount-badge');

            if (priceAmount) {
                priceAmount.textContent = '27';
                priceAmount.style.animation = 'none';
                setTimeout(() => {
                    priceAmount.style.animation = 'offerPopIn 0.5s ease-out';
                }, 10);
            }
            if (stickyCtaPrice) {
                stickyCtaPrice.textContent = '$27.00';
            }
            if (discountBadgeText) {
                discountBadgeText.textContent = 'Save 72% TODAY';
                discountBadgeText.style.background = '#22c55e';
            }

        });
    }

    // 9. Initialize Hotmart & Facebook Pixel Tracking
    initTracking();
});

// --- TRACKING & ANALYTICS FUNCTIONS ---
function initTracking() {
    console.log("Initializing Tracking Systems...");

    // Hotmart UTM & SCK Tracking
    (function () {
        const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
        const qs = new URLSearchParams(location.search);

        // Fallback: if no UTM exists, use referrer
        if (!UTM_KEYS.some(k => qs.has(k)) && document.referrer) {
            try {
                const host = new URL(document.referrer).hostname.replace(/^www\./, '');
                qs.set("utm_source", host);
                qs.set("utm_medium", "referral");
            } catch (e) { }
        }

        // Build compact SCK parameter (max 240 chars)
        const src = qs.get("utm_source") || qs.get("src") || "direct";
        const med = qs.get("utm_medium") || "na";
        const cmp = qs.get("utm_campaign") || "na";
        const cnt = qs.get("utm_content") || "na";
        const trm = qs.get("utm_term") || "na";

        let sck = `src:${src}|md:${med}|cmp:${cmp}|cnt:${cnt}|trm:${trm}`;
        if (sck.length > 240) sck = sck.slice(0, 240);

        // Helper: Applies UTMs + SCK to a Hotmart checkout URL
        function withTracking(urlStr) {
            try {
                const u = new URL(urlStr, location.href);
                if (!/pay\.hotmart/i.test(u.hostname)) return urlStr;

                // Pass existing UTMs
                UTM_KEYS.forEach(k => { if (qs.get(k)) u.searchParams.set(k, qs.get(k)); });

                // Pass 'src' parameter as fallback if present
                if (qs.get('src')) u.searchParams.set('src', qs.get('src'));

                // Set SCK custom parameter
                u.searchParams.set("sck", sck);
                return u.toString();
            } catch (e) {
                return urlStr;
            }
        }

        // 1) Update existing Hotmart anchors on page load
        document.querySelectorAll('a[href*="pay.hotmart"]').forEach(a => {
            try {
                const h = a.getAttribute('href');
                if (h) a.setAttribute('href', withTracking(h));
            } catch (e) { }
        });

        // 2) Intercept clicks for late-bound checkout buttons or dynamic offers
        document.addEventListener('click', function (ev) {
            const el = ev.target.closest('a,button');
            if (!el) return;

            const raw = el.getAttribute('href');
            if (!raw) return;

            if (/pay\.hotmart/i.test(raw)) {
                // TRACKING: Fire Facebook InitiateCheckout
                if (typeof fbq === 'function') {
                    fbq('track', 'InitiateCheckout');
                    console.log("FBQ: InitiateCheckout Fired on Pixel");
                }

                // Ensure URL parameters are appended
                const url = withTracking(raw);
                if (el.getAttribute('href') !== url) {
                    el.setAttribute('href', url);
                }
            }
        }, { capture: true });

        console.log('Tracking setup complete. SCK:', sck);
    })();
}
