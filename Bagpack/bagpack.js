// Add product to favorites when the heart icon is clicked
function addToFavorites(event) {
    event.stopPropagation();  // Prevent the click from propagating to the product image link
    const heartIcon = event.target;
    
    // Toggle the heart icon's filled state
    if (heartIcon.innerText === "favorite_border") {
        heartIcon.innerText = "favorite";  // Change to filled heart
    } else {
        heartIcon.innerText = "favorite_border";  // Change to empty heart
    }
}

// Rotate product images on hover (for rotation effect)
document.querySelectorAll('.product-item').forEach((item) => {
    const images = item.getAttribute('data-images').split(',');
    let currentImageIndex = 0;

    const productImage = item.querySelector('.product-image');

    // Function to change the image
    function rotateImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        productImage.src = images[currentImageIndex];
    }

    // Rotate the image every 3 seconds when hovered
    item.addEventListener('mouseenter', () => {
        setInterval(rotateImage, 3000);
    });

    // Stop rotating when mouse leaves
    item.addEventListener('mouseleave', () => {
        clearInterval();
    });
});
