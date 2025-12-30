// TC Oberpöring - Navigation System

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdownMenus();
    highlightActivePage();
    initSmoothScrolling();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate icon
            const icon = this.querySelector('i') || this;
            if (navMenu.classList.contains('active')) {
                icon.textContent = '✕';
            } else {
                icon.textContent = '☰';
            }
        });
    }
}

// Dropdown Menu Handling for Mobile
function initDropdownMenus() {
    const dropdownToggles = document.querySelectorAll('.nav-menu > li > a[aria-haspopup="true"]');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentLi = this.parentElement;
                parentLi.classList.toggle('active');
            }
        });
    });
}

// Highlight Active Page in Navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
            
            // Also highlight parent menu item if this is a submenu link
            const parentLi = link.closest('.nav-menu > li > ul');
            if (parentLi) {
                const parentLink = parentLi.previousElementSibling;
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 100; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu && navMenu.classList.contains('active')) {
        if (!nav.contains(e.target)) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i') || menuToggle;
                icon.textContent = '☰';
            }
        }
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            // Remove active class from dropdown parents
            const activeItems = document.querySelectorAll('.nav-menu > li.active');
            activeItems.forEach(item => {
                if (!item.querySelector('a.active')) {
                    item.classList.remove('active');
                }
            });
        }
    }, 250);
});
