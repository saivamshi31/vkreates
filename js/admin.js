// Admin Dashboard Logic
// Supports 'services' and 'digital' modes set via window.adminMode

// Global State
let currentData = []; // The array we are editing (demoWorks or digitalProducts)
let otherData = [];   // The OTHER array we are NOT editing (to preserve it)
let mode = '';        // 'services' or 'digital'
let editingId = null;

// DOM Elements
let tableBody, modal, modalTitle, form;

document.addEventListener('DOMContentLoaded', () => {
    try {
        // 1. Determine Mode
        mode = window.adminMode || 'services'; // Default to services
        console.log(`Admin Mode: ${mode}`);

        // 2. Initialize DOM
        tableBody = document.getElementById('product-list-body');
        modal = document.getElementById('productModal');
        modalTitle = document.getElementById('modalTitle');
        form = document.getElementById('productForm');

        // Update Page Title
        const pageTitle = document.querySelector('.admin-header h1');
        if (pageTitle) {
            pageTitle.textContent = mode === 'services' ? 'Manage Services' : 'Manage Digital Products';
        }

        // 3. Load Data
        if (!window.siteData) {
            throw new Error('window.siteData not found. Ensure data.js is loaded.');
        }

        const allServices = window.siteData.demoWorks || [];
        const allDigital = window.siteData.digitalProducts || [];

        if (mode === 'services') {
            currentData = allServices;
            otherData = allDigital;
        } else {
            currentData = allDigital;
            otherData = allServices;
        }

        // 4. Render
        renderTable();

        // 5. Setup Listeners
        if (form) form.addEventListener('submit', handleFormSubmit);

        // Close modal on outside click
        window.onclick = function (event) {
            if (event.target == modal) closeModal();
        };

    } catch (err) {
        console.error(err);
        alert('Admin Error: ' + err.message);
    }
});

function renderTable() {
    if (!tableBody) return;

    if (currentData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No products found.</td></tr>';
        return;
    }

    const isVideo = (url) => url && url.toLowerCase().match(/\.(mp4|webm|mov)$/i);

    tableBody.innerHTML = currentData.map(p => {
        const thumbUrl = p.thumbnail || 'https://via.placeholder.com/50';
        let mediaHtml;

        if (isVideo(thumbUrl)) {
            mediaHtml = `<video src="${thumbUrl}" muted loop onmouseover="this.play()" onmouseout="this.pause()" class="product-thumbnail" style="object-fit:cover; background:#000;"></video>`;
        } else {
            mediaHtml = `<img src="${thumbUrl}" class="product-thumbnail" alt="">`;
        }

        return `
        <tr>
            <td>${mediaHtml}</td>
            <td>${p.title}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td>
                <button class="btn-edit" onclick="editProduct('${p.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn-danger" onclick="deleteProduct('${p.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `}).join('');
}

function openModal(isEdit = false) {
    if (!modal) return;
    modal.style.display = 'block';

    if (!isEdit) {
        form.reset();
        editingId = null;
        modalTitle.textContent = mode === 'services' ? 'Add Service' : 'Add Digital Product';
    }
}

function closeModal() {
    if (modal) modal.style.display = 'none';
}

// Make globally available for HTML onclick
window.openModal = openModal;
window.closeModal = closeModal;

window.editProduct = function (id) {
    const product = currentData.find(p => p.id === id);
    if (!product) return;

    editingId = id;
    modalTitle.textContent = 'Edit Product';

    // Populate fields
    document.getElementById('productId').value = product.id;
    document.getElementById('title').value = product.title;
    document.getElementById('category').value = product.category;
    document.getElementById('price').value = product.price;
    document.getElementById('shortDesc').value = product.shortDesc;
    document.getElementById('longDesc').value = product.longDesc;
    document.getElementById('thumbnail').value = product.thumbnail;
    document.getElementById('image').value = product.image;
    document.getElementById('previewLink').value = product.previewLink || '';

    // Digital Specific
    if (mode === 'digital') {
        const buyLinkInput = document.getElementById('buyLink');
        if (buyLinkInput) buyLinkInput.value = product.buyLink || '';
    }

    if (product.images && product.images.length) {
        document.getElementById('additionalImages').value = product.images.join(', ');
    } else {
        document.getElementById('additionalImages').value = '';
    }

    openModal(true);
};

window.deleteProduct = function (id) {
    if (confirm('Are you sure you want to delete this product?')) {
        currentData = currentData.filter(p => p.id !== id);
        renderTable();
    }
};

function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const shortDesc = document.getElementById('shortDesc').value;
    const longDesc = document.getElementById('longDesc').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const image = document.getElementById('image').value;
    const previewLink = document.getElementById('previewLink').value;

    // Digital Specific
    let buyLink = '';
    if (mode === 'digital') {
        const buyLinkInput = document.getElementById('buyLink');
        buyLink = buyLinkInput ? buyLinkInput.value : '';
    }

    const additionalImagesStr = document.getElementById('additionalImages').value;
    const images = additionalImagesStr
        ? additionalImagesStr.split(',').map(url => url.trim()).filter(url => url.length > 0)
        : [];

    if (image && !images.includes(image)) images.unshift(image);

    const productData = {
        title, category, price, shortDesc, longDesc, thumbnail, image, images, previewLink
    };

    if (mode === 'digital') {
        productData.buyLink = buyLink || "https://razorpay.me/@vkreates"; // Default if missing
    }

    if (editingId) {
        const index = currentData.findIndex(p => p.id === editingId);
        if (index !== -1) {
            // Merge to preserve ID and any other fields
            currentData[index] = { ...currentData[index], ...productData };
        }
    } else {
        const newId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
        productData.id = newId;
        currentData.push(productData);
    }

    closeModal();
    renderTable();
}

window.downloadDataJS = function () {
    // Reconstruct data.js
    // We need to appropriately assign currentData and otherData to their vars

    let demoWorksFinal, digitalProductsFinal;

    if (mode === 'services') {
        demoWorksFinal = currentData;
        digitalProductsFinal = otherData;
    } else {
        demoWorksFinal = otherData;
        digitalProductsFinal = currentData;
    }

    const demoWorksJSON = JSON.stringify(demoWorksFinal, null, 4);
    const digitalProductsJSON = JSON.stringify(digitalProductsFinal, null, 4);

    const fileContent = `
const demoWorks = ${demoWorksJSON};

const digitalProducts = ${digitalProductsJSON};

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks, digitalProducts };
}
`;

    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('data.js downloaded! Please replace js/data.js.');
};
