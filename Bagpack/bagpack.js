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

// Switch product images on hover
document.querySelectorAll('.product-item').forEach((item) => {
    const images = item.getAttribute('data-images') ? item.getAttribute('data-images').split(',') : [];
    let currentImageIndex = 0;
    const productImage = item.querySelector('.product-image');
    let imageSwitchInterval;

    // Function to switch the image
    function switchImage() {
        if (images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            productImage.src = images[currentImageIndex];
        }
    }

    // Start switching images when the mouse enters the specific product item
    item.addEventListener('mouseenter', function () {
        if (images.length > 1) {
            imageSwitchInterval = setInterval(switchImage, 1000); // Switch every 1 second
        }
    });

    // Stop switching images when the mouse leaves the specific product item
    item.addEventListener('mouseleave', function () {
        clearInterval(imageSwitchInterval);
    });
});
