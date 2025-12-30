// TC Oberpöring - Main JavaScript

// Load header and footer dynamically (for potential future use)
// Currently not needed as we'll use template-based approach

// Update last modified date in footer
document.addEventListener('DOMContentLoaded', function() {
    updateLastModified();
    initExternalLinks();
    initLazyLoading();
});

// Update last modified date
function updateLastModified() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        lastModifiedElement.textContent = lastModified.toLocaleDateString('de-DE', options);
    }
}

// Add external link indicators
function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        // Don't add indicator if it's an internal link
        if (!link.href.includes(window.location.hostname) && 
            !link.href.includes('tc-oberpoering.de')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add visual indicator
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.innerHTML = ' ↗';
                icon.style.fontSize = '0.8em';
                link.appendChild(icon);
            }
        }
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Scroll to Top Button (optional enhancement)
function initScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    
    if (scrollButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
        
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Table Sorting (simple implementation)
function initTableSorting() {
    const tables = document.querySelectorAll('table.sortable');
    
    tables.forEach(table => {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            if (!header.classList.contains('no-sort')) {
                header.style.cursor = 'pointer';
                header.addEventListener('click', function() {
                    sortTable(table, index);
                });
            }
        });
    });
}

function sortTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const direction = table.dataset.sortDirection === 'asc' ? 'desc' : 'asc';
    
    rows.sort((a, b) => {
        const aValue = a.children[column].textContent.trim();
        const bValue = b.children[column].textContent.trim();
        
        // Try to parse as number
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return direction === 'asc' ? aNum - bNum : bNum - aNum;
        }
        
        // Compare as strings
        return direction === 'asc' 
            ? aValue.localeCompare(bValue) 
            : bValue.localeCompare(aValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
    table.dataset.sortDirection = direction;
}

// Cookie Consent (simple implementation)
function initCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Diese Website verwendet nur technisch notwendige Cookies.</p>
                <button onclick="acceptCookies()" class="btn">Verstanden</button>
            </div>
        `;
        document.body.appendChild(banner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
        banner.remove();
    }
}

// Make acceptCookies available globally
window.acceptCookies = acceptCookies;
