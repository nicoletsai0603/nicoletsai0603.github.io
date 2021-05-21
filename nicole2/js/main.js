$(document).ready(function() {
	var gray453_touch_top = -1;
	var gray453_istouch = 0;
	var gray453_nevertouch = -1;
	var active = false;
	$(window).scroll(function(){
		if($(window).width() < 1024){
			active = true;
		}
		if(active && $(window).scrollTop() > $(".gray453").position().top && 
        gray453_touch_top != gray453_istouch){

			console.log("1."+$(this).scrollTop());
			// $(".logo.exist").css({background:"url(../img/logo.svg) left center no-repeat"});
            // $(".hamburger .line").addClass("black_line");
			gray453_istouch = gray453_touch_top;

		}else if(active && $(window).scrollTop() < $(".gray453").position().top && 
			gray453_istouch == gray453_nevertouch){

			console.log("2."+$(this).scrollTop());
			// $(".logo.exist").css({background:"url(../img/logo_w.svg) left center no-repeat"});
            // $(".hamburger .line").removeClass("black_line");
			gray453_istouch = 0;

		}
			  
	})
    $("#mobile_menu_labIcon,.portfolio-filter li a").click(function() {
        $("#greybg").toggle();
        $('.hamburger').toggleClass('is-active');
        $('.navbar .menu li').addClass("animated fadeInDown");
    })

    $("#greybg").click(function() {

        $("#greybg").toggle();
        $('.hamburger').removeClass('is-active');
        $(".js-navbar").removeClass("navbar--is-visible");
    })
    $(".js-menu-icon").on("click", function() {
        $(this).toggleClass("fa-times fa-bars");
        $(".menu .container").removeClass("container--is-visible");
        $(".menu li").removeClass("is-selected");
        $(".js-navbar").toggleClass("navbar--is-visible");
    });

    $(".menu li").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass("is-selected");

        var $currentContainer = $(this).find(".container");
        $currentContainer.toggleClass("container--is-visible");

        $(".menu .container").
        not($currentContainer).
        removeClass("container--is-visible");
        $(".menu li").not($this).removeClass("is-selected");
    });

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
    $(".hamburger").on("click", function() {

        $(".menu .container").removeClass("container--is-visible");
        $(".menu li").removeClass("is-selected");
        $(".js-navbar").toggleClass("navbar--is-visible");
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