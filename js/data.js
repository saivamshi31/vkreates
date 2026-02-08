
const demoWorks = [
    {
        "id": "birthday-wish-post",
        "title": "Birthday Wish Post",
        "thumbnail": "images/demo-birthday-thumb.jpg",
        "image": "images/demo-birthday-full.jpg",
        "shortDesc": "Beautifully designed birthday wish for social media.",
        "longDesc": "make your loved ones feel special with a custom designed birthday wish post. Perfect for Instagram, Facebook, and WhatsApp status. Includes photo retouching and custom text.",
        "price": "₹299",
        "category": "Graphic Design"
    },
    {
        "id": "anniversary-wish-post",
        "title": "Anniversary Wish Post",
        "thumbnail": "images/demo-anniversary-thumb.jpg",
        "image": "images/demo-anniversary-full.jpg",
        "shortDesc": "Celebrate your milestone with a stunning anniversary post.",
        "longDesc": "A romantic and elegant design to celebrate your anniversary. customized with your couple photos and a heartfelt message.",
        "price": "₹399",
        "category": "Graphic Design"
    },
    {
        "id": "wedding-invitation-video",
        "title": "Wedding Invitation Video",
        "thumbnail": "images/demo-wedding-thumb.jpg",
        "image": "images/demo-wedding-full.jpg",
        "shortDesc": "Animated wedding invitation to share on WhatsApp.",
        "longDesc": "A premium animated video invitation for your big day. Includes music, animations, and details of your wedding events.",
        "price": "₹999",
        "category": "Video Editing"
    },
    {
        "id": "business-poster",
        "title": "Business Promo Poster",
        "thumbnail": "images/demo-business-thumb.jpg",
        "image": "images/demo-business-full.jpg",
        "shortDesc": "Professional poster for your business promotion.",
        "longDesc": "High-quality poster design for your marketing campaigns. Great for social media ads and print.",
        "price": "₹499",
        "category": "Graphic Design"
    },
    {
        "id": "photo-retouching",
        "title": "Professional Photo Retouching",
        "thumbnail": "images/demo-retouch-thumb.jpg",
        "image": "images/demo-retouch-full.jpg",
        "shortDesc": "High-end skin retouching and color correction.",
        "longDesc": "Professional photo retouching services including skin smoothing, blemish removal, color grading, and lighting enhancements. Perfect for portraits and fashion shoots.",
        "price": "₹199",
        "category": "Image Editing"
    },
    {
        "id": "background-removal",
        "title": "Background Removal",
        "thumbnail": "images/demo-bg-remove-thumb.jpg",
        "image": "images/demo-bg-remove-full.jpg",
        "shortDesc": "Clean and precise background removal for products.",
        "longDesc": "Expert background removal service. We deliver transparent backgrounds or replace them with a setting of your choice. Ideal for e-commerce products.",
        "price": "₹99",
        "category": "Image Editing"
    },
    {
        "id": "reels-editing",
        "title": "Instagram Reels Editing",
        "thumbnail": "images/demo-reels-thumb.jpg",
        "image": "images/demo-reels-full.jpg",
        "shortDesc": "Fast-paced, engaging editing for Instagram Reels.",
        "longDesc": "Boost your engagement with professionally edited Reels. We add captions, transitions, effects, and trending music to make your content go viral.",
        "price": "₹499",
        "category": "Video Editing"
    }
];

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks };
}
