const offersSlide = {
    slickSlider:() => {
        $('.multiple-items').slick({
            dots: true,
            infinite: false,
            speed: 300,
            // loop: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: false,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
    }
}
export default offersSlide;