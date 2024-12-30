// Add product to favorites when the heart icon is clicked
function addToFavorites(event) {
    event.stopPropagation(); // Prevent the click from propagating to the product image link
    const heartIcon = event.target;

    // Toggle the heart icon's filled state
    heartIcon.innerText = heartIcon.innerText === "favorite_border" ? "favorite" : "favorite_border";
}

// Rotate product images on hover (for rotation effect)
document.querySelectorAll('.product-item').forEach((item) => {
    const images = item.getAttribute('data-images') ? item.getAttribute('data-images').split(',') : [];
    let currentImageIndex = 0;
    const productImage = item.querySelector('.product-image');
    let rotationInterval;

    // Function to change the image
    function rotateImage() {
        if (images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            productImage.src = images[currentImageIndex];
        }
    }

    // Rotate the image every 3 seconds when hovered
    item.addEventListener('mouseenter', () => {
        if (images.length > 1) {
            rotationInterval = setInterval(rotateImage, 3000);
        }
    });

    // Stop rotating when mouse leaves
    item.addEventListener('mouseleave', () => {
        clearInterval(rotationInterval);
    });
});

// Attach click event listener to all heart icons
document.querySelectorAll('.heart-icon').forEach((icon) => {
    icon.addEventListener('click', addToFavorites);
});
