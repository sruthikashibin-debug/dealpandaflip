// Flipkart Store Offers Database
const flipkartOffers = [
    {
        id: 1,
        type: "coupon",
        title: "Apple iPhone 15 Pro Max",
        description: "Get the latest iPhone with A17 Pro chip and 48MP camera",
        category: "mobile",
        price: 139900,
        oldPrice: 159900,
        discount: 12,
        couponCode: "IPHONE12",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda",
        featured: true,
        popular: 98,
        views: 28450
    },
    {
        id: 2,
        type: "deal",
        title: "Samsung Galaxy S24 Ultra 5G",
        description: "200MP camera with 100x Space Zoom, S Pen included",
        category: "mobile",
        price: 114999,
        oldPrice: 134999,
        discount: 14,
        couponCode: "SAMSUNG14",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda",
        featured: true,
        popular: 95,
        views: 22340
    },
    {
        id: 3,
        type: "bank",
        title: "Bank Offer: 10% Instant Discount",
        description: "Get 10% instant discount on SBI Credit Cards",
        category: "all",
        price: 0,
        oldPrice: 0,
        discount: 10,
        couponCode: "SBIBANK",
        image: "https://cdn-icons-png.flaticon.com/512/2953/2953774.png",
        affiliateUrl: "https://www.flipkart.com",
        featured: true,
        popular: 99,
        views: 15670
    },
    {
        id: 4,
        type: "coupon",
        title: "HP Victus Gaming Laptop",
        description: "Intel i5, RTX 3050, 16GB RAM, 144Hz Display",
        category: "laptop",
        price: 67990,
        oldPrice: 84990,
        discount: 20,
        couponCode: "VICTUS20",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda",
        featured: true,
        popular: 92,
        views: 15670
    },
    {
        id: 5,
        type: "deal",
        title: "boAt Rockerz 550 Headphones",
        description: "Wireless Bluetooth, 20hr battery, Deep Bass",
        category: "electronics",
        price: 1999,
        oldPrice: 3999,
        discount: 50,
        couponCode: "BOAT50",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda",
        featured: true,
        popular: 99,
        views: 34280
    },
    {
        id: 6,
        type: "bank",
        title: "HDFC Bank Offer: ₹1500 Off",
        description: "Get ₹1500 instant discount on HDFC Credit/Debit Cards",
        category: "all",
        price: 0,
        oldPrice: 0,
        discount: 1500,
        couponCode: "HDFC1500",
        image: "https://cdn-icons-png.flaticon.com/512/2953/2953774.png",
        affiliateUrl: "https://www.flipkart.com",
        featured: true,
        popular: 94,
        views: 25670
    },
    {
        id: 7,
        type: "exchange",
        title: "Exchange Offer: Up to ₹15,000 Off",
        description: "Exchange old phone and get up to ₹15,000 discount",
        category: "mobile",
        price: 0,
        oldPrice: 0,
        discount: 15000,
        couponCode: "EXCHANGE15",
        image: "https://cdn-icons-png.flaticon.com/512/3071/3071458.png",
        affiliateUrl: "https://www.flipkart.com",
        featured: true,
        popular: 96,
        views: 19870
    },
    {
        id: 8,
        type: "coupon",
        title: "Realme 12 Pro+ 5G",
        description: "64MP Periscope camera, 120Hz AMOLED, 67W charging",
        category: "mobile",
        price: 29999,
        oldPrice: 35999,
        discount: 16,
        couponCode: "REALME16",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/realme-12-pro-plus/p/itm?affid=dealpanda",
        featured: false,
        popular: 88,
        views: 12340
    },
    {
        id: 9,
        type: "deal",
        title: "Sony WH-1000XM4 Headphones",
        description: "Industry-leading noise cancellation, 30hr battery",
        category: "electronics",
        price: 24990,
        oldPrice: 34990,
        discount: 28,
        couponCode: "SONY28",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/sony-wh-1000xm4/p/itm?affid=dealpanda",
        featured: true,
        popular: 91,
        views: 18920
    },
    {
        id: 10,
        type: "bank",
        title: "ICICI Bank Offer: No Cost EMI",
        description: "Get No Cost EMI on all ICICI Credit Cards",
        category: "all",
        price: 0,
        oldPrice: 0,
        discount: 0,
        couponCode: "ICICINOCost",
        image: "https://cdn-icons-png.flaticon.com/512/2953/2953774.png",
        affiliateUrl: "https://www.flipkart.com",
        featured: true,
        popular: 93,
        views: 14520
    },
    {
        id: 11,
        type: "coupon",
        title: "OnePlus Nord CE 3 Lite 5G",
        description: "108MP camera, 67W fast charging, 120Hz display",
        category: "mobile",
        price: 18999,
        oldPrice: 22999,
        discount: 17,
        couponCode: "ONEPLUS17",
        image: "home-7.jpg",
        affiliateUrl: "https://www.flipkart.com/oneplus-nord-ce-3-lite/p/itm?affid=dealpanda",
        featured: false,
        popular: 86,
        views: 14560
    },
    {
        id: 12,
        type: "coupon",
        title: "Nike Men's Running Shoes",
        description: "Lightweight, breathable, cushioned sole for comfort",
        category: "fashion",
        price: 3999,
        oldPrice: 7999,
        discount: 50,
        couponCode: "NIKE50",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/nike-running-shoes/p/itm?affid=dealpanda",
        featured: false,
        popular: 94,
        views: 25670
    },
    {
        id: 13,
        type: "exchange",
        title: "Laptop Exchange Offer",
        description: "Exchange old laptop and get up to ₹25,000 off",
        category: "laptop",
        price: 0,
        oldPrice: 0,
        discount: 25000,
        couponCode: "LAPEX25",
        image: "https://cdn-icons-png.flaticon.com/512/3071/3071458.png",
        affiliateUrl: "https://www.flipkart.com",
        featured: false,
        popular: 89,
        views: 23450
    },
    {
        id: 14,
        type: "deal",
        title: "LG 55-inch 4K Smart TV",
        description: "4K UHD, AI ThinQ, WebOS, Built-in Alexa",
        category: "tv",
        price: 54990,
        oldPrice: 79990,
        discount: 31,
        couponCode: "LGTV31",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/lg-55-inch-4k-tv/p/itm?affid=dealpanda",
        featured: false,
        popular: 82,
        views: 8760
    },
    {
        id: 15,
        type: "coupon",
        title: "Peter England Formal Shirt",
        description: "Premium cotton, slim fit, wrinkle-free",
        category: "fashion",
        price: 999,
        oldPrice: 2499,
        discount: 60,
        couponCode: "SHIRT60",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/peter-england-shirt/p/itm?affid=dealpanda",
        featured: false,
        popular: 89,
        views: 23450
    }
];

let currentOffers = [...flipkartOffers];
let visibleCount = 12;
let currentTab = "all";

// Get type badge class
function getTypeBadgeClass(type) {
    switch(type) {
        case 'coupon': return 'coupon';
        case 'deal': return 'deal';
        case 'bank': return 'bank';
        case 'exchange': return 'deal';
        default: return 'coupon';
    }
}

// Get type display name
function getTypeDisplay(type) {
    switch(type) {
        case 'coupon': return '🎫 Coupon Code';
        case 'deal': return '🔥 Best Deal';
        case 'bank': return '💳 Bank Offer';
        case 'exchange': return '🔄 Exchange';
        default: return 'Offer';
    }
}

// Copy coupon code
function copyCouponCode(code, element) {
    navigator.clipboard.writeText(code).then(() => {
        const originalText = element.textContent;
        element.textContent = 'Copied! ✓';
        element.style.background = '#2e7d32';
        element.style.color = 'white';
        setTimeout(() => {
            element.textContent = originalText;
            element.style.background = '#f5f5f5';
            element.style.color = '';
        }, 1500);
    }).catch(() => {
        alert('Press Ctrl+C to copy: ' + code);
    });
}

// Create offer card
function createOfferCard(offer) {
    const card = document.createElement('div');
    card.className = 'offer-card';
    
    const discountText = offer.discount > 0 ? (offer.discount > 100 ? `₹${offer.discount.toLocaleString('en-IN')} off` : `${offer.discount}% off`) : 'Special Offer';
    
    card.innerHTML = `
        <div class="type-badge ${getTypeBadgeClass(offer.type)}">${getTypeDisplay(offer.type)}</div>
        <div class="offer-img">
            <img src="${offer.image}" alt="${offer.title}">
        </div>
        <div class="offer-info">
            <span class="offer-category">${offer.category === 'all' ? '🎯 All Products' : getCategoryName(offer.category)}</span>
            <h3>${offer.title}</h3>
            <p class="offer-desc">${offer.description}</p>
            ${offer.price > 0 ? `
            <div class="offer-price">
                ₹${offer.price.toLocaleString('en-IN')}
                <span class="old-price">₹${offer.oldPrice.toLocaleString('en-IN')}</span>
                <span class="discount-tag">${offer.discount}% off</span>
            </div>
            ` : `
            <div class="offer-price" style="color:#ff9800">
                ${discountText}
            </div>
            `}
            <div class="coupon-section">
                <div class="coupon-code">${offer.couponCode}</div>
                <button class="copy-btn">Copy</button>
            </div>
            <button class="shop-now-btn" data-url="${offer.affiliateUrl}">Shop Now on Flipkart →</button>
        </div>
    `;
    
    // Add copy button event
    const copyBtn = card.querySelector('.copy-btn');
    const couponDiv = card.querySelector('.coupon-code');
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyCouponCode(offer.couponCode, couponDiv);
    });
    
    couponDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        copyCouponCode(offer.couponCode, couponDiv);
    });
    
    const shopBtn = card.querySelector('.shop-now-btn');
    shopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(shopBtn.getAttribute('data-url'), '_blank');
    });
    
    card.addEventListener('click', () => {
        if (offer.price > 0) {
            window.location.href = `detail.html?id=${offer.id}`;
        }
    });
    
    return card;
}

// Get category name
function getCategoryName(category) {
    const names = {
        'mobile': '📱 Mobile',
        'laptop': '💻 Laptop',
        'electronics': '🎧 Electronics',
        'fashion': '👕 Fashion',
        'tv': '📺 TV',
        'all': '🎯 All Products'
    };
    return names[category] || category;
}

// Filter and render offers
function filterAndRenderOffers() {
    const category = document.getElementById('category-filter').value;
    const sortBy = document.getElementById('sort-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = [...flipkartOffers];
    
    // Filter by tab
    if (currentTab !== 'all') {
        filtered = filtered.filter(offer => offer.type === currentTab);
    }
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(offer => offer.category === category || offer.category === 'all');
    }
    
    // Filter by search
    if (searchTerm) {
        filtered = filtered.filter(offer => 
            offer.title.toLowerCase().includes(searchTerm) || 
            offer.description.toLowerCase().includes(searchTerm) ||
            offer.couponCode.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort
    if (sortBy === 'featured') {
        filtered.sort((a, b) => b.featured - a.featured);
    } else if (sortBy === 'discount') {
        filtered.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === 'popular') {
        filtered.sort((a, b) => b.popular - a.popular);
    } else if (sortBy === 'newest') {
        filtered.sort((a, b) => b.id - a.id);
    }
    
    currentOffers = filtered;
    const visibleOffers = filtered.slice(0, visibleCount);
    updateResultsCount(filtered.length);
    renderOffers(visibleOffers);
    
    const loadMoreContainer = document.getElementById('load-more-container');
    if (loadMoreContainer) {
        loadMoreContainer.style.display = visibleCount >= filtered.length ? 'none' : 'block';
    }
}

// Render offers
function renderOffers(offers) {
    const container = document.getElementById('flipkart-offers-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (offers.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:3rem;">No offers found. Try changing filters.</div>';
        return;
    }
    
    offers.forEach(offer => {
        const card = createOfferCard(offer);
        container.appendChild(card);
    });
}

// Update results count
function updateResultsCount(count) {
    const resultSpan = document.getElementById('result-count');
    if (resultSpan) {
        resultSpan.innerHTML = `${count} offer${count !== 1 ? 's' : ''}`;
    }
}

// Load more
function loadMoreOffers() {
    visibleCount += 6;
    filterAndRenderOffers();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#388e3c';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '40px';
    notification.style.zIndex = '1000';
    notification.style.fontWeight = 'bold';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// Make functions global
window.copyCouponCode = copyCouponCode;
window.loadMoreOffers = loadMoreOffers;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    filterAndRenderOffers();
    
    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.getAttribute('data-tab');
            visibleCount = 12;
            filterAndRenderOffers();
        });
    });
    
    // Filters
    document.getElementById('category-filter').addEventListener('change', () => {
        visibleCount = 12;
        filterAndRenderOffers();
    });
    document.getElementById('sort-filter').addEventListener('change', () => {
        visibleCount = 12;
        filterAndRenderOffers();
    });
    document.getElementById('search-input').addEventListener('input', () => {
        visibleCount = 12;
        filterAndRenderOffers();
    });
    document.getElementById('clear-search').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        visibleCount = 12;
        filterAndRenderOffers();
    });
    document.getElementById('load-more-btn').addEventListener('click', loadMoreOffers);
});
// ========== MOBILE RESPONSIVE ENHANCEMENTS FOR FLIPKART STORE PAGE ==========

// Fix viewport for mobile browsers
function setMobileViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', setMobileViewport);
window.addEventListener('resize', setMobileViewport);

// Lazy load images for better mobile performance
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Add touch feedback for buttons on mobile
const touchButtons = document.querySelectorAll('.tab-btn, .copy-btn, .shop-now-btn, .load-more-btn, .clear-btn');
touchButtons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

// Handle smooth scroll for tab clicks on mobile
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    });
});

// Log mobile view for debugging
function logMobileView() {
    if (window.innerWidth <= 768) {
        console.log('Mobile view active - Width: ' + window.innerWidth);
    }
}

window.addEventListener('resize', logMobileView);
logMobileView();

// Handle orientation change
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
        filterAndRenderOffers(); // Re-render offers for new orientation
    }, 100);
});

// Improve filter select for mobile
const filterSelects = document.querySelectorAll('.filter-select');
filterSelects.forEach(select => {
    select.addEventListener('change', function() {
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    });
});

// Add pull-to-refresh hint on mobile (optional)
let touchStartY = 0;
let isRefreshing = false;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0 && e.touches[0].clientY > touchStartY + 50 && !isRefreshing) {
        isRefreshing = true;
        location.reload();
    }
});
// ========== HAMBURGER MENU TOGGLE FUNCTION ==========
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('navbarToggler');
    const navLinks = document.getElementById('navLinks');
    
    if (toggler && navLinks) {
        // Toggle menu when clicking hamburger button
        toggler.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon: menu ↔ close
            const icon = toggler.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('bi-list');
                    icon.classList.add('bi-x-lg');
                } else {
                    icon.classList.remove('bi-x-lg');
                    icon.classList.add('bi-list');
                }
            }
        });
        
        // Close menu when clicking a link (better UX)
        const allLinks = navLinks.querySelectorAll('a');
        allLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = toggler.querySelector('i');
                if (icon) {
                    icon.classList.remove('bi-x-lg');
                    icon.classList.add('bi-list');
                }
            });
        });
    }
});