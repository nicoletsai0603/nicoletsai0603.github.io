$(window).load(function() {
    $('.bacc').fadeOut(1000);
})

$(document).ready(function() {

    new WOW().init();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: true,

            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true
            },
            1200: {
                items: 6,
                nav: false
            }
        }
    });

    $(window).scroll(function() {
        var winWidth = $(window).width();
        topWindow = $(window).scrollTop();

        if (topWindow > 0 && winWidth > 1024) {
            $('nav').addClass("white animated fadeInDown");
            $('.share_white').addClass("share_black");
            $('.logo').addClass("exist");

        } else {
            $('nav').removeClass("white animated fadeInDown");
            $('.share_white').removeClass("share_black");
            $('.logo').removeClass("exist");
        }
        if (winWidth < 1024) {

            $('.share_white').addClass("share_black");
            $('.logo').addClass("exist");
        }
    });
});