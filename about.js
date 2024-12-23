// Theme toggle
const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleButton.textContent = isDarkMode ? "🌞" : "🌙";
});

