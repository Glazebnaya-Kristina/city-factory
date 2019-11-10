$(document).ready(function () {
    var playValue = $('.bannerSlider').attr('data-playSpeed');
    var bannerSlider = new Swiper('.bannerSlider', {
        loop: true,
        autoplay: {
            delay: playValue,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var noveltySlider = new Swiper('.noveltySlider', {
        slidesPerView: 4,
        spaceBetween: 12,
        direction: 'vertical',
        simulateTouch: false,
        allowTouchMove: false,
        breakpoints: {

            767: {
                slidesPerView: 3,
                spaceBetween: 12,
                direction: 'horizontal',
                simulateTouch: true,
                allowTouchMove: true,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                direction: 'horizontal',
                simulateTouch: true,
                allowTouchMove: true,
            },
            480: {
                slidesPerView: 1,
                direction: 'horizontal',
                simulateTouch: true,
                allowTouchMove: true,
            }
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });
});