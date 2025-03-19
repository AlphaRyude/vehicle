document.addEventListener('DOMContentLoaded', function() {
    const backgroundImages = [
        '/static/images/bg-luxury.jpg',
        '/static/images/vehicles/rolls-royce-phantom.jpg',
        '/static/images/vehicles/bentley.jpg',
        '/static/images/vehicles/ferrari-sf90.jpg',
        '/static/images/vehicles/lamborghini-aventador.jpg'
    ];

    let currentImageIndex = 0;
    const aboutContainer = document.querySelector('.about-container');

    function updateBackground() {
        const nextImage = backgroundImages[(currentImageIndex + 1) % backgroundImages.length];
        const img = new Image();
        img.src = nextImage;

        img.onload = () => {
            aboutContainer.style.backgroundImage = `url(${nextImage})`;
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        };
    }

    // Set initial background
    aboutContainer.style.backgroundImage = `url(${backgroundImages[0]})`;
    aboutContainer.style.backgroundSize = 'cover';
    aboutContainer.style.backgroundPosition = 'center';
    aboutContainer.style.backgroundAttachment = 'fixed';
    aboutContainer.style.transition = 'background-image 1s ease-in-out';

    // Change background every 5 seconds
    setInterval(updateBackground, 5000);
}));