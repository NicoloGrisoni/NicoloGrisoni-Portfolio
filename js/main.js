document.addEventListener("DOMContentLoaded", function() {
    type()

    document.getElementById('theme-toggle').addEventListener("click", function() {
        document.documentElement.classList.toggle('dark')
        updateIcon()
    })
})

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


function updateIcon() {
    // Theme Toggle
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