$(document).ready(function () {
    $(function () {
        $('.menu').slicknav({
            label: 'Меню'
        });
    }); 
    $('.this_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 2000 
    });
    $('.this_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.left_items .item').each(function (i, el) {
            if (i != nextSlide) {
                $(el).removeClass('active');
            } else {
                $(el).addClass('active');
            }
        });
    });
    $('.left_items .item').click(function () {
        $('.left_items .item').each(function (i, el) {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
        $('.this_slider').slick('slickGoTo', parseInt($(this).index()));
    });
});