// Effet de parallaxe sur la section principale
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('#accueil');
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Animation des sections lors du défilement
const sections = document.querySelectorAll('section');

function revealSections() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);



