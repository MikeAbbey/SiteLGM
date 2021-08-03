jQuery(function() {
    $('.logo-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      variableWidth: true,
      centerMode: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });
  