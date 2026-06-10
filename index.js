// Product data for home page (trending products - 8 products)
const trendingProducts = [
    {
        id: 1,
        name: "Apple iPhone 15 Pro Max (256GB)",
        price: 139900,
        oldPrice: 159900,
        discount: "12% off",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra 5G",
        price: 114999,
        oldPrice: 134999,
        discount: "14% off",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda"
    },
    {
        id: 3,
        name: "Realme 12 Pro+ 5G (8GB RAM)",
        price: 29999,
        oldPrice: 35999,
        discount: "16% off",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/realme-12-pro-plus/p/itm?affid=dealpanda"
    },
    {
        id: 4,
        name: "HP Victus Gaming Laptop",
        price: 67990,
        oldPrice: 84990,
        discount: "20% off",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda"
    },
    {
        id: 5,
        name: "boAt Rockerz 550 Wireless Headphones",
        price: 1999,
        oldPrice: 3999,
        discount: "50% off",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda"
    },
    {
        id: 6,
        name: "OnePlus Nord CE 3 Lite 5G",
        price: 18999,
        oldPrice: 22999,
        discount: "17% off",
        image: "https://www.triveniworld.com/cdn/shop/files/oneplus-nord-ce-3-lite-5g-chromatic-gray-8gb-ram-256gb-storage-triveni-world-1.jpg?v=1736289686&width=823",
        affiliateUrl: "https://www.flipkart.com/oneplus-nord-ce-3-lite/p/itm?affid=dealpanda"
    },
    {
        id: 7,
        name: "Sony WH-1000XM4 Headphones",
        price: 24990,
        oldPrice: 34990,
        discount: "28% off",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/sony-wh-1000xm4/p/itm?affid=dealpanda"
    },
    {
        id: 8,
        name: "Dell XPS 13 Laptop",
        price: 89990,
        oldPrice: 119990,
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/dell-xps-13/p/itm?affid=dealpanda"
    }
];

// Bestseller products (another 8 products)
const bestsellerProducts = [
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 114999,
        oldPrice: 134999,
        discount: "14% off",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda"
    },
    {
        id: 5,
        name: "boAt Rockerz 550 Headphones",
        price: 1999,
        oldPrice: 3999,
        discount: "50% off",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda"
    },
    {
        id: 4,
        name: "HP Victus Gaming Laptop",
        price: 67990,
        oldPrice: 84990,
        discount: "20% off",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda"
    },
    {
        id: 6,
        name: "OnePlus Nord CE 3 Lite",
        price: 18999,
        oldPrice: 22999,
        discount: "17% off",
        image: "home-7.jpg",
        affiliateUrl: "https://www.flipkart.com/oneplus-nord-ce-3-lite/p/itm?affid=dealpanda"
    },
    {
        id: 1,
        name: "Apple iPhone 15 Pro Max",
        price: 139900,
        oldPrice: 159900,
        discount: "12% off",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda"
    },
    {
        id: 3,
        name: "Realme 12 Pro+ 5G",
        price: 29999,
        oldPrice: 35999,
        discount: "16% off",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/realme-12-pro-plus/p/itm?affid=dealpanda"
    }
];

// Render trending products
function renderHomeProducts() {
    const container = document.getElementById('home-product-grid');
    if(!container) return;
    container.innerHTML = '';
    
    trendingProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Render bestseller products
function renderBestsellerProducts() {
    const container = document.getElementById('bestseller-grid');
    if(!container) return;
    container.innerHTML = '';
    
    bestsellerProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Create product card helper
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => {
        window.location.href = `detail.html?id=${product.id}`;
    };
    
    card.innerHTML = `
        <div class="card-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="card-info">
            <h3>${product.name}</h3>
            <div class="price">₹${product.price.toLocaleString('en-IN')} 
                <span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="discount"> ${product.discount}</div>
            <button class="affiliate-link" data-url="${product.affiliateUrl}">View Deal & Shop →</button>
        </div>
    `;
    
    const btn = card.querySelector('.affiliate-link');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(btn.getAttribute('data-url'), '_blank');
    });
    
    return card;
}

// Countdown timer for flash sale
function startCountdown() {
    let hours = 24;
    let minutes = 0;
    let seconds = 0;
    
    const timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(timer);
                    document.getElementById('hours').innerHTML = '0';
                    document.getElementById('minutes').innerHTML = '0';
                    document.getElementById('seconds').innerHTML = '0';
                } else {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }, 1000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderHomeProducts();
    renderBestsellerProducts();
    startCountdown();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Category click functionality - redirect to products page with filter
document.addEventListener('DOMContentLoaded', function() {
    // Get all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Category mapping for filtering
    const categoryMapping = {
        'Mobiles': 'mobile',
        'Laptops': 'laptop',
        'Audio': 'audio',
        'Wearables': 'wearable',
        'TV & Appliances': 'tv',
        'Fashion': 'fashion'
    };
    
    // Add click event to each category card
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').innerText;
            const categoryValue = categoryMapping[categoryName];
            
            if (categoryValue) {
                // Store selected category in localStorage
                localStorage.setItem('selectedCategory', categoryValue);
                // Redirect to products page
                window.location.href = 'products.html';
            } else {
                // Default redirect to products page
                window.location.href = 'products.html';
            }
        });
        
        // Add hover effect for better UX
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
});

// Optional: Add animation when page loads
window.addEventListener('load', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
    });
});

// Add this keyframe animation to your CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========== TRENDING OFFERS DATA ==========
const trendingOffersData = [
    {
        id: 1,
        store: "Flipkart",
        title: "Apple iPhone 15 Pro Max",
        price: 139900,
        oldPrice: 159900,
        discount: "12%",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda"
    },
    {
        id: 2,
        store: "Flipkart",
        title: "Samsung Galaxy S24 Ultra",
        price: 114999,
        oldPrice: 134999,
        discount: "14%",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda"
    },
    {
        id: 3,
        store: "Flipkart",
        title: "boAt Rockerz 550",
        price: 1999,
        oldPrice: 3999,
        discount: "50%",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda"
    },
    {
        id: 4,
        store: "Flipkart",
        title: "HP Victus Gaming Laptop",
        price: 67990,
        oldPrice: 84990,
        discount: "20%",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda"
    }
];

// ========== COUPONS DATA ==========
const couponsData = [
    {
        id: 1,
        store: "Flipkart",
        
        discount: "40% OFF",
        title: "On All Electronics",
        couponCode: "FLIP40",
        validity: "Valid till June 30, 2025",
        affiliateUrl: "https://www.flipkart.com"
    },
    {
        id: 2,
        store: "Flipkart",
        
        discount: "₹2000 OFF",
        title: "On iPhone 15 Series",
        couponCode: "IPHONE2K",
        validity: "Valid till June 25, 2025",
        affiliateUrl: "https://www.flipkart.com"
    },
    {
        id: 3,
        store: "Flipkart",
        
        discount: "15% OFF",
        title: "On Laptops Above ₹50,000",
        couponCode: "LAP15",
        validity: "Valid till July 5, 2025",
        affiliateUrl: "https://www.flipkart.com"
    },
    {
        id: 4,
        store: "Flipkart",
        
        discount: "50% OFF",
        title: "On Audio Accessories",
        couponCode: "AUDIO50",
        validity: "Valid till June 28, 2025",
        affiliateUrl: "https://www.flipkart.com"
    },
    {
        id: 5,
        store: "Flipkart",
        
        discount: "FLAT ₹500 OFF",
        title: "On Fashion Above ₹1999",
        couponCode: "FASH500",
        validity: "Valid till July 10, 2025",
        affiliateUrl: "https://www.flipkart.com"
    },
    {
        id: 6,
        store: "Flipkart",
        
        discount: "25% OFF",
        title: "On Smartwatches",
        couponCode: "WATCH25",
        validity: "Valid till June 30, 2025",
        affiliateUrl: "https://www.flipkart.com"
    }
];

// Render Trending Offers
function renderTrendingOffers() {
    const container = document.getElementById('trending-offers-grid');
    if (!container) return;
    container.innerHTML = '';
    
    trendingOffersData.forEach(offer => {
        const card = document.createElement('div');
        card.className = 'trending-offer-card';
        card.onclick = () => {
            window.location.href = `detail.html?id=${offer.id}`;
        };
        
        card.innerHTML = `
            <div class="trending-badge">
                <i class="bi bi-fire"></i> Trending #${offer.id}
            </div>
            <div class="trending-offer-img">
                <img src="${offer.image}" alt="${offer.title}">
            </div>
            <div class="trending-offer-info">
                <span class="trending-offer-store"> ${offer.store}</span>
                <h3>${offer.title}</h3>
                <div class="trending-offer-price">
                    ₹${offer.price.toLocaleString('en-IN')}
                    <span class="old-price">₹${offer.oldPrice.toLocaleString('en-IN')}</span>
                    <span class="discount">${offer.discount} off</span>
                </div>
                <button class="affiliate-link" data-url="${offer.affiliateUrl}">View Deal →</button>
            </div>
        `;
        
        const btn = card.querySelector('.affiliate-link');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(btn.getAttribute('data-url'), '_blank');
        });
        
        container.appendChild(card);
    });
}

// Copy coupon code function
function copyCouponCode(code, button) {
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied! ✓';
        button.style.background = '#2e7d32';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#ff9800';
        }, 1500);
    });
}

// Render Coupons
function renderCoupons() {
    const container = document.getElementById('coupons-grid');
    if (!container) return;
    container.innerHTML = '';
    
    couponsData.forEach(coupon => {
        const card = document.createElement('div');
        card.className = 'coupon-card';
        
        card.innerHTML = `
            <div class="coupon-store">
                <div class="coupon-store-icon">${coupon.storeIcon}</div>
                <div class="coupon-store-name">${coupon.store}</div>
            </div>
            <div class="coupon-discount">${coupon.discount}</div>
            <div class="coupon-title">${coupon.title}</div>
            <div class="coupon-code-box">
                <span class="coupon-code-text">${coupon.couponCode}</span>
                <button class="copy-coupon-btn" data-code="${coupon.couponCode}">Copy</button>
            </div>
            <div class="coupon-validity"> ${coupon.validity}</div>
            <button class="shop-now-coupon" data-url="${coupon.affiliateUrl}">Get Coupon → Shop Now</button>
        `;
        
        const copyBtn = card.querySelector('.copy-coupon-btn');
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            copyCouponCode(copyBtn.getAttribute('data-code'), copyBtn);
        });
        
        const shopBtn = card.querySelector('.shop-now-coupon');
        shopBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(shopBtn.getAttribute('data-url'), '_blank');
        });
        
        card.addEventListener('click', () => {
            window.open(coupon.affiliateUrl, '_blank');
        });
        
        container.appendChild(card);
    });
}

// Call the new render functions
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingOffers();
    renderCoupons();
});
// ========== MOBILE RESPONSIVE ENHANCEMENTS ==========

// Fix viewport height for mobile browsers
function setMobileViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Call on load and resize
window.addEventListener('load', setMobileViewportHeight);
window.addEventListener('resize', setMobileViewportHeight);

// Improve touch scrolling on mobile
if ('ontouchstart' in window) {
    document.body.style.webkitOverflowScrolling = 'touch';
}

// Close mobile menu when clicking outside (if needed)
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (navbar && navLinks) {
        // Your mobile menu logic here if needed
    }
});

// Lazy load images for better mobile performance
const images = document.querySelectorAll('img');
if ('loading' in HTMLImageElement.prototype) {
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Add smooth scroll behavior for mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
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