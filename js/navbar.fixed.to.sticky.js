$(document).ready(function () {
    var menu = $('#navbar');
    var content = $('.content');
    var home = $('#home')
    var origOffsetY = menu.offset().top;

    function onScroll() {
        var homeBottom = home.offset().top + home.outerHeight();

        if ($(window).scrollTop() >= homeBottom) {
            menu
                .addClass('fixed-top bg-white navbar-light')
                .removeClass('bg-transparent navbar-dark position-absolute');
            content.removeClass('menu-padding');
        } else {
            menu
                .removeClass('fixed-top bg-white navbar-light')
                .addClass('bg-transparent navbar-dark position-absolute');
            content.addClass('menu-padding');
        }
    }

    $(window).on('scroll', onScroll);
    onScroll(); // run once on page load to set correct state
});