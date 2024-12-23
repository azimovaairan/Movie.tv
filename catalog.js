// Инициализация карусели с дополнительными настройками
document.addEventListener('DOMContentLoaded', () => {
    const movieCarousel = document.querySelector('#movie-carousel');

    if (movieCarousel) {
        $(movieCarousel).owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<span class="owl-prev">❮</span>', '<span class="owl-next">❯</span>'],
            responsive: {
                0: { items: 1 },
                600: { items: 3 },
                1000: { items: 5 }
            }
        });
    }

    // Пример сообщения в консоли для проверки
    console.log("Карусель фильмов инициализирована.");
});


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