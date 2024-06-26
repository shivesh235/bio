document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section by default

    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');
    const themeIcon = document.getElementById('theme-icon');

    const updateTheme = () => {
        const isDark = themeToggle.checked;
        document.body.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeLabel.textContent = isDark ? '' : '';
        themeIcon.src = isDark ? 'icons/dark-mode.png' : 'icons/light-mode.png';
    };

    themeToggle.addEventListener('change', updateTheme);

    // Load the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    }
    updateTheme();
});

function showSection(sectionId) {
    // Hide all sections with a fade-out effect
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the clicked section with a fade-in effect
    const activeSection = document.getElementById(sectionId);
    setTimeout(() => {
        activeSection.classList.add('active');
    }, 100); // Delay to allow opacity transition

    // Close the menu if in mobile view
    const navUl = document.querySelector('nav ul');
    navUl.classList.remove('show');
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}



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

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme switcher
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.src = isDark ? themeImages.dark : themeImages.light;
});
