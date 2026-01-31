// Static weather values (will be replaced with API data in future)
const temperature = 18; // in Celsius
const windSpeed = 8; // in km/h

/**
 * Calculate wind chill factor using metric formula
 * Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
 * Where T = temperature in Celsius, V = wind speed in km/h
 * 
 * @param {number} temp - Temperature in Celsius
 * @param {number} wind - Wind speed in km/h
 * @returns {number} - Wind chill factor in Celsius
 */
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

/**
 * Check if wind chill calculation is viable based on conditions
 * Metric conditions: Temperature <= 10°C AND Wind speed > 4.8 km/h
 * 
 * @param {number} temp - Temperature in Celsius
 * @param {number} wind - Wind speed in km/h
 * @returns {boolean} - True if conditions are met
 */
function isViableWindChill(temp, wind) {
    return temp <= 10 && wind > 4.8;
}

/**
 * Display wind chill value on the page
 */
function displayWindChill() {
    const windChillElement = document.getElementById('windChill');

    if (windChillElement) {
        if (isViableWindChill(temperature, windSpeed)) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill.toFixed(1)}°C`;
        } else {
            windChillElement.textContent = 'N/A';
        }
    }
}

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