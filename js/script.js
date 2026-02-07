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
    const renderServices = () => {
        const container = document.getElementById('services-container');
        if (!container || !window.siteData || !window.siteData.services) return;

        container.innerHTML = window.siteData.services.map(service => `
            <div class="card service-card">
                <div class="card-icon"><i class="${service.icon}"></i></div>
                <h3 class="card-title">${service.title}</h3>
                <p class="card-desc">${service.desc}</p>
                <a href="${service.link}" class="btn-text">Get this service <i class="fas fa-arrow-right"></i></a>
            </div>
        `).join('');
    };

    const renderProducts = () => {
        const container = document.getElementById('products-container');
        if (!container || !window.siteData || !window.siteData.products) return;

        container.innerHTML = window.siteData.products.map(product => `
            <div class="card product-card">
                <div class="product-img placeholder">${product.image === 'placeholder' ? 'Product Image' : `<img src="${product.image}" alt="${product.title}">`}</div>
                <div class="product-details">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${product.price}</p>
                    <a href="${product.cartLink}" class="btn btn-sm btn-primary">Buy Now</a>
                </div>
            </div>
        `).join('');
    };

    // Initial Render
    renderServices();
    renderProducts();

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
