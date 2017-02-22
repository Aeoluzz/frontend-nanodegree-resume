/*When a user scrolls down pass the current position of the nav bar, add the css class fixed-nav to the navbar menu so the navigation bar floats over the page*/
$(document).ready(function() {
    var navBar = $("#nav-bar");
    var headerBar = $("header");
    var navPos = navBar.offset().top - 10;

    $(window).scroll(function() {
        var currentPos = $(document).scrollTop();
        if (currentPos >= navPos) {
            navBar.addClass("fixed-nav");
            navBar.addClass("enlarge-header");
        } else {
            navBar.removeClass("fixed-nav");
            header.removeClass("enlarge-header");
        }
    }); //end scroll

    //this code allows for smooth scrolling when a nav link is clicked
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function() {
            window.location.hash = target;
        });
    });


}); //end ready function