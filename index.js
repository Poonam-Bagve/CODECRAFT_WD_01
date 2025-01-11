// Add a class to the navbar when the user scrolls
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show or hide nav links
    menuToggle.innerHTML = menuToggle.classList.contains('active')
    ? '<i class="fas fa-times"></i>' // Close icon
    : '<i class="fas fa-bars"></i>'; // Hamburger menu icon
});

