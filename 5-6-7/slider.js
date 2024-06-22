// Функция для плавного скроллинга
function smoothScroll(targetPosition) {
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Получаем ссылки на кнопки
const scrollUpBtn = document.getElementById('scrollUpBtn');
const scrollDownBtn = document.getElementById('scrollDownBtn');

// Обработчик для кнопки "Наверх"
scrollUpBtn.addEventListener('click', () => {
    smoothScroll(0);
});

// Обработчик для кнопки "Вниз"
scrollDownBtn.addEventListener('click', () => {
    smoothScroll(document.body.scrollHeight);
});
