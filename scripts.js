// Get button and images
const ctaButton = document.getElementById('ctaButton');
const featureImages = document.querySelectorAll('.feature-image');

// Function to store user preferences
function storePreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to get user preferences
function getPreference(key) {
    return localStorage.getItem(key);
}

// Function to trigger the animation when button is clicked
ctaButton.addEventListener('click', () => {
    // Trigger animation on button click
    ctaButton.classList.add('animate');

    // Store the preference that the animation was triggered
    storePreference('buttonClicked', 'true');

    // Remove the animation class after the animation ends
    setTimeout(() => {
        ctaButton.classList.remove('animate');
    }, 500);  // Match this with animation duration (500ms)
});

// Function to apply animations to images on hover
featureImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        // Apply animation to the image (zoom effect)
        image.style.transform = 'scale(1.1)';
        image.style.opacity = '0.8';
    });
    image.addEventListener('mouseleave', () => {
        // Reset animation when mouse leaves the image
        image.style.transform = 'scale(1)';
        image.style.opacity = '1';
    });
});

// Check the user's previous interaction
if (getPreference('buttonClicked') === 'true') {
    ctaButton.classList.add('animate');
}
