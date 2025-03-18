$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1200,
      dots: true,
      infinite: true,
      fade: true,
      arrows: true,
      slidesToShow: 1,

      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow : 1,
                arrows: false,

            }
        },
      ]
    });
  });