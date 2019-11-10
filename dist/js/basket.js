$(document).ready(function () {
    $('.close').on('click touch', function () {
        $(this).parent('.list_item').css('display', 'none');
    });
    var noveltySlider = new Swiper('.noveltySlider', {
        slidesPerView: 4,
        spaceBetween: 12,
        breakpoints: {
            1240: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });
});