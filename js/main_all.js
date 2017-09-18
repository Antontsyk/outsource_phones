$(document).ready(function () {

    $(function () {
        var allHeight = $(window).height();
        if ($(window).width() > 700) {
            $('#main_header').css('min-height', allHeight);
        }else{
            /*var reviews = $('.reviews');
            $('.reviews').remove();
            $('.sliderModileReview').append(reviews);
            var cooperation = $('.cooperation');
            $('.cooperation').remove();
            $('.cooperationMobile').append(cooperation);*/
        }

        $('.header_mouse').click(function () {
            jQuery('html, body').animate({
                scrollTop: allHeight
            }, 700);
        });
    });
    $(window).scroll(function () {
        if($(window).scrollTop() > 1){
            $('.mobileHeader').addClass('white');
            $('.mobileHeader .logoMobile .logoMobileTop').hide(0);
            $('.mobileHeader .logoMobile .logoMobileScroll').show(0);
            var serarchNav = $('.serarchNav').addClass('top');
            $('.serarchNav').remove();
            $('.mobileHeader').append(serarchNav);
        }else{
            $('.mobileHeader').removeClass('white');
            $('.mobileHeader .logoMobile .logoMobileTop').show(0);
            $('.mobileHeader .logoMobile .logoMobileScroll').hide(0);
            var serarchNav = $('.serarchNav').removeClass('top');
            $('.serarchNav').remove();
            $('.serarchNavContainer').append(serarchNav);
        }
    });
    $('.mobileHeader .btnNav').click(function () {
        $(this).parents('.mobileHeader').toggleClass('chowNavModile whiteTop');
    });

    $(window).click(function (event) {
        var eventInMenu = $(event.target).parents('.mobileHeader');
        if (!eventInMenu.length) {
            $('.mobileHeader').removeClass('chowNavModile');
        }
    });

    $(function () {
        /*$('#main_header ul.menu').slicknav({
            prependTo: "#main_header",
            label: ""
        });*/
    });
    if ($(window).width() < 767) {
        $('.work_block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            /*autoplay: true,
            autoplaySpeed: 1000,
            speed: 1000,*/
            dots: true
        });
        $('.slider_phones').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            /*autoplay: true,
            autoplaySpeed: 1000,
            speed: 1000,*/
            dots: true
        });
        $('.sliderRound').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 1000,
            dots: true
        });
    }
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(function () {
        /*$('.slider_partners .slideItem').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
            /!*autoplay: true,
             autoplaySpeed: 2000,*!/

        });*/
        if($('.sliderReviewsMain').length){
            $('.sliderReviewsMain').slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
                /*autoplay: true,
                 autoplaySpeed: 2000,*/

            });
        }
        $('.imagesForPartners').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 155,
            fade: true,
            cssEase: 'linear'
            /*autoplay: true,
             autoplaySpeed: 2000,*/

        });
        $('.slider_partners').on('mouseover', '.span1_5', function (e) {
            e.preventDefault();
            //e.stopPropagation();
            var IdImg = $(this).attr('data-UrlForBigImage');
            $('.imagesForPartners').slick('slickGoTo', IdImg)
            /*$('.customers_img img').fadeOut(100, function () {
             $('.customers_img img').fadeIn(100);
             });*/
            // $('.customers_img img').attr('src', $(this).attr('data-UrlForBigImage'))

        });
        $('.slider_partners .slick-slide').hover(function () {
            $('.customers_img .block_hover').fadeOut(300);
        }, function () {
            $('.customers_img .block_hover').fadeIn(300);
            $('.imagesForPartners').slick('slickGoTo', 0)
        });
    });

    (function ($) {
        jQuery.fn.lightTabs = function (options) {

            var createTabs = function () {
                tabs = this;
                i = 0;

                showPage = function (i) {
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active");
                }
                showPage(0);

                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $(document).ready(function () {
        $(".tabs").lightTabs();
        $(".tabs_main").lightTabs();
    });
    $('.get_popup').click(function (e) {
        e.preventDefault();
        $('.popup').fadeIn(700);
    });
    $('.popup .close').click(function (e) {
        e.preventDefault();
        $('.popup').fadeOut(700);
    });
    $('.popup').click(function (event) {
        var eventInMenu = $(event.target).parents('.popup .in .block');
        if (!eventInMenu.length) {
            $('.popup').fadeOut(300);
        }
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.popup').fadeOut(300);
            return false;
        }
    });

    new WOW().init();

    $('.work_block .span2').hover(function () {
        $(this).find('.dop_info').slideToggle();
    });

});
