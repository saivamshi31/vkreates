
const demoWorks = [
    {
        "id": "birthday-wish-post",
        "title": "Birthday Wish Post",
        "thumbnail": "images/birthdaypost01.jpg",
        "image": "images/birthdaypost01.jpg",
        "images": [
            "images/birthdaypost01.jpg",
            "images/birthdaypost01b.jpg"
        ],
        "shortDesc": "Beautifully designed birthday wish for social media.",
        "longDesc": "make your loved ones feel special with a custom designed birthday wish post. Perfect for Instagram, Facebook, and WhatsApp status. Includes photo retouching and custom text.",
        "price": "₹99",
        "category": "Graphic Design",
        "previewLink": "https://instagram.com/vkreates"
    },
    {
        "id": "business-poster",
        "title": "Top 10 Creator Graphic elements",
        "thumbnail": "images/upload.webm",
        "image": "images/ge1.webm",
        "images": [
            "images/ge1.webm",
            "images/g2.webm",
            "images/ge3.webm"
        ],
        "shortDesc": "Top 10 Creator Graphic elements which are helpful to Creators",
        "longDesc": "High-quality graphic elements for your videos. Great for social media videos.",
        "price": "₹79",
        "category": "Graphic Design",
        "previewLink": "https://instagram.com/vkreates"
    },
    {
        "id": "photo-retouching",
        "title": "Instagram lowerthird",
        "thumbnail": "images/graphic01.jpg",
        "image": "",
        "images": [],
        "shortDesc": "Perfect Lowerthird for your instagram page.",
        "longDesc": "Professional Lowerthids for your instagram profiles.",
        "price": "₹49",
        "category": "Graphic Design",
        "previewLink": "https://drive.google.com/"
    }
];

const digitalProducts = [
    {
        "id": "lr-preset-moody",
        "title": "200+ Excel Templates",
        "thumbnail": "images/dg01.png",
        "image": "images/dg01.png",
        "images": [
            "images/dg01.png"
        ],
        "shortDesc": "",
        "longDesc": "Boost your productivity and stay organized with this 200+ Excel Templates Mega Bundle, designed for business owners, freelancers, students, accountants, startups, and personal use.\nThis powerful collection helps you save time, track everything, and make smarter decisions—without complex software.",
        "price": "₹199",
        "category": "Presets",
        "buyLink": "https://razorpay.me/@saimeenugu",
        "previewLink": ""
    }
];

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks, digitalProducts };
}
