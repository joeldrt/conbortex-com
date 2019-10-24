"use strict"; // Start of use strict


function backgroundSlider() {
    if ($('.background-slider').length) {
        $(".background-slider").vegas({
            timer: false,
            transition: ['fade'],
            slides: [
                { src: "img/banner-1-1.jpg" },
                { src: "img/banner-1-2.jpg" },
                { src: "img/banner-1-3.jpg" }
            ]
        });
    };
}

function accrodion() {
    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };
}

function thmMailchimp() {
    if ($('.mailchimp-form').length) {

        $('.mailchimp-form').each(function() {
            var mailChimpWrapper = $(this);

            mailChimpWrapper.validate({ // initialize the plugin
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent().find('.result').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    return false;
                }
            });
        });
    };
}

function priceFilter() {
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };
}

function thmOwlCarousel() {
    if ($('.brand-carousel').length) {
        $('.brand-carousel').owlCarousel({
            loop: true,
            margin: 75,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 999,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                496: {
                    items: 2,
                    autoWidth: false
                },
                568: {
                    items: 2,
                    autoWidth: false
                },
                667: {
                    items: 3,
                    autoWidth: false
                },
                768: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 4,
                    autoWidth: false
                },
                1200: {
                    items: 4,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.testi-carousel').length) {
        $('.testi-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-long-arrow-alt-left"></i>',
                '<i class="fa fa-long-arrow-alt-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                568: {
                    items: 1,
                    autoWidth: false
                },
                667: {
                    items: 1,
                    autoWidth: false
                },
                768: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                },
                1200: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
}

function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}


function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}


function thmbxSlider() {
    if ($('.feature-carousel-box').length) {
        $('.feature-carousel-box').bxSlider({
            mode: 'vertical',
            auto: true,
            autoControls: false,
            controls: false,
            pause: 3000,
            slideMargin: 0
        });
    }
}



function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed slideInDown animated');
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed slideInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}


function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}

function thmCounter() {
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };
}

function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: true
        });
        wow.init();
    };
}

function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).find('.form-result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
}

function thmVideoPopup() {
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    };
}

function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

function mobileNavToggle() {
    if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
        $('#main-nav-bar .navbar-nav .sub-menu').parent('li').children('a').append(function() {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        $('#main-nav-bar .navbar-nav .sub-nav-toggler').on('click', function() {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}

function sideNavToggler() {
    if ($('.side-navigation').length) {
        $('.side-nav-opener').on('click', function() {
            $('.side-navigation').addClass('open');
        });
        $('.side-navigation-close-btn').on('click', function() {
            $('.side-navigation').removeClass('open');
        });
    };
}

function countDownTimer() {
    if ($('.countdown-box').length) {

        $('.countdown-box').each(function() {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<li> <div class="box"> <h4>' + event.strftime('%D') + '</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%H') + '</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%M') + '</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%S') + '</h4> <span>Seconds</span> </div> </li> ');
            });
        });



    };
}

function SmoothMenuScroll() {
    var anchor = $('.scrollToLink');
    if (anchor.length) {
        anchor.children('a').bind('click', function(event) {
            if ($(window).scrollTop() > 10) {
                var headerH = '88';
            } else {
                var headerH = '275';
            }
            var target = $(this);
            $('html, body').stop().animate({
                scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
            }, 1200, 'easeInOutExpo');
            anchor.removeClass('current');
            target.parent().addClass('current');
            event.preventDefault();
        });
    }
}

function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.mainmenu.one-page-scroll-menu .scrollToLink').children('a').each(function() {
            // grabing section id dynamically
            var sections = $(this).attr('href');
            $(sections).each(function() {
                // checking is scroll bar are in section // if ($(this).offset().top <= windscroll + 100)
                if ($(this).offset().top <= windscroll + 390) {
                    // grabing the dynamic id of section
                    var Sectionid = $(sections).attr('id');
                    // removing current class from others
                    $('.mainmenu').find('li').removeClass('current');
                    // adding current class to related navigation
                    $('.mainmenu').find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                }
            });
        });
    } else {
        $('.mainmenu.one-page-scroll-menu li.current').removeClass('current');
        $('.mainmenu.one-page-scroll-menu li:first').addClass('current');
    }
}

function handlePreloader() {
    if ($('.preloader').length) {
        $('body').removeClass('active-preloader-ovh');
        $('.preloader').fadeOut();
    }
}

function bootstrapAnimatedLayer() {

    /* Demo Scripts for Bootstrap Carousel and Animate.css article
     * on SitePoint by Maria Antonietta Perna
     */

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#minimal-bootstrap-carousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel({
        interval: 7000
    });

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function(e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
}

function photoGalleryMasonary() {
    if ($('.photo-gallery').length) {
        if ($(window).width() < 992) {
            $('.photo-gallery .row').isotope({
                layoutMode: 'masonry'
            });
        }
    }
}

function activeBStabOnSelect() {
    if ($('#journey-tab-select').length) {
        $('#journey-tab-select ').on('change', function(e) {
            var tab = $(this).val();
            $('#journey-tab a[href="#' + tab + '"]').tab('show');
        });
    }
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        thmMailchimp();
        priceFilter();
        cartTouchSpin();
        thmLightBox();
        thmCounter();
        contactFormValidation();
        scrollToTarget();
        thmVideoPopup();
        accrodion();
        mobileNavToggle();
        sideNavToggler();
        countDownTimer();
        SmoothMenuScroll();
        backgroundSlider();
        bootstrapAnimatedLayer();
        activeBStabOnSelect();
        $('body').on('hidden.bs.modal', function () {
            if($('.modal.in').length > 0)
            {
                $('body').addClass('modal-open');
            }
        });
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        thmbxSlider();
        galleryMasonaryLayout();
        handlePreloader()
        thmScrollAnim();
        thmOwlCarousel();
        photoGalleryMasonary();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
        OnePageMenuScroll();
    })(jQuery);
});
// instance of fuction while Window resize event
jQuery(window).on('resize', function() {
    (function($) {
        photoGalleryMasonary();
    })(jQuery);
});

// digiall functions

function setContactoPuebla() {
    $('#contacto_ciudad').text("Puebla");
    $('#contacto_tel').attr("href", "tel:2222850241");
    $('#contacto_tel').text("(222) 285 0241");
    $('#contacto_email1').attr("href", "mailto:vbarragan@conbortex.com");
    $('#contacto_email1').text("vbarragan@conbortex.com");
    $('#contacto_email2').attr("href", "mailto:fernandez@conbortex.com");
    $('#contacto_email2').text("fernandez@conbortex.com");
    $('#pueblaMap').show();
    $('#queretaroMap').hide();
    $('#celayaMap').hide();
}

function setContactoCDMX() {
    $('#contacto_ciudad').text("CDMX");
    $('#contacto_tel').attr("href", "tel:2222850241");
    $('#contacto_tel').text("(222) 285 0241");
    $('#contacto_email1').attr("href", "mailto:vbarragan@conbortex.com");
    $('#contacto_email1').text("vbarragan@conbortex.com");
    $('#contacto_email2').attr("href", "mailto:fernandoz@conbortex.com");
    $('#contacto_email2').text("fernandoz@conbortex.com");
    $('#pueblaMap').show();
    $('#queretaroMap').hide();
    $('#celayaMap').hide();
}

function setContactoQueretaro() {
    $('#contacto_ciudad').text("Queretaro");
    $('#contacto_tel').attr("href", "tel:4616199166");
    $('#contacto_tel').text("(461) 619 9166");
    $('#contacto_email1').attr("href", "mailto:veronicab@conbortex.com");
    $('#contacto_email1').text("veronicab@conbortex.com");
    $('#contacto_email2').attr("href", "mailto:vebahuergo@conbortex.com");
    $('#contacto_email2').text("vebahuergo@conbortex.com");
    $('#pueblaMap').hide();
    $('#queretaroMap').show();
    $('#celayaMap').hide();
}

function setContactoCelaya() {
    $('#contacto_ciudad').text("Celaya");
    $('#contacto_tel').attr("href", "tel:4616199166");
    $('#contacto_tel').text("(461) 619 9166");
    $('#contacto_email1').attr("href", "mailto:veronicab@conbortex.com");
    $('#contacto_email1').text("veronicab@conbortex.com");
    $('#contacto_email2').attr("href", "mailto:vebahuergo@conbortex.com");
    $('#contacto_email2').text("vebahuergo@conbortex.com");
    $('#pueblaMap').hide();
    $('#queretaroMap').hide();
    $('#celayaMap').show();
}
