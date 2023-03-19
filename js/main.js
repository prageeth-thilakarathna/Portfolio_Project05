/*--------------------------------------------------
    Sticky nav. bar
---------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop > 45) {
            $("body").addClass("sticky-header-up");
        } else {
            $("body").removeClass("sticky-header-up")
        } if (winTop < 45) {
            $("body").addClass("sticky-header-down");
        } else {
            $("body").removeClass("sticky-header-down");
        }
    });
});


/*--------------------------------------------------
    Spinner
---------------------------------------------------*/
window.onload = function () {
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
};


/*-------------------------------------------------
    Facts counter
-------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.counter_up').counterUp({
        delay: 10,
        time: 2000
    });
});


/*--------------------------------------------------
    Initiate the wow.js
--------------------------------------------------*/
new WOW().init();


/*-------------------------------------------------
    Testimonial carousel
---------------------------------------------------*/
var owl = $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }

});


/*--------------------------------------------------
    Vendor carousel
---------------------------------------------------*/
var owl = $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 4
        },
        768: {
            items: 6
        },
        992: {
            items: 8
        }
    }
})


/*-----------------------------------------------------
    Dropdown on mouse hover
------------------------------------------------------*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover( 
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});


/*---------------------------------------------------------
    Back to top button
---------------------------------------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});