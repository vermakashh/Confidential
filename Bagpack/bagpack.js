// Add product to favorites when the heart icon is clicked
function addToFavorites(event) {
    event.stopPropagation(); // Prevent the click from propagating to the product image link
    const heartIcon = event.target;

    // Toggle the heart icon's filled state
    if (heartIcon.innerText === "favorite_border") {
        heartIcon.innerText = "favorite"; // Change to filled heart
    } else {
        heartIcon.innerText = "favorite_border"; // Change to empty heart
    }
}

// Switch product images on hover - Only for the hovered product
document.querySelectorAll('.product-item').forEach((item) => {
    const images = item.getAttribute('data-images') ? item.getAttribute('data-images').split(',') : [];
    let currentImageIndex = 0;
    const productImage = item.querySelector('.product-image'); // Specific product image for hover
    let imageSwitchInterval;

    // Start switching images when the mouse enters the image of this product
    productImage.addEventListener('mouseenter', () => {
        if (images.length > 1) {
            imageSwitchInterval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                productImage.src = images[currentImageIndex]; // Change only the hovered product's image
            }, 1000); // Switch every 1 second for the hovered product
        }
    });

    // Stop switching images when the mouse leaves the image of this product
    productImage.addEventListener('mouseleave', () => {
        clearInterval(imageSwitchInterval); // Stop the image switch when mouse leaves
        productImage.src = images[0]; // Reset to the first image when the mouse leaves
    });
});
