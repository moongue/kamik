function showMenu() {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var nav = $('.block-navigation');

    mobileMenuToggle.click(function () {
        nav.slideToggle(400);
    })
}

function slider () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });
}



function sliderVideo() {
    $(function () {
        $('.slider-video').slick({
            autoplay: false

        });

        $(".slider-video").on('afterChange', function (event, slick, currentSlide) {
            $("#cp").text(currentSlide + 1);
        });
    });
}

$(window).on('load', function() {
    showMenu();
    slider();
    sliderVideo();
});