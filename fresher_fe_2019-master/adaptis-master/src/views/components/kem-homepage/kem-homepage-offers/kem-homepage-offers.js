const offersSlide = {
    slickSlider:() => {
        $('.multiple-items-offers').slick({
            dots: false,
            infinite: false,
            speed: 300,
            // loop: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
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