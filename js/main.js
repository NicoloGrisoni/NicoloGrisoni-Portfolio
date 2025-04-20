//Adding all the actions that need to be executed after the document loads
document.addEventListener("DOMContentLoaded", function() {
    //Set the website theme according to the theme selected on the device
    setPreferredThemeOfDevice()

    //Configure the theme toggle button
    document.getElementById('theme-toggle').addEventListener("click", function() {
        document.documentElement.classList.toggle('dark')
        updateIcon()
    })

    //Set up the responsive sections menu, which allows the user to navigate through the sections on smaller screens
    responsiveSectionsMenu()

    //Function to add the typing animation in the terminal
    type()
})

/**
 * Sets the initial theme of the website (light or dark) according to the device's preferred color scheme.
 * Also updates the theme toggle icon accordingly.
 */
function setPreferredThemeOfDevice () {
    const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (systemPrefDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    updateIcon()
}

/**
 * Updates the icons displayed on the theme toggle button.
 * Shows the correct icon depending on the current theme.
 */
function updateIcon() {
    const html = document.documentElement;
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');

    if (html.classList.contains('dark')) {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

/**
 * Manages the responsive navigation menu:
 * - Toggles the dropdown menu when clicking the menu button.
 * - Automatically closes the menu when a navigation link is clicked.
 * - Closes the dropdown menu when resizing to a desktop-sized screen.
 */
function responsiveSectionsMenu() {
    const menuToggle  = document.getElementById("menu-toggle");
    const mobileMenu  = document.getElementById("mobile-menu");

    //Toggle the visibility of the menu with animation
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("scale-0");
        mobileMenu.classList.toggle("scale-100");
    });

    //Close the menu when a section link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("scale-0");
            mobileMenu.classList.remove("scale-100");
        });
    });

    //Automatically close the dropdown menu when switching to a wider screen (desktop)
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add("scale-0");
            mobileMenu.classList.remove("scale-100");
        }
    });
}

/**
 * Creates a typewriter effect inside the terminal-like section,
 * typing the welcome message letter by letter with a delay.
 */
function type() {
    const text = "Hi! Welcome to my site";
    const target = document.getElementById('typed-text');
    let i = 0;

    function addLetter() {
        if (i < text.length) {
            target.textContent += text[i];
            i++;
            setTimeout(addLetter, 60);
        }
    }

    addLetter();
}