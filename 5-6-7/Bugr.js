$(document).ready(function() {
    // Обработчик события для бургер-меню
    $("#burger").on("click", function() {
        $("#navMenu").slideToggle(300);
    });
});
