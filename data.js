
const demoWorks = [
    {
        "id": "birthday-wish-post",
        "title": "Birthday Wish Post",
        "thumbnail": "birthdaypost01.webp",
        "image": "birthdaypost01.webp",
        "images": [
            "birthdaypost01.webp",
            "birthdaypost02.webp"
        ],
        "shortDesc": "",
        "longDesc": "make your loved ones feel special with a custom designed birthday wish post. Perfect for Instagram, Facebook, and WhatsApp status. Includes photo retouching and custom text.",
        "category": "Graphic Design",
        "previewLink": "https://www.instagram.com/vkreates.in",
        "price": ""
    },
    {
        "title": "Personalized Wedding Photo Frame Gift",
        "category": "Image Editing",
        "shortDesc": "",
        "longDesc": "A wedding is a once-in-a-lifetime memory ❤️\nGift them a customized wedding photo frame that captures their “Happy – Married – Life” journey in one timeless design.",
        "thumbnail": "marraige01.webp",
        "image": "marraige01.webp",
        "images": [
            "marraige01.webp"
        ],
        "previewLink": "https://drive.google.com/file/d/1tyKDO9XhfqgAz58aeOONS_ADo2OQYbbW/view?usp=drive_link",
        "id": "personalized-wedding-photo-frame-gift-1608",
        "price": ""
    },
    {
        "title": "Personalized Birthday Photo Collage Poster",
        "category": "Image Editing",
        "shortDesc": "",
        "longDesc": "Celebrate your best friend with a personalized birthday photo collage that captures your unforgettable memories together. A perfect surprise gift filled with moments, laughter, and friendship.",
        "thumbnail": "birthday01.webp",
        "image": "birthday01.webp",
        "images": [
            "birthday01.webp"
        ],
        "previewLink": "https://drive.google.com/file/d/1Snw4u0HjuPgP4IyPtGy1XomEEYn9nzMo/view?usp=drive_link",
        "id": "personalized-birthday-photo-collage-poster-5798"
    },
    {
        "title": "Custom Name Birthday Poster Design",
        "category": "Image Editing",
        "shortDesc": "",
        "longDesc": "Celebrate your special day with a stylish vertical birthday collage featuring your best portraits. Personalized with name and message, designed in a bold modern layout.",
        "thumbnail": "birthday02.webp",
        "image": "birthday02.webp",
        "images": [
            "birthday02.webp"
        ],
        "previewLink": "https://drive.google.com/file/d/1WOQNgVC6lSTlHZQ8BKeD_TELN2TD7YAI/view?usp=drive_link",
        "id": "custom-name-birthday-poster-design-1081"
    },
    {
        "title": "Custom Sketch Style Birthday Frame",
        "category": "Image Editing",
        "shortDesc": "",
        "longDesc": "Turn your friendship memories into a timeless pencil sketch birthday poster. A classy black & white design that adds emotion and elegance to your special wishes.",
        "thumbnail": "birthday03.webp",
        "image": "birthday03.webp",
        "images": [
            "birthday03.webp",
            "birthday03b.webp"
        ],
        "previewLink": "https://drive.google.com/file/d/1wiMzfmuPh3OIVInwKM7vQrJl-hZbIm-K/view?usp=drive_link",
        "id": "custom-sketch-style-birthday-frame-9188"
    }
];

const digitalProducts = [
    {
        "id": "lr-preset-moody",
        "title": "200+ Excel Templates",
        "thumbnail": "dg01.webp",
        "image": "dg01.webp",
        "images": [
            "dg01.webp"
        ],
        "shortDesc": "",
        "longDesc": "Boost your productivity and stay organized with this 200+ Excel Templates Mega Bundle, designed for business owners, freelancers, students, accountants, startups, and personal use.\nThis powerful collection helps you save time, track everything, and make smarter decisions—without complex software.",
        "price": "₹199",
        "category": "Presets",
        "buyLink": "https://razorpay.me/@saimeenugu",
        "previewLink": ""
    },
    {
        "title": "Top 10 most useful Chrome extensions",
        "category": "Other",
        "price": "₹29",
        "shortDesc": "",
        "longDesc": "Upgrade your workflow with our powerful extensions bundle.\n\nGet instant access to professionally designed templates, creative assets, and tools — all in one place.\n\nInstant Download\nEditable & Customizable\nHigh Resolution Files\nLifetime Access\nCommercial Use Friendly\nCreator-Friendly Design",
        "thumbnail": "dg02.webp",
        "image": "dg02.webp",
        "images": [
            "dg02.webp"
        ],
        "previewLink": "",
        "buyLink": "https://razorpay.me/@saimeenugu",
        "id": "top-10-most-useful-chrome-extensions-7542"
    }
];

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks, digitalProducts };
}
