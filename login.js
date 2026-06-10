// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('bi-eye-slash-fill');
            icon.classList.toggle('bi-eye-fill');
        }
    });
}

// Handle login form submission
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Simple validation
        if (!email) {
            showNotification('Please enter your email address', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (!password) {
            showNotification('Please enter your password', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Simulate login (in real app, this would be an API call)
        showNotification('Login successful! Redirecting...', 'success');
        
        // Store login state in localStorage
        if (rememberMe) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
        } else {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', email);
        }
        
        // Redirect after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

// Social login buttons
const googleBtn = document.querySelector('.social-btn.google');
const facebookBtn = document.querySelector('.social-btn.facebook');
const appleBtn = document.querySelector('.social-btn.apple');

if (googleBtn) {
    googleBtn.addEventListener('click', () => {
        showNotification('Google login - Demo feature', 'info');
    });
}

if (facebookBtn) {
    facebookBtn.addEventListener('click', () => {
        showNotification('Facebook login - Demo feature', 'info');
    });
}

if (appleBtn) {
    appleBtn.addEventListener('click', () => {
        showNotification('Apple login - Demo feature', 'info');
    });
}

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '14px 24px';
    notification.style.borderRadius = '12px';
    notification.style.zIndex = '1000';
    notification.style.fontWeight = '500';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.animation = 'slideIn 0.3s ease';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '10px';
    
    if (type === 'success') {
        notification.style.backgroundColor = '#4caf50';
        notification.style.color = 'white';
        notification.innerHTML = '<i class="bi bi-check-circle-fill"></i> ' + message;
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = 'white';
        notification.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> ' + message;
    } else {
        notification.style.backgroundColor = '#2196f3';
        notification.style.color = 'white';
        notification.innerHTML = '<i class="bi bi-info-circle-fill"></i> ' + message;
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Check if user is already logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        console.log('User is already logged in');
    }
}

checkLoginStatus();
// ========== MOBILE RESPONSIVE ENHANCEMENTS FOR LOGIN PAGE ==========

// Fix viewport for mobile browsers
function setMobileViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', setMobileViewport);
window.addEventListener('resize', setMobileViewport);

// Add touch feedback for buttons on mobile
const touchButtons = document.querySelectorAll('.login-btn, .social-btn, .toggle-password');
touchButtons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
    btn.addEventListener('touchcancel', function() {
        this.style.transform = 'scale(1)';
    });
});

// Improve input field experience on mobile
const inputs = document.querySelectorAll('.input-group input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });
});

// Handle form submission loading state
const loginFormElement = document.getElementById('loginForm');
if (loginFormElement) {
    loginFormElement.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.login-btn');
        if (submitBtn && window.innerWidth <= 768) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Signing In...';
            submitBtn.classList.add('loading');
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('loading');
            }, 1500);
        }
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

// Better touch handling for social buttons
const socialBtns = document.querySelectorAll('.social-btn');
socialBtns.forEach(btn => {
    btn.addEventListener('touchstart', function(e) {
        // Prevent double tap zoom on buttons
        e.preventDefault();
        this.click();
    });
});

// Add keyboard avoidance for mobile
if ('visualViewport' in window) {
    window.visualViewport.addEventListener('resize', function() {
        if (window.visualViewport.height < window.innerHeight - 100) {
            // Keyboard is open
            document.querySelector('.login-container').style.paddingTop = '0.5rem';
            document.querySelector('.login-container').style.paddingBottom = '0.5rem';
        } else {
            // Keyboard is closed
            document.querySelector('.login-container').style.paddingTop = '2rem';
            document.querySelector('.login-container').style.paddingBottom = '2rem';
        }
    });
}

// Prevent body scroll when keyboard is open (iOS)
document.addEventListener('touchmove', function(e) {
    if (document.activeElement.tagName === 'INPUT' && window.innerWidth <= 768) {
        e.preventDefault();
    }
}, { passive: false });

// Add smooth scroll to top after login redirect
const storedRedirect = sessionStorage.getItem('redirectAfterLogin');
if (storedRedirect) {
    sessionStorage.removeItem('redirectAfterLogin');
    window.scrollTo(0, 0);
}
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