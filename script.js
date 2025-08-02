
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




  // Open modal (example trigger)
  // document.getElementById('post-modal').style.display = 'block';

  // Close modal
  document.querySelector('.close-modal').onclick = () => {
    document.getElementById('post-modal').style.display = 'none';
  };

  // Close when clicking outside modal content
  window.onclick = (e) => {
    const modal = document.getElementById('post-modal');
    if (e.target === modal) modal.style.display = 'none';
  };

// rotating tips 
  const tips = [
    "Use semantic HTML elements like <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code>.",
    "Always include <code>alt</code> text in images for accessibility and SEO.",
    "Minimize CSS specificity for easier maintenance.",
    "Use Flexbox and Grid for creating responsive layouts.",
    "Keep styles in external stylesheets, not inline.",
    "Use <code>&lt;label&gt;</code> with form inputs for better UX.",
    "Test your site on multiple devices and screen sizes.",
    "Comment your code for better collaboration and maintenance."
  ];

  function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipElement = document.getElementById("daily-tip");
    tipElement.innerHTML = tips[randomIndex];
  }

  // Show tip on page load
  window.addEventListener("DOMContentLoaded", showRandomTip);

setInterval(showRandomTip, 10000); // 10,000 ms = 10 seconds


//fun fact
const facts = [
  "The first website is still online: info.cern.ch",
  "JavaScript was created in just 10 days.",
  "HTML5 introduced native audio and video support.",
  "CSS Grid lets you make 2D layouts easily.",
  "The first email was sent in 1971.",
  "Git was created by Linus Torvalds, the same guy who created Linux."
];

function showRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  document.getElementById("tech-fact").innerText = facts[index];
}
showRandomFact();
setInterval(showRandomFact, 15000); // Change every 15 sec (optional)

//tech poll
function submitPoll() {
  const options = document.getElementsByName("poll");
  let selected = "";
  for (let option of options) {
    if (option.checked) {
      selected = option.value;
      break;
    }
  }
  if (selected) {
    document.getElementById("poll-result").innerText = `You voted for: ${selected.toUpperCase()}!`;
  } else {
    document.getElementById("poll-result").innerText = "Please select an option.";
  }
}


