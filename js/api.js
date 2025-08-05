
// filter button

const words = ["javascript", "frontend", "developer", "coding", "website", "keyboard"];
let currentWord = "";
let scrambled = "";
let timer;
let timeLeft = 30;

function scramble(word) {
  return word.split('').sort(() => 0.5 - Math.random()).join('');
}

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
}

function loadDailyWord() {
  const todayKey = getTodayKey();
  const stored = JSON.parse(localStorage.getItem("dailyWord"));
  
  if (stored && stored.date === todayKey) {
    currentWord = stored.word;
  } else {
    currentWord = words[Math.floor(Math.random() * words.length)];
    localStorage.setItem("dailyWord", JSON.stringify({ word: currentWord, date: todayKey }));
  }

  scrambled = scramble(currentWord);
  document.getElementById("scrambled-word").textContent = scrambled;
  document.getElementById("user-input").value = "";
  document.getElementById("result-msg").textContent = "";
  resetTimer();
}

function checkAnswer() {
  const userGuess = document.getElementById("user-input").value.toLowerCase();
  const result = document.getElementById("result-msg");

  if (userGuess === currentWord) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    clearInterval(timer);
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
  }
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("time-left").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("result-msg").textContent = `⏰ Time's up! The word was "${currentWord}"`;
      document.getElementById("result-msg").style.color = "orange";
    }
  }, 1000);
}

function nextWord() {
  clearInterval(timer);
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambled = scramble(currentWord);
  document.getElementById("scrambled-word").textContent = scrambled;
  document.getElementById("user-input").value = "";
  document.getElementById("result-msg").textContent = "";
  resetTimer();
}

window.onload = loadDailyWord;



// latest article render

  const posts = [
    {
      id: 1,
      title: "My First HTML Page",
      excerpt: "The excitement and challenges of creating my very first HTML page from scratch.",
      category: "html",
      date: "May 15, 2024",
      content: "content1.html"
    },
    {
      id: 2,
      title: "CSS Flexbox Magic",
      excerpt: "How learning Flexbox transformed my approach to layout design.",
      category: "css",
      date: "June 2, 2024",
      content: "content2.html"
    },
    {
      id: 3,
      title: "JavaScript Event Listeners",
      excerpt: "Understanding how to make web pages interactive with event listeners.",
      category: "js",
      date: "June 18, 2024",
      content: "content3.html"
    },
    {
      id: 4,
      title: "Building My First Project",
      excerpt: "The journey of planning, coding, and deploying my first complete web project.",
      category: "projects",
      date: "July 5, 2024",
      content: "content4.html"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use Grid and when to stick with Flexbox for layouts.",
      category: "css",
      date: "July 22, 2024",
      content: "content5.html"
    },
    {
      id: 6,
      title: "DOM Manipulation Basics",
      excerpt: "How JavaScript lets you interact with and modify web pages dynamically.",
      category: "js",
      date: "August 10, 2024",
      content: "content6.html"
    }
  ];

  let currentIndex = 0;
  const postsPerLoad = 3;
  const container = document.getElementById("posts-container");
  const loadMoreBtn = document.getElementById("load-more");

  function createPostCard(post) {
    const card = document.createElement("div");
    card.className = "post-card";

    card.innerHTML = `
      <a href="${post.content}" class="post-link" target="_blank">
        <div class="post-content">
          <span class="post-category">${post.category.toUpperCase()}</span>
          <h3 class="post-title">${post.title}</h3>
          <p class="post-excerpt">${post.excerpt}</p>
          <span class="post-date">${post.date}</span>
        </div>
      </a>
    `;
    return card;
  }

  function loadPosts() {
    const nextPosts = posts.slice(currentIndex, currentIndex + postsPerLoad);
    nextPosts.forEach(post => {
      container.appendChild(createPostCard(post));
    });
    currentIndex += postsPerLoad;
    if (currentIndex >= posts.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", loadPosts);

  // Load initial posts
  window.addEventListener("DOMContentLoaded", loadPosts);

