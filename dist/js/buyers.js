$(document).ready(function () {
    $('.button').on('click touch', function () {
        if ($(window).width() < 480) {
            $('.list-item').css('display', 'block');
        } else {
            $('.list-item').css('display', 'flex');
        }
    });
});