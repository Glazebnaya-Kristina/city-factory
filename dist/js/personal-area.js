$(document).ready(function () {
    function formPlaseholder() {
        if ($(window).width() > 767) {
            $('input[type=text]').attr('placeholder', 'Введите данные');
        }
    }
    formPlaseholder();
});