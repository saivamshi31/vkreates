
// Main Admin Logic
document.addEventListener('DOMContentLoaded', () => {
    // Check if data loaded
    if (!window.siteData || !window.siteData.demoWorks) {
        alert('Error: js/data.js not loaded correctly.');
        return;
    }

    renderTable();

    // Form Submit Handler
    document.getElementById('productForm').addEventListener('submit', handleFormSubmit);
});

// State
let products = window.siteData.demoWorks;
let editingId = null;

// DOM Elements
const tableBody = document.getElementById('product-list-body');
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const form = document.getElementById('productForm');

function renderTable() {
    tableBody.innerHTML = products.map(p => `
        <tr>
            <td><img src="${p.thumbnail || 'https://via.placeholder.com/50'}" class="product-thumbnail" alt=""></td>
            <td>${p.title}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td>
                <button class="btn-edit" onclick="editProduct('${p.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn-danger" onclick="deleteProduct('${p.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function openModal(isEdit = false) {
    modal.style.display = 'block';
    if (!isEdit) {
        // Clear form for add
        form.reset();
        editingId = null;
        modalTitle.textContent = 'Add Product';
    }
}

function closeModal() {
    modal.style.display = 'none';
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
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

    // Handle array of images
    if (product.images && product.images.length) {
        document.getElementById('additionalImages').value = product.images.join(', ');
    } else {
        document.getElementById('additionalImages').value = '';
    }

    openModal(true);
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== id);
        renderTable();
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Gather data
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const shortDesc = document.getElementById('shortDesc').value;
    const longDesc = document.getElementById('longDesc').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const image = document.getElementById('image').value;
    const previewLink = document.getElementById('previewLink').value;
    const additionalImagesStr = document.getElementById('additionalImages').value;

    const images = additionalImagesStr
        ? additionalImagesStr.split(',').map(url => url.trim()).filter(url => url.length > 0)
        : [];

    // Ensure main image is in images array if not present
    if (image && !images.includes(image)) {
        images.unshift(image);
    }

    if (editingId) {
        // Update existing
        const index = products.findIndex(p => p.id === editingId);
        if (index !== -1) {
            products[index] = {
                ...products[index],
                title, category, price, shortDesc, longDesc, thumbnail, image, images, previewLink
            };
        }
    } else {
        // Add new
        const newId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
        const newProduct = {
            id: newId,
            title, category, price, shortDesc, longDesc, thumbnail, image, images, previewLink
        };
        products.push(newProduct);
    }

    closeModal();
    renderTable();
}

/**
 * Generates the content for data.js and triggers download
 */
function downloadDataJS() {
    // Reconstruct the file content string
    // logic matches the structure of existing data.js

    const jsonContent = JSON.stringify(products, null, 4);

    // We assume data.js just has demoWorks. If there were testimonials, we'd need to fetch them too.
    // For now, siteData.demoWorks is what we are editing.

    const fileContent = `
const demoWorks = ${jsonContent};

// Verify if we are in the browser context to avoid errors in node environments during testing
if (typeof window !== 'undefined') {
    window.siteData = { demoWorks };
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

    alert('data.js file created! Please replace your existing js/data.js file with this new one.');
}

// Window click to close modal
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
