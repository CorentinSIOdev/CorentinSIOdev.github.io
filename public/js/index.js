/* -*-*- NAVIGATION BAR -*-*- */
document.addEventListener('DOMContentLoaded', () => {
    var hamburger = document.querySelector('.nav_hamburger');
    var navButtons = document.querySelector('.nav_buttons');
    
    // Toggle navButtons when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navButtons.classList.toggle('show');
    });

    // Close navButtons when user scrolls or clicks outside of navButtons
    window.addEventListener('scroll', () => {
        hamburger.checked = false;
        navButtons.classList.remove('show');
    })

    // Close navButtons when user clicks outside of navButtons
    window.addEventListener('click', (e) => {
        if (e.target != hamburger && e.target != navButtons) {
            hamburger.checked = false;
            navButtons.classList.remove('show');
        }
    });

    // Close navButtons when user resizes window
    window.addEventListener('resize', () => {
        hamburger.checked = false;
        navButtons.classList.remove('show');
    });
});
/* -*-*- END NAVIGATION BAR -*-*- */