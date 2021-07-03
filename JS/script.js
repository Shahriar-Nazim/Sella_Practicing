$(function ($) {

    
    
    
    // back to top
    var bTtop = $(".back_to_top");
    $(window).on('scroll', function () {
        var baktop = $(window).scrollTop();

        if (baktop > 200) {
            bTtop.fadeIn(1000);

        } else {
            bTtop.fadeOut(500);
        }

    });

    bTtop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)

    });



    //animation scroll js

    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

       // stciky menu
    var nav = $(".navbar");
    $(window).scroll(function () {

        var fixmenu = $(this).scrollTop();

        if (fixmenu > 185) {
            nav.addClass("menu_fix");
        } else {
            nav.removeClass("menu_fix");
        }

    });

    $('.slider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplaySpeed: 2000,
    });

});
