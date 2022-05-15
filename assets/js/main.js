$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
//        animateOut: "slideOutDown",
//        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
//        autoplay: true,
        autoplayTimeout: 5000,
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
	
//    accr slider
    $(".accr-slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        active: true,
        margin: 30,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive : {
            0 : {
                items: 3,
            },
            768 : {
                items: 4,
            },
            992 : {
                items: 6,
            }
        }
    });
	
// course details slider
	//    clients slider
    $(".course-details-slider .cslides").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        active: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4500
    });
	
// Isotope gallery filter
	var $grid = $('.filter-grid').isotope({
		itemSelector: '.filter-grid .element-item',
		layoutMode: 'fitRows'
	});
	var filterFns = {
		numberGreaterThan50: function () {
			var number = $(this).find('.number').text();
			return parseInt(number, 10) > 50;
		},
		ium: function () {
			var name = $(this).find('.name').text();
			return name.match(/ium$/);
		}
	};
	$('.filters-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({
			filter: filterValue
		});
	});
	$('.button-group').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'button', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});
	
// gallery popup
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


});

