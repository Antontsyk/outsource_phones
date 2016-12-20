$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
    $(document).keydown(function(e) {
        console.log(e);
        if( e.keyCode === 27 ) {
            $('.popup').fadeOut(300);
            return false;
        }
    });

});