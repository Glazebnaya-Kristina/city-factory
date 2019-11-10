$(document).ready(function () {
    //Отурытие/Закрытие категории фильтра при клике
    $('.drop-item_heading').on('click', function () {
        $(this).parent().toggleClass('active');
    });
    jcf.replaceAll();

    if ($(window).width() >= 768) {
        $('.scrollbar-inner').scrollbar();
    };
    $('.more').on('click', function () {
        $(this).parent('.checkbox').find('.checkbox-item').css('display', 'block');
    });

    $('.filter').on('click', function () {
        $('.aside').addClass('active');
        $('.list-sort').removeClass('active');
        $('.closeBtn').css('display', 'block');
    });

    if ($(window).width() <= 768) {
        $('.sort').on('click', function () {
            $('.closeBtn').css('display', 'block');
            $('.list-sort').toggleClass('active');
            $('.aside').removeClass('active');
            $('.list-sort a').on('click', function () {
                $('.list-sort a').find('.list-sort').removeClass('active');
            });
        });
    };

    $('.close').on('click', function () {
        $('.close').find('.list-sort').removeClass('active');
        $('.aside').removeClass('active');

    });
    $('.closeBtn').on('click', function () {
        $('.aside').removeClass('active');
        $('.list-sort').removeClass('active');
        $('.closeBtn').css('display', 'none');
    });

});