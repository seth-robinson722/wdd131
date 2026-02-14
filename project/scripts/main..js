// --- Global Function 1: Handle Footer Date ---
const updateFooterDate = () => {
    const modifiedElement = document.querySelector("#lastModified");
    if (modifiedElement) {
        // Using template literals for the output string
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
};

// --- Global Function 2: Active Navigation State ---
const highlightActiveNav = () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Conditional branching to check current page
        if (link.getAttribute("href") !== "" && currentPath.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
};

// Initialize global scripts
document.addEventListener("DOMContentLoaded", () => {
    updateFooterDate();
    highlightActiveNav();
});