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

function popups() {
    $('.get-call').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.btn-order').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
}

function fl() {
    $("#fl_inp").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#fl_nm").html(filename);
    });
}


function closePopup() {
    $.magnificPopup.close();
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
    popups();
    closePopup();
    fl();
});