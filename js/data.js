
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
        "image": "images/upload.webm",
        "images": [
            "images/upload.webm"
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
        "title": "Moody Dark Preset Pack",
        "thumbnail": "https://via.placeholder.com/600x600?text=Moody+Preset",
        "image": "https://via.placeholder.com/600x600?text=Moody+Preset",
        "images": [],
        "shortDesc": "5 Premium Lightroom Mobile Presets for dark and moody vibes.",
        "longDesc": "Transform your photos with our curated Moody Dark preset pack. Includes 5 DNG files compatible with Lightroom Mobile.",
        "price": "₹199",
        "category": "Presets",
        "buyLink": "https://razorpay.me/@vkreates"
    },
    {
        "id": "reels-template-bundle",
        "title": "Viral Reels Template Bundle",
        "thumbnail": "https://via.placeholder.com/600x600?text=Reels+Templates",
        "image": "https://via.placeholder.com/600x600?text=Reels+Templates",
        "images": [],
        "shortDesc": "10 Trending Premiere Pro Templates for Instagram Reels.",
        "longDesc": "Save time and go viral with these easy-to-use templates. Drag and drop your footage and you are ready to go.",
        "price": "₹499",
        "category": "Templates",
        "buyLink": "https://razorpay.me/@vkreates"
    }
];

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks, digitalProducts };
}
