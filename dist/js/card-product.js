$(document).ready(function () {
    jQuery('#responsiveTabs').responsiveTabs({
        startCollapsed: 'tabs',
    });
    var noveltySlider = new Swiper('.noveltySlider', {
        slidesPerView: 6,
        spaceBetween: 12,
        breakpoints: {
            1240: {
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
        pagination: {
            el: '.sw-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 3,
        slidesPerView: 3,
        freeMode: true,
        direction: 'vertical',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
                direction: 'horizontal',
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});