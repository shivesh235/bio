const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const themeIcon = document.getElementById('theme-icon');
const themeImages = {
    light: 'icons/light-mode.png',
    dark: 'icons/dark-mode.png'
};

// Toggle nav menu visibility on hamburger click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});

// Hide nav menu on link click for smaller devices
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            navMenu.classList.add('hide');
        }
    });
});

// Show section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';
    setTimeout(() => {
        targetSection.classList.add('active');
    }, 100); // Delay to allow transition effect
}

// Show initial section
showSection('home');

// Theme switcher
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.src = isDark ? themeImages.dark : themeImages.light;
});
