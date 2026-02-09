// V'Kreates Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu function
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('is-active'); // Add animation class if needed
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.card, .section-title, .hero-content > *, .portfolio-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add class for animation via JS
    // We inject a style block for the animation class to keep it self-contained if style.css isn't fully updated yet, 
    // or we can rely on inline styles transitioning to a class.
    // Let's use a class approach for the final state.
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Data Rendering System

    // Render Functions
    // Render Functions
    const renderServices = (category = 'all') => {
        // Check for Home Container (Featured)
        const homeContainer = document.getElementById('editing-designing-container');
        // Check for All Services Container
        const allServicesContainer = document.getElementById('all-services-container');
        // Check for Shop Container
        const shopContainer = document.getElementById('shop-container');

        if ((!homeContainer && !allServicesContainer && !shopContainer) || !window.siteData) return;

        const works = window.siteData.demoWorks;
        const products = window.siteData.digitalProducts || [];

        // Helper to check for video
        const isVideo = (url) => url && url.toLowerCase().match(/\.(mp4|webm|mov)$/i);

        // Card Template Generator
        const generateCard = (work, isDigital = false) => {
            let mediaHtml;

            // Check Thumbnail or Fallback Image
            const mediaUrl = work.thumbnail && work.thumbnail !== 'placeholder' ? work.thumbnail : null;

            if (mediaUrl && isVideo(mediaUrl)) {
                mediaHtml = `<video src="${mediaUrl}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>`;
            } else {
                mediaHtml = mediaUrl ? `<img src="${mediaUrl}" alt="${work.title}">` : 'Service Image';
            }

            return `
            <div class="card product-card">
                <div class="product-img placeholder">
                    ${mediaHtml}
                </div>
                <div class="product-details">
                    <h3 class="product-title" style="margin-top: 0.5rem;">${work.title}</h3>
                    <p class="card-desc" style="margin-bottom: 0.5rem;">${work.shortDesc}</p>
                    <p class="product-price">${work.price}</p>
                    ${isDigital
                    ? `<a href="product-details.html?id=${work.id}" class="btn btn-sm btn-primary">View Details</a>`
                    : `<a href="product-details.html?id=${work.id}" class="btn btn-sm btn-primary">Get Details</a>`
                }
                </div>
            </div>
            `;
        };

        // Render for Home (Featured - Limit 3 + Explore Card)
        if (homeContainer) {
            // Take first 3 items
            const featuredWorks = works.slice(0, 3);
            const productCards = featuredWorks.map(p => generateCard(p)).join('');

            // Explore More Card
            const exploreCard = `
                <a href="services.html" class="card explore-card">
                    <i class="fas fa-arrow-right"></i>
                    <span>Explore All Services</span>
                </a>
            `;

            homeContainer.innerHTML = productCards + exploreCard;
        }

        // Render for All Services Page (With Filtering)
        if (allServicesContainer) {
            const filteredWorks = category === 'all'
                ? works
                : works.filter(work => work.category === category);

            allServicesContainer.innerHTML = filteredWorks.map(p => generateCard(p)).join('');
            animateNewElements(allServicesContainer);
        }

        // Render for Shop Page
        if (shopContainer) {
            const filteredProducts = category === 'all'
                ? products
                : products.filter(p => p.category === category);

            shopContainer.innerHTML = filteredProducts.map(p => generateCard(p, true)).join('');
            animateNewElements(shopContainer);
        }
    };

    // Helper to animate new elements
    const animateNewElements = (container) => {
        const newElements = container.querySelectorAll('.card');
        newElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    };

    // Filter Buttons Logic (Only runs if filters exist)
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.backgroundColor = 'var(--surface-color)';
                    b.style.color = 'var(--text-primary)';
                });
                // Add active class to clicked
                btn.classList.add('active');
                btn.style.backgroundColor = 'var(--accent-color)';
                btn.style.color = '#fff';

                const filterValue = btn.getAttribute('data-filter');
                renderServices(filterValue);
            });
        });
    }

    // Scroll Arrows Logic Removed (No longer needed for grid)

    // Initial Render
    renderServices();

    // Re-run animations for new elements
    setTimeout(() => {
        const newElements = document.querySelectorAll('.card');
        newElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }, 100);

});
