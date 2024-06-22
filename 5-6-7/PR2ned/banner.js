// Получаем ссылки на баннер и кнопку закрыть
const banner = document.getElementById('banner');
const closeBtn = document.getElementById('close-btn');

// Функция для показа баннера
function showBanner() {
    banner.style.display = 'block';
}

// Функция для закрытия баннера
function closeBanner() {
    banner.style.display = 'none';
}

// Показываем баннер сразу при загрузке страницы
showBanner();

// Устанавливаем таймер для показа баннера каждые 10 секунд
setInterval(showBanner, 10000);

// Назначаем обработчик события для кнопки закрыть
closeBtn.addEventListener('click', closeBanner);
