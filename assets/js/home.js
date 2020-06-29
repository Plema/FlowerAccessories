$(document).ready(function(){

  $('.top-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.new-pr1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 500,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          arrows: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          centerMode: true,
          arrows: false,
          variableWidth: true,
        }
      }

    ]
  });

  $('.act-pr1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 500,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          centerMode: true,
          arrows: false,
          variableWidth: true,
        }
      }

    ]
  });



  
    function windowSize(){
      if ($(window).width() < '1280'){
        $('.interest-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          cssEase: 'linear',
          speed: 500,
          infinite: true,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
          touchThreshold: 100,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows:false,
              }
            }
          ]
        });
      } else {
        $('.interest-slider').unslick()
      }
  }
    $(window).on('load resize',windowSize);
  
$(".slick-arrow").empty()

});