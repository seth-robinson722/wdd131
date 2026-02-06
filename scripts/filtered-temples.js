// Footer: Display current year
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Footer: Display last modified date
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

if (hamburgerButton && navigation) {
    hamburgerButton.addEventListener('click', () => {
        // Toggle the 'show' class on both the button and navigation
        hamburgerButton.classList.toggle('show');
        navigation.classList.toggle('show');
    });
}