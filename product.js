// Complete product database with correct affiliate links
const allProducts = [
    {
        id: 1,
        name: "Apple iPhone 15 Pro Max 5G",
        category: "mobile",
        price: 139900,
        oldPrice: 159900,
        discount: "12% off",
        rating: 4.8,
        reviews: 12450,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/apple-iphone-15-pro-max/p/itm?affid=dealpanda"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra 5G",
        category: "mobile",
        price: 114999,
        oldPrice: 134999,
        discount: "14% off",
        rating: 4.7,
        reviews: 8920,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/samsung-galaxy-s24-ultra/p/itm?affid=dealpanda"
    },
    {
        id: 3,
        name: "Realme 12 Pro+ 5G",
        category: "mobile",
        price: 29999,
        oldPrice: 35999,
        discount: "16% off",
        rating: 4.6,
        reviews: 3450,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/realme-12-pro-plus/p/itm?affid=dealpanda"
    },
    {
        id: 4,
        name: "HP Victus Gaming Laptop",
        category: "laptop",
        price: 67990,
        oldPrice: 84990,
        discount: "20% off",
        rating: 4.5,
        reviews: 2150,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/hp-victus-gaming/p/itm?affid=dealpanda"
    },
    {
        id: 5,
        name: "boAt Rockerz 550 Headphones",
        category: "audio",
        price: 1999,
        oldPrice: 3999,
        discount: "50% off",
        rating: 4.3,
        reviews: 28450,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/boat-rockerz-550/p/itm?affid=dealpanda"
    },
    {
        id: 6,
        name: "OnePlus Nord CE 3 Lite 5G",
        category: "mobile",
        price: 18999,
        oldPrice: 22999,
        discount: "17% off",
        rating: 4.4,
        reviews: 5670,
        image: "home-7.jpg",
        affiliateUrl: "https://www.flipkart.com/oneplus-nord-ce-3-lite/p/itm?affid=dealpanda"
    },
    {
        id: 7,
        name: "Sony WH-1000XM4 Headphones",
        category: "audio",
        price: 24990,
        oldPrice: 34990,
        discount: "28% off",
        rating: 4.9,
        reviews: 8930,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/sony-wh-1000xm4/p/itm?affid=dealpanda"
    },
    {
        id: 8,
        name: "Dell XPS 13 Laptop",
        category: "laptop",
        price: 89990,
        oldPrice: 119990,
        discount: "25% off",
        rating: 4.7,
        reviews: 1780,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
        affiliateUrl: "https://www.flipkart.com/dell-xps-13/p/itm?affid=dealpanda"
    }
];

let currentProducts = [...allProducts];

// Category display names
const categoryNames = {
    'mobile': '📱 Mobile',
    'laptop': '💻 Laptop',
    'audio': '🎧 Audio',
    'wearable': '⌚ Wearable',
    'tv': '📺 TV',
    'fashion': '👕 Fashion'
};

// Helper function to get star rating
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    let stars = '★'.repeat(fullStars);
    stars += '☆'.repeat(5 - fullStars);
    return stars;
}

// Create product card - FIXED: Card click goes to detail page
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // IMPORTANT: Card click goes to detail.html with product ID
    card.onclick = function(e) {
        // If clicking the affiliate button, don't redirect to detail
        if(e.target.classList && e.target.classList.contains('affiliate-link')) {
            return;
        }
        // Redirect to product detail page
        window.location.href = 'detail.html?id=' + product.id;
    };
    
    const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    
    card.innerHTML = `
        <div class="card-img">
            <span class="category-badge">${categoryNames[product.category] || product.category}</span>
            <span class="discount-badge">-${discountPercent}%</span>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="card-info">
            <h3>${product.name}</h3>
            <div class="rating">
                <span class="stars">${getStarRating(product.rating)}</span>
                <span class="reviews">(${product.reviews.toLocaleString()})</span>
            </div>
            <div class="price">₹${product.price.toLocaleString('en-IN')} 
                <span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="discount">🔥 ${product.discount}</div>
            <button class="affiliate-link" data-url="${product.affiliateUrl}">View Deal & Shop →</button>
        </div>
    `;
    
    const btn = card.querySelector('.affiliate-link');
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        window.open(btn.getAttribute('data-url'), '_blank');
    });
    
    return card;
}

// Filter and render products
function filterAndRenderProducts() {
    const category = document.getElementById('category-filter').value;
    const sort = document.getElementById('sort-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = [...allProducts];
    
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-');
        if (priceRange === '100000+') {
            filtered = filtered.filter(p => p.price >= 100000);
        } else {
            filtered = filtered.filter(p => p.price >= parseInt(min) && p.price <= parseInt(max));
        }
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    
    if (sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'discount') {
        filtered.sort((a, b) => {
            const discountA = ((a.oldPrice - a.price) / a.oldPrice);
            const discountB = ((b.oldPrice - b.price) / b.oldPrice);
            return discountB - discountA;
        });
    }
    
    currentProducts = filtered;
    updateResultsCount(filtered.length);
    renderProducts(filtered);
}

function renderProducts(products) {
    const container = document.getElementById('all-products-grid');
    const noResultsDiv = document.getElementById('no-results');
    const spinner = document.getElementById('loading-spinner');
    
    spinner.style.display = 'flex';
    if(container) container.style.opacity = '0.5';
    
    setTimeout(() => {
        if(container) container.innerHTML = '';
        
        if (products.length === 0) {
            if(noResultsDiv) noResultsDiv.style.display = 'block';
            if(container) container.style.display = 'none';
        } else {
            if(noResultsDiv) noResultsDiv.style.display = 'none';
            if(container) container.style.display = 'grid';
            
            products.forEach(product => {
                const card = createProductCard(product);
                if(container) container.appendChild(card);
            });
        }
        
        if(spinner) spinner.style.display = 'none';
        if(container) container.style.opacity = '1';
    }, 300);
}

function updateResultsCount(count) {
    const resultSpan = document.getElementById('result-count');
    if(resultSpan) resultSpan.innerHTML = `${count} product${count !== 1 ? 's' : ''}`;
}

function resetFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');
    
    if(categoryFilter) categoryFilter.value = 'all';
    if(sortFilter) sortFilter.value = 'default';
    if(priceFilter) priceFilter.value = 'all';
    if(searchInput) searchInput.value = '';
    filterAndRenderProducts();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    filterAndRenderProducts();
    
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    const resetBtn = document.getElementById('reset-filters');
    
    if(categoryFilter) categoryFilter.addEventListener('change', filterAndRenderProducts);
    if(sortFilter) sortFilter.addEventListener('change', filterAndRenderProducts);
    if(priceFilter) priceFilter.addEventListener('change', filterAndRenderProducts);
    if(searchInput) searchInput.addEventListener('input', filterAndRenderProducts);
    if(clearBtn) {
        clearBtn.addEventListener('click', function() {
            if(searchInput) searchInput.value = '';
            filterAndRenderProducts();
        });
    }
    if(resetBtn) resetBtn.addEventListener('click', resetFilters);
    
    document.querySelectorAll('[data-category]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            if(categoryFilter) categoryFilter.value = category;
            filterAndRenderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
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