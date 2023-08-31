document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    let currentIndex = 0;

    // Add a class to the currently focused link
    const focusLink = (index) => {
        links.forEach((link, i) => {
            if (i === index) {
                link.classList.add("focused");
                link.setAttribute("tabindex", "0");
                link.setAttribute("aria-current", "page"); // Indicate the current page
                link.focus();
            } else {
                link.classList.remove("focused");
                link.setAttribute("tabindex", "-1");
                link.removeAttribute("aria-current");
            }
        });
    };

    // Handle keyboard navigation
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowDown":
                currentIndex = (currentIndex + 1) % links.length;
                focusLink(currentIndex);
                break;
            case "ArrowUp":
                currentIndex = (currentIndex - 1 + links.length) % links.length;
                focusLink(currentIndex);
                break;
            case "Tab":
                if (event.shiftKey) {
                    currentIndex = (currentIndex - 1 + links.length) % links.length;
                } else {
                    currentIndex = (currentIndex + 1) % links.length;
                }
                focusLink(currentIndex);
                break;
            case "ArrowLeft":
            case "ArrowRight": // Arrow keys to navigate
                break;
        }
    });

    // Initially focus the first link
    focusLink(currentIndex);
});

// Scroll to top when button is clicked
document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Prevent scroll jump when skip links are focused
const skipLinks = document.querySelectorAll('.skip-link');

skipLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.tabIndex = -1;
            targetElement.focus();
        }
    });
});
