const body = document.body;
const content = document.getElementById("dynamic-content");

function toggleTheme() {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function setMood(mood) {
  const moods = {
    calm: ["#caffbf", "Calm mode activated 🌿"],
    focus: ["#a0c4ff", "Focus mode activated 🎯"],
    energy: ["#ffadad", "Energy mode activated ⚡"]
  };

  body.style.backgroundColor = moods[mood][0];
  content.textContent = moods[mood][1];

  localStorage.setItem("bg", moods[mood][0]);
  localStorage.setItem("text", moods[mood][1]);
}

function updateContent() {
  const input = document.getElementById("textInput").value;
  if (input.trim()) {
    content.textContent = input;
    localStorage.setItem("text", input);
  }
}

function resetPage() {
  localStorage.clear();
  location.reload();
}

function loadPage(page) {
  if (page === "home") {
    content.textContent = "This is the home page. Customize your experience below.";
  }
  if (page === "about") {
    content.textContent = "I am a web development intern learning modern UI design.";
  }
  if (page === "contact") {
    content.textContent = "Email: hassan@example.com | Phone: 0000-0000000";
  }
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }

  const bg = localStorage.getItem("bg");
  const text = localStorage.getItem("text");

  if (bg) body.style.backgroundColor = bg;
  if (text) content.textContent = text;
};
