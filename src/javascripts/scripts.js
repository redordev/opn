// Load jQuery from NPM
import $ from 'jquery';
import slick from 'slick-carousel';

window.jQuery = $;
window.$ = $;

$( document ).ready(function() {

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").classList.add("header-sticky");
        } else {
            document.getElementById("header").classList.remove("header-sticky");
        }
    }

    // app slider
    $('.app-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false
    });

    // icons slider
    $('.icons-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true
    });    

    // app accordion
    $('.app-accordion .app-section').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $('.app-accordion .app-section').removeClass('active');
        } else {
            $('.app-accordion .app-section').removeClass('active');        
            $(this).addClass('active');
        }

    });
    
    // app tabs
    $('.home-tab-headings li').on('click', function(e) {        
        e.preventDefault();
        $('.home-tab-headings li').removeClass('active');
        $(this).addClass('active');
        $('.gray-section .tab').hide();
        var tab_to_show = '#' + $(this).data("tab");
        $(tab_to_show).fadeIn();
    });

    // sticky header
    window.onscroll = function() {scrollFunction()};

    // mobile menu
    $('.header-mobile-button svg').on('click', function(e) {
        $('.mobile-menu').fadeIn();
    });

    $('.mobile-menu .close-icon').on('click', function(e) {
        $('.mobile-menu').fadeOut();
    });
});

