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
    const renderServices = (category = 'all') => {
        const container = document.getElementById('editing-designing-container');
        if (!container || !window.siteData || !window.siteData.demoWorks) return;

        const works = window.siteData.demoWorks;
        const filteredWorks = category === 'all'
            ? works
            : works.filter(work => work.category === category);

        container.innerHTML = filteredWorks.map(work => `
            <div class="card product-card">
                <div class="product-img placeholder">
                    ${work.thumbnail && work.thumbnail !== 'placeholder' ? `<img src="${work.thumbnail}" alt="${work.title}">` : 'Service Image'}
                </div>
                <div class="product-details">
                    <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px;">${work.category || 'Creative'}</span>
                    <h3 class="product-title" style="margin-top: 0.5rem;">${work.title}</h3>
                    <p class="card-desc" style="margin-bottom: 0.5rem;">${work.shortDesc}</p>
                    <p class="product-price">${work.price}</p>
                    <a href="product-details.html?id=${work.id}" class="btn btn-sm btn-primary">Get Details</a>
                </div>
            </div>
        `).join('');

        // Re-run animations for new elements
        setTimeout(() => {
            const newElements = container.querySelectorAll('.card');
            newElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                observer.observe(el);
            });
        }, 50);
    };

    // Filter Buttons Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
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

    // Scroll Arrows Logic
    const scrollContainer = document.getElementById('editing-designing-container');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if (scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }

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
