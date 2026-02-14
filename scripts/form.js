const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Using ID for value as requested
        option.textContent = product.name; // Using Name for display
        productSelect.appendChild(option);
    });

    /**
     * Display current year in footer
     */
        function displayCurrentYear() {
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                const currentYear = new Date().getFullYear();
                yearElement.textContent = currentYear;
            }
        }

        /**
         * Display last modified date in footer
         */
        function displayLastModified() {
            const modifiedElement = document.getElementById('lastModified');
            if (modifiedElement) {
                const lastModified = document.lastModified;
                modifiedElement.textContent = lastModified;
            }
        }

        /**
         * Initialize all page functions when DOM is loaded
         */
        function init() {
            displayCurrentYear();
            displayLastModified();
            displayWindChill();
        }

        // Run initialization when page loads
        init();
});