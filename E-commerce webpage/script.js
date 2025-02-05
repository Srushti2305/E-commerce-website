// Function to change the main product image
function changeImage(mainImageId, imageSrc) {
    // Get the main image element by its ID
    const mainImage = document.getElementById(mainImageId);
    
    // Change the source of the main image to the clicked thumbnail's image source
    mainImage.src = imageSrc;
}
