
const products = [
    {
        "id": 1,
        "title": "Moody Lightroom Presets",
        "price": "₹499",
        "image": "images/product01.jpg",
        "cartLink": "buy.html"
    },
    {
        "id": 2,
        "title": "Cinematic LUTs Pack",
        "price": "₹799",
        "image": "images/product02.jpg",
        "cartLink": "buy.html"
    },
    {
        "id": 3,
        "title": "Social Media Templates",
        "price": "₹299",
        "image": "images/product03.jpg",
        "cartLink": "buy.html"
    },
    {
        "id": 1770310845570,
        "title": "Top 10 most useful chrome extensions",
        "price": "49",
        "image": "images/product04.jpg",
        "cartLink": "buy.html"
    }
];

const services = [
    {
        "id": 1,
        "title": "Image Editing",
        "icon": "fas fa-magic",
        "desc": "High-end retouching, manipulation, and color grading to make your photos pop.",
        "link": "https://wa.me/919440090529?text=I%20need%20Image%20Editing%20services"
    },
    {
        "id": 2,
        "title": "Video Editing",
        "icon": "fas fa-video",
        "desc": "Cinematic editing, reels, transitions, and sound design for captivating content.",
        "link": "https://wa.me/919440090529?text=I%20need%20Video%20Editing%20services"
    },
    {
        "id": 3,
        "title": "Custom Creative",
        "icon": "fas fa-paint-brush",
        "desc": "Thumbnails, posters, and custom graphics tailored to your brand identity.",
        "link": "https://wa.me/919440090529?text=I%20need%20Custom%20Creative%20services"
    }
];

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { products, services };
}
