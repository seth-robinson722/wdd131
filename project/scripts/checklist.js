// 1. Objects and Arrays: Defining the data structure
const securityTasks = [
    { id: '2fa', task: 'Enable Hardware 2FA (Yubikey/Google Auth)', category: 'account' },
    { id: 'recovery', task: 'Setup Secure Account Recovery', category: 'account' },
    { id: 'seed', task: 'Store Seed Phrase Offline (Metal or Paper)', category: 'wallet' },
    { id: 'ledger', task: 'Connect to Hardware Wallet (Cold Storage)', category: 'wallet' },
    { id: 'bookmarks', task: 'Bookmark Official URLs to avoid Phishing', category: 'account' }
];

// 2. Function to Render the Checklist using Template Literals
function renderTasks() {
    const accountContainer = document.querySelector("#account-tasks");
    const walletContainer = document.querySelector("#wallet-tasks");

    // Filter array by category and map to HTML strings
    const accountHTML = securityTasks
        .filter(item => item.category === 'account')
        .map(item => createItemHTML(item)).join('');

    const walletHTML = securityTasks
        .filter(item => item.category === 'wallet')
        .map(item => createItemHTML(item)).join('');

    accountContainer.innerHTML = accountHTML;
    walletContainer.innerHTML = walletHTML;

    loadSavedProgress();
    calculateProgress();
}

// 3. Helper function for Template Literals
function createItemHTML(item) {
    return `
        <div class="item">
            <input type="checkbox" id="${item.id}" class="task-check">
            <label for="${item.id}">${item.task}</label>
        </div>
    `;
}

// 4. Function to handle localStorage and Events
function setupListeners() {
    const form = document.querySelector("#crypto-form");

    // Listening for and reacting to events
    form.addEventListener("change", (e) => {
        if (e.target.classList.contains("task-check")) {
            // Save state to localStorage
            localStorage.setItem(e.target.id, e.target.checked);
            calculateProgress();
        }
    });

    // Reset Button logic
    document.querySelector("#reset-button").addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

// 5. Progress Calculation logic
function calculateProgress() {
    const total = securityTasks.length;
    const checked = document.querySelectorAll(".task-check:checked").length;
    const percentage = Math.round((checked / total) * 100);

    // DOM interaction: modifying elements
    document.querySelector("#progress-text").textContent = `Progress: ${percentage}%`;
    document.querySelector("#progress-bar-fill").style.width = `${percentage}%`;
}

// 6. Load data from localStorage
function loadSavedProgress() {
    securityTasks.forEach(task => {
        const savedValue = localStorage.getItem(task.id);
        if (savedValue === "true") {
            document.getElementById(task.id).checked = true;
        }
    });
}

// Start the logic on load
document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
    setupListeners();
});