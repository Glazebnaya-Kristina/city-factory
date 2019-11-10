$(document).ready(function(){
    //mobile menu
    $('.toggle-menu').on('click touch', function () {
        $('.mobileWrap').toggleClass('show');
    });
    $('.mobileClose').on('click touch', function () {
        $('.mobileWrap').removeClass('show');
    });
    $(document).mouseup(function(e){
        var menu = $('.mobileWrap.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
        }

        var fixedEl = $('#headerSearch.show');
        if (!fixedEl.is(e.target) && fixedEl.has(e.target).length === 0) {
            fixedEl.removeClass('show');
            $('.showSearch').show();
            $('.header__search').removeClass('active');
            $('.header .bottomLinks .signIn').removeClass('fixed');
        }

    });
    //end mobile menu

    //show/hide search
    function searchShow(){
        if ($(window).width() > 768) {
            $('.showSearch').on('click', function(){
                $(this).hide();
                $('.header__search').toggleClass('active');
                $(this).parent().find('.form-input').toggleClass('show');
                $('.header .bottomLinks .signIn').toggleClass('fixed');
            });
        }
       else {
        $('.open-popupSearch').on("click",function(){
            $('.overlay-popupSearch').addClass('active');
    
            if($(window).width() < 768) {   
                $.lockBody();
            }else{
                $('body').css('overflow', 'hidden');
            }
        });
        $('.overlay-popupSearch .close-popup, .overlay-popupSearch .close').on("click",function(){
            $('.overlay-popupSearch').removeClass('active');
            if($(window).width() < 768) {   
                $.unlockBody();
            }else{
                $('body').css('overflow', 'inherit');
            }
        });
       }
    }
    searchShow();

    //show/hide catalog
    function catalogPopup(){
        if ($(window).width() < 769) {
            $('.open-catalogPopup').on("click",function(){
                $('.overlay-catalogPopup').addClass('active'); 
                $.lockBody();
            });
            $('.overlay-catalogPopup .close-popup, .overlay-catalogPopup .close').on("click",function(){
                $('.overlay-catalogPopup').removeClass('active'); 
                $.unlockBody();
            });
        }else{
            $('.open-catalogPopup').on("click",function(){
                $.unlockBody();
            });
        }
    }
    catalogPopup();

    $(window).resize(function() {
        searchShow();
        catalogPopup();
        console.log('resize');
    });

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    $('.add-basket').on('click', function () {
        $(".modall-basket").addClass('active');
        $('body').addClass('showing-modal');
    });

    $('.registration').on('click', function () {
        $(".modall-registration").addClass('active');
        $('body').addClass('showing-modal');
    });

    $('.close').on('click', function () {
        $(".modall-basket").removeClass('active');
        $(".modall-registration").removeClass('active');
        $('body').removeClass('showing-modal');
    });
    $(".modall-basket").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-basket").on('click', function () {
        $(".modall-basket").find('.modall-body').click(function (event) {
            event.stopPropagation();
        });
        $(".modall-basket").removeClass('active');
        $('body').removeClass('showing-modal');

    });

    $(".modall-registration").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-registration").on('click', function () {
        $(".modall-registration").find('.modall-body').click(function (event) {
            event.stopPropagation();
        });
        $(".modall-registration").removeClass('active');
        $('body').removeClass('showing-modal');

    });

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});


