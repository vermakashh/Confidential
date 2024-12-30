// Navigate to product page
function navigateToProduct(url) {
    window.location.href = url;
}

// Add to favorites
function addToFavorites(event) {
    event.stopPropagation(); // Prevent triggering parent click
    alert("Added to favorites!");
}

// Rotate images on hover
const products = document.querySelectorAll('.product-item');

products.forEach(product => {
    const images = ['../Bags/product3.jpg', '../Bags/product5.jpg', '../Bags/product6.jpg'];
    let currentImageIndex = 0;
    let interval;

    product.addEventListener('mouseenter', () => {
        const img = product.querySelector('.product-image');
        interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            img.src = images[currentImageIndex];
        }, 1000);
    });

    product.addEventListener('mouseleave', () => {
        clearInterval(interval);
    });
});
