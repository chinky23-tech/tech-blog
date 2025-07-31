
//hamburger mobile menu logic

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

//theme toggle logic

const toggleButtons = document.querySelectorAll('.theme-toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const icon = button.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});
