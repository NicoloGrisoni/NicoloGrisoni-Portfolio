document.addEventListener("DOMContentLoaded", function() {
    //Theme
    setPreferredThemeOfDevice()

    //Change theme button
    document.getElementById('theme-toggle').addEventListener("click", function() {
        document.documentElement.classList.toggle('dark')
        updateIcon()
    })

    //Menu sections responsive based on device
    responsiveMenuSections()

    //Typing on terminal
    type()
})

function setPreferredThemeOfDevice () {
    const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (systemPrefDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    updateIcon()
}

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

function responsiveMenuSections() {
    const menuToggle  = document.getElementById("menu-toggle");
    const mobileMenu  = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        // fa partire l'animazione scale
        mobileMenu.classList.toggle("scale-0");
        mobileMenu.classList.toggle("scale-100");
    });

    // chiudi al click sul link
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
        mobileMenu.classList.add("scale-0");
        mobileMenu.classList.remove("scale-100");
        });
    });

    //
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add("scale-0");
            mobileMenu.classList.remove("scale-100");
        }
    });
}

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