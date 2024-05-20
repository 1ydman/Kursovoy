document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        // Обрабатываем цикличное переключение слайдов
        if (index < 0) {
            currentIndex = totalSlides - 4; // Перемещаем к началу, если достигнут конец
        } else if (index >= totalSlides - 3) {
            currentIndex = 0; // Перемещаем к концу, если достигнут начало
        }

        const offset = -currentIndex * 25; // Смещение слайдов в процентах
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function prevSlide() {
        showSlide(--currentIndex);
    }

    function nextSlide() {
        showSlide(++currentIndex);
    }

    // Переключение слайдов по нажатию на кнопки
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Начальное отображение слайдов
    showSlide(currentIndex);
});
