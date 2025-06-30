// Get the hamburger button and the nav menu
const hamburgerButton = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Add an event listener to toggle the 'active' class when the hamburger button is clicked
hamburgerButton.addEventListener('click', function () {
    // Toggle the 'active' class on the nav menu
    navMenu.classList.toggle('active');
});
