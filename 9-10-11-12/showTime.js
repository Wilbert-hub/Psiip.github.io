// 1. Скрипт для отображения текущего времени
function showTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    alert(`Текущее время: ${hours}:${minutes}:${seconds}`);
}
