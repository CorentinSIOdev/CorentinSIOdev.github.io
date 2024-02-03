/* -*-*- NAVIGATION BAR -*-*- */
document.addEventListener('DOMContentLoaded', () => {
    var hamburger = document.querySelector('.nav_hamburger');
    var navButtons = document.querySelector('.nav_buttons');
    
    // Action when user clicks hamburger
    hamburger.addEventListener('click', () => {
        if (navButtons.classList.contains('is-open')) {
            // Close animation
            navButtons.classList.add('close-animation');
            navButtons.classList.remove('open-animation');

            // Remove open classes after animation ends
            navButtons.addEventListener('animationend', () => {
                navButtons.classList.remove('is-open', 'close-animation');
            }, { once: true });
        } else {
            // Open animation
            navButtons.classList.add('is-open', 'open-animation');
        }
    });

    // Close navButtons when user scrolls or clicks outside of navButtons
    window.addEventListener('scroll', () => {
        hamburger.checked = false;

        if(navButtons.classList.contains('is-open')) {
            // Close animation
            navButtons.classList.add('close-animation');
            navButtons.classList.remove('open-animation');

            // Remove open classes after animation ends
            navButtons.addEventListener('animationend', () => {
                navButtons.classList.remove('is-open', 'close-animation');
            }, { once: true });
        }
    })

    // Close navButtons when user clicks outside of navButtons
    window.addEventListener('click', (e) => {
        if (e.target != hamburger && e.target != navButtons) {
            hamburger.checked = false;

            if(navButtons.classList.contains('is-open')) {
                // Close animation
                navButtons.classList.add('close-animation');
                navButtons.classList.remove('open-animation');

                // Remove open classes after animation ends
                navButtons.addEventListener('animationend', () => {
                    navButtons.classList.remove('is-open', 'close-animation');
                }, { once: true });
            }
        }
    });

    // Close navButtons when user resizes window
    window.addEventListener('resize', () => {
        hamburger.checked = false;

        if(navButtons.classList.contains('is-open')) {
            // Close animation
            navButtons.classList.add('close-animation');
            navButtons.classList.remove('open-animation');

            // Remove open classes after animation ends
            navButtons.addEventListener('animationend', () => {
                navButtons.classList.remove('is-open', 'close-animation');
            }, { once: true });
        }
    });
});
/* -*-*- END NAVIGATION BAR -*-*- */
