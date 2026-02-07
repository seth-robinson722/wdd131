// Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37-1011.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Münchenbuchsee, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg"
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Springs, Utah, United States",
        dedicated: "2023, August, 13",
        area: 97836,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/saratoga-springs-utah/400x250/saratoga-springs-temple-exterior-1.jpg"
    }
];

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    const templeGrid = document.querySelector(".temple-grid");
    const displayTitle = document.getElementById("display-title");

    // Display all temples initially
    createTempleCards(temples);

    // Navigation Filtering
    const navLinks = document.querySelectorAll(".navigation a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const filter = link.title;
            displayTitle.textContent = filter;

            let filteredTemples = temples;
            if (filter === "Old") {
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            } else if (filter === "New") {
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            } else if (filter === "Large") {
                filteredTemples = temples.filter(t => t.area > 90000);
            } else if (filter === "Small") {
                filteredTemples = temples.filter(t => t.area < 10000);
            }

            createTempleCards(filteredTemples);
        });
    });

    function createTempleCards(filteredList) {
        templeGrid.innerHTML = "";
        filteredList.forEach(temple => {
            const card = document.createElement("figure");
            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            `;
            templeGrid.appendChild(card);
        });
    }

    // Footer Updates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Hamburger Menu
    const menuBtn = document.getElementById('menu');
    const nav = document.querySelector('.navigation');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('show');
        nav.classList.toggle('show');
    });
});