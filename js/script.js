// Toggle icon navigator
function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    var menuIcon = document.getElementById('menuIcon');
  
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';  // Show the navbar
      menuIcon.innerHTML = '✕';  // Change the menu icon to close symbol
    } else {
      navbar.style.display = 'none';  // Hide the navbar
      menuIcon.innerHTML = '☰';  // Change the menu icon back to hamburger menu
    }
}

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.style.display = 'none';  // Hide the navbar
}
var menuIcon = document.getElementById('menuIcon');
var navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', function() {
  navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
});

function toggleNavbar() {
  navbar.style.display = 'none';  // Hide the navbar
}