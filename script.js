// Theme toggle
const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleButton.textContent = isDarkMode ? "🌞" : "🌙";
});

// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');

function changeImage() {
  // Скрываем все изображения
  images.forEach(img => img.classList.remove('active'));

  // Увеличиваем индекс текущего изображения
  currentIndex = (currentIndex + 1) % images.length;

  // Отображаем следующее изображение
  images[currentIndex].classList.add('active');
}

// Показ первого изображения при загрузке
document.addEventListener('DOMContentLoaded', () => {
  images[currentIndex].classList.add('active');
  setInterval(changeImage, 3000); // Смена изображений каждые 3 секунды
});


// Initially show the first image
images[currentImageIndex].classList.add("active");
