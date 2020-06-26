

  $(document).ready(function(){


    $('.slider-delivery').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: 'linear',
      speed: 500,
      infinite: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
  
      ]
    });
  
    $(".slick-arrow").empty()

  
  });