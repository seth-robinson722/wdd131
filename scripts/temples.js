/* --- Hamburger Button Styling --- */
#menu {
    display: block;
    font - size: 2rem;
    font - weight: 700;
    text - decoration: none;
    padding: .5rem .75rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

/* Create the hamburger symbol using the ::before pseudo-element */
#menu::before {
    content: "≡";
}

/* Change to 'X' when the 'show' class is added via JS */
#menu.show::before {
    content: "X";
}

/* --- Navigation Toggle Logic --- */
.navigation {
    display: none; /* Hide menu by default on mobile */
    flex - direction: column;
    list - style: none;
    background - color: var(--primary - color);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100 %;
}

/* Show menu when JS toggles the 'show' class */
.navigation.show {
    display: flex;
}

/* --- Desktop Adjustment (temples-large.css) --- */
@media screen and(min - width: 768px) {
    #menu {
        display: none; /* Hide hamburger on desktop */
    }
    .navigation {
        display: flex; /* Always show menu on desktop */
        position: static;
        flex - direction: row;
    }
}