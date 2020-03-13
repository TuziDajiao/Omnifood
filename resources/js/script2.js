$(document).ready(function () {

    /*For the sticky navigation, using a plug-in, waypoint*/
    /*if the user scrolls down, then add the class sticky to the nav element, if he scrolls up, then remove the class sticky from the nav element.*/

    $('.js--section-features').waypoint(function (direction) {

        if (direction == 'down') {
            $('nav').addClass('sticky');

        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*Scroll on buttons*/
    /*when we click on the button I'm hungry, which has this js--scroll-to-plans class, it will scoll to top of the sign up section, which has the js--section-plans class, with a speed of 1 second, or 1000 milliseconds*/

    $('.js--scroll-to-plans').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);

    });


    /*when we click on the button show me more, which has this js--scroll-to-start class, it will scoll to top of the next section, which says get food fast, not fast food, which has the js--section-features class, with a speed of 1 second*/

    $('.js--scroll-to-start').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);

    });

    /*Navigation Scroll*/
    /*when we click the links in the navigation panel, it will lead us to the corresponding sections; the codes are copied from https://css-tricks.com/snippets/jquery/smooth-scrolling/ */

    /*Select all links with hashes*/
    $('a[href*="#"]')
        /* Remove links that don't actually link to anything*/
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            /* On-page links*/
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                /* Figure out element to scroll to*/
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                /* Does a scroll target exist?*/
                if (target.length) {
                    /* Only prevent default if animation is actually gonna happen*/
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        /*Callback after animation*/
                        /* Must change focus!*/
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            /* Checking if the target was focused*/
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); /* Adding tabindex for elements not focusable*/
                            $target.focus(); /* Set focus again*/
                        };
                    });
                }
            }
        });

    /*Animations on scroll*/
    /*to animate js--wp-1, we add the class animated and the name of the animation we want, here, it's fadein. These names are from the animate.css website. Notice the names have to be exactly like the ones on the website, that is, CAPITALIZATION MATTERS*/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');

    }, {
        offset: '50%' /*so the fadein would happen earlier, and not wait till we hit the js--wp-1*/
    });


    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');

    }, {
        offset: '50%'
    });

    /*mobile nav*/
    /*when we click on the 3 horizontal line icon, which has this js--nav-icon class, it will open or close the nav section, which has the js--main-nav class, with a speed of 200 milliseconds*/

    /*we click js—nav-icon, it opens the js—main-nav, we click js—nav-icon again, it closes the js—main-nav, this is toggle*/

    /*we click js—nav-icon, and if js—nav-icon and i element (defined here as icon) has ion-its-menu (the 2 horizontal lines), then add the ion-its-close icon, and remove the ion-its-menu icon, and vice versa*/


    $('.js--nav-icon').click(function () {

        /*defining a var so we don't have to write the js--main-nav again and again*/
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }


    });

    /* without this, the user cannot see the navigation panel in the desktop view, if it was previously closed in the mobile view. Therefore, add the following jQuery code. This works basically like a media query for jQuery, where we can take different actions depending on the screen width */

    $(window).resize(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        if ($(window).width() > 767) {
            nav.css("display", "block");
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });


    /* what this does is to close the navigation when the viewport width is below 767px and show it when it is above 767px, each time the window is resized. This results in closing the navigation each time we change the size of the the window in the mobile size. However, this is not important, because that does not happen in the real world on a phone or a tablet, which is where the original error typically occurs. In other words, the original bug in the real world only happens when you rotate a tablet from landscape to portrait, or otherwise. The solution above has this situation covered.*/


    /* As for nav.css, first, nav is a variable we defined as:
    var nav = $('.js--main-nav');
    Then, css is a jQuery function that we can use to define CSS properties, in this case, on the .js--main-nav (because that's what the nav variable is). In our case, we use it to set its display property to block:
    nav.css("display", "block"); */






});







/* sample copy from website
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
    
    */
