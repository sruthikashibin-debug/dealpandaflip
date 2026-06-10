function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    return isNaN(id) ? null : id;
}

const productDatabase = {
    1: {
        id: 1, name: "Apple iPhone 15 Pro Max", brand: "Apple", price: 139900, oldPrice: 159900,
        discountPercent: 12, rating: 4.8, reviews: 12450,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
        description: "The iPhone 15 Pro Max features a stunning titanium design, A17 Pro chip for next-level gaming and productivity, and a powerful 48MP Main camera for incredible detail.",
        specs: { display: "6.7-inch Super Retina XDR display", processor: "A17 Pro chip with 6-core GPU", camera: "48MP Main + 12MP Ultra Wide", battery: "Up to 29 hours video playback" },
        highlights: ["Titanium design", "5G capable", "MagSafe charging", "Action button"],
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda"
    },
    2: {
        id: 2, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 114999, oldPrice: 134999,
        discountPercent: 14, rating: 4.7, reviews: 8920,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop",
        description: "The Galaxy S24 Ultra is Samsung's most powerful smartphone yet, featuring an integrated S Pen, 200MP camera system, and Galaxy AI for intelligent assistance.",
        specs: { display: "6.8-inch Dynamic AMOLED 2X", processor: "Snapdragon 8 Gen 3", camera: "200MP Main Camera", battery: "5000mAh Battery" },
        highlights: ["Galaxy AI features", "100x Space Zoom", "Built-in S Pen", "Titanium frame"],
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda"
    },
    3: {
        id: 3, name: "Realme 12 Pro+ 5G", brand: "Realme", price: 29999, oldPrice: 35999,
        discountPercent: 16, rating: 4.6, reviews: 3450,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=600&fit=crop",
        description: "Realme 12 Pro+ 5G comes with a 64MP periscope camera, 120Hz curved AMOLED display, and 67W charging for all-day power.",
        specs: { display: "6.7-inch Curved AMOLED", processor: "Snapdragon 7s Gen 2", camera: "64MP Periscope Camera", battery: "5000mAh Battery" },
        highlights: ["64MP Periscope camera", "120Hz Display", "67W Charging", "Premium design"],
        affiliateUrl: "https://www.flipkart.com/realme-12-pro-plus/p/itm?affid=dealpanda"
    },
    4: {
        id: 4, name: "HP Victus Gaming Laptop", brand: "HP", price: 67990, oldPrice: 84990,
        discountPercent: 20, rating: 4.5, reviews: 2150,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=600&fit=crop",
        description: "HP Victus gaming laptop with powerful performance, featuring 12th Gen Intel Core i5 processor and NVIDIA RTX 3050 graphics.",
        specs: { display: "15.6-inch FHD, 144Hz", processor: "Intel Core i5", graphics: "NVIDIA RTX 3050", ram: "16GB DDR4" },
        highlights: ["144Hz Display", "RTX 3050", "Backlit Keyboard", "B&O Audio"],
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda"
    },
    5: {
        id: 5, name: "boAt Rockerz 550 Headphones", brand: "boAt", price: 1999, oldPrice: 3999,
        discountPercent: 50, rating: 4.3, reviews: 28450,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
        description: "Premium wireless audio with 20 hours battery life and deep bass for an immersive sound experience.",
        specs: { connectivity: "Bluetooth v5.0", battery: "20 Hours", drivers: "40mm Dynamic Drivers" },
        highlights: ["20 Hours Battery", "Deep Bass", "Wireless", "Lightweight"],
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda"
    },
    6: {
        id: 6, name: "OnePlus Nord CE 3 Lite", brand: "OnePlus", price: 18999, oldPrice: 22999,
        discountPercent: 17, rating: 4.4, reviews: 5670,
        image: "home-7.jpg",
        description: "OnePlus Nord CE 3 Lite with 108MP camera, 67W fast charging, and smooth 120Hz display.",
        specs: { display: "6.72-inch LCD, 120Hz", processor: "Snapdragon 695", camera: "108MP Main Camera", battery: "5000mAh Battery" },
        highlights: ["108MP Camera", "67W Charging", "120Hz Display", "5G Ready"],
        affiliateUrl: "https://www.flipkart.com/oneplus-nord-ce-3-lite/p/itm?affid=dealpanda"
    }
};

const allProductsForRelated = [
    { id: 1, name: "Apple iPhone 15 Pro Max", price: 139900, oldPrice: 159900, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop", category: "mobile" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 114999, oldPrice: 134999, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop", category: "mobile" },
    { id: 3, name: "Realme 12 Pro+ 5G", price: 29999, oldPrice: 35999, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop", category: "mobile" },
    { id: 4, name: "HP Victus Gaming Laptop", price: 67990, oldPrice: 84990, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop", category: "laptop" },
    { id: 5, name: "boAt Rockerz 550", price: 1999, oldPrice: 3999, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop", category: "audio" }
];

function renderProductDetail() {
    const productId = getProductId();
    const container = document.getElementById('detail-content');
    
    if (!productId || !productDatabase[productId]) {
        container.innerHTML = `<div class="error-container"><i class="bi bi-exclamation-triangle-fill" style="font-size: 4rem; color: #ff9800;"></i><h2>Product Not Found</h2><p>Sorry, the product you are looking for does not exist.</p><button class="back-link-btn" onclick="window.location.href='products.html'"><i class="bi bi-arrow-left"></i> Back to Products</button></div>`;
        return;
    }
    
    const p = productDatabase[productId];
    let specsHtml = '', highlightsHtml = '';
    
    for (const [key, value] of Object.entries(p.specs)) {
        specsHtml += `<div class="spec-item"><div class="spec-icon"><i class="bi bi-gear-fill"></i></div><div class="spec-text"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong><span>${value}</span></div></div>`;
    }
    
    p.highlights.forEach(h => { highlightsHtml += `<li><i class="bi bi-check-circle-fill" style="color: #2e7d32;"></i> ${h}</li>`; });
    
    container.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-images"><div class="main-image"><img src="${p.image}" alt="${p.name}"></div></div>
            <div class="detail-info">
                <h1 class="product-title">${p.name}</h1>
                <div class="product-brand"><i class="bi bi-building"></i> By ${p.brand}</div>
                <div class="rating-section"><div class="rating-badge"><i class="bi bi-star-fill"></i> ${p.rating}</div><div class="review-count"><i class="bi bi-people-fill"></i> ${p.reviews.toLocaleString()} ratings</div></div>
                <div class="price-section"><span class="current-price"><i class="bi bi-currency-rupee"></i> ${p.price.toLocaleString('en-IN')}</span><span class="old-price"><i class="bi bi-currency-rupee"></i> ${p.oldPrice.toLocaleString('en-IN')}</span><span class="discount-percent"><i class="bi bi-tag-fill"></i> ${p.discountPercent}% off</span><div class="tax-info"><i class="bi bi-check-circle"></i> Inclusive of all taxes • Free shipping</div></div>
                <div class="offer-section"><div class="offer-title"><i class="bi bi-gift-fill"></i> Available Offers</div><ul class="offer-list"><li><i class="bi bi-bank2"></i> Bank Offer: 10% instant discount on SBI, HDFC, ICICI cards</li><li><i class="bi bi-arrow-left-right"></i> Exchange Offer: Exchange old phone and get up to ₹15,000 off</li><li><i class="bi bi-credit-card"></i> No Cost EMI: Pay in easy installments with 0% interest</li></ul></div>
                <div class="specs-section"><div class="specs-title"><i class="bi bi-sliders2"></i> Key Specifications</div><div class="specs-grid">${specsHtml}</div></div>
                <div class="description-section"><div class="description-title"><i class="bi bi-file-text-fill"></i> Product Description</div><div class="description-text">${p.description}</div></div>
                <div class="description-section"><div class="description-title"><i class="bi bi-stars"></i> Key Highlights</div><ul class="offer-list">${highlightsHtml}</ul></div>
                <div class="action-buttons"><button class="buy-now-btn" id="buyNowBtn"><i class="bi bi-cart-fill"></i> Buy Now on Flipkart →</button><button class="wishlist-btn" id="wishlistBtn"><i class="bi bi-heart"></i> Add to Wishlist</button></div>
                <button class="back-link-btn" onclick="window.location.href='products.html'"><i class="bi bi-arrow-left"></i> Back to Products</button>
            </div>
        </div>
    `;
    
    document.getElementById('buyNowBtn')?.addEventListener('click', () => window.open(p.affiliateUrl, '_blank'));
    document.getElementById('wishlistBtn')?.addEventListener('click', () => alert('Product added to wishlist!'));
}

function renderRelatedProducts() {
    const currentId = getProductId();
    if (!currentId || !productDatabase[currentId]) return;
    const related = allProductsForRelated.filter(p => p.id !== currentId).slice(0, 4);
    const container = document.getElementById('related-products');
    if (!container) return;
    container.innerHTML = '';
    related.forEach(p => {
        const card = document.createElement('div');
        card.className = 'related-card';
        card.onclick = () => window.location.href = `detail.html?id=${p.id}`;
        card.innerHTML = `<div class="related-img"><img src="${p.image}" alt="${p.name}"></div><div class="related-info"><h4>${p.name.length > 30 ? p.name.substring(0,30)+'...' : p.name}</h4><div class="related-price"><i class="bi bi-currency-rupee"></i> ${p.price.toLocaleString('en-IN')}<span class="related-oldprice"><i class="bi bi-currency-rupee"></i> ${p.oldPrice.toLocaleString('en-IN')}</span></div></div>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => { renderProductDetail(); renderRelatedProducts(); });
// ========== MOBILE RESPONSIVE ENHANCEMENTS FOR DETAIL PAGE ==========

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
const buyNowBtn = document.getElementById('buyNowBtn');
const wishlistBtn = document.getElementById('wishlistBtn');

if (buyNowBtn) {
    buyNowBtn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.97)';
    });
    buyNowBtn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
}

if (wishlistBtn) {
    wishlistBtn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.97)';
    });
    wishlistBtn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
}

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
    }, 100);
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