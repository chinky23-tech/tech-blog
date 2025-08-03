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


//latest articles
const posts = [
  { title: "Post One", excerpt: "This is the first post." },
  { title: "Post Two", excerpt: "This is the second post." },
  { title: "Post Three", excerpt: "Another cool blog post." },
  { title: "Post Four", excerpt: "This one's worth reading!" },
  { title: "Post Five", excerpt: "Learn something new today." },
  { title: "Post Six", excerpt: "Frontend tips you’ll love." },
  { title: "Post Seven", excerpt: "Build smarter websites." },
  { title: "Post Eight", excerpt: "Design meets logic here." },
  { title: "Post Nine", excerpt: "Power up your blog now." },
];

let currentIndex = 0;
const postsPerLoad = 3;
const container = document.getElementById("posts-container");
const loadMoreBtn = document.getElementById("load-more");

function createPostCard(post) {
  const card = document.createElement("div");
  card.className = "post-card";
  card.innerHTML = `<h3>${post.title}</h3><p>${post.excerpt}</p>`;
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
window.onload = loadPosts;
