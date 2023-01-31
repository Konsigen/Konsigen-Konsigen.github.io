$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                adaptiveHeight: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                dots: true,
                arrows:false
                
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                  swipeToSlide: true,
                  dots: true,
                  arrows:false
                }
              },
            {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  swipeToSlide: true,
                  dots: true,
                  arrows:false

              }
            }
          ]
    });
});