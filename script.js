const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
searchBar.classList.toggle('active');
});