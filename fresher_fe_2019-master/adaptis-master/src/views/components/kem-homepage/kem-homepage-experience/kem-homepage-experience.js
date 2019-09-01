const experienceSlide = {
    slickSlider:() => {
        $('.multiple-items-experience').slick({
            dots: false,
            infinite: true,
            speed: 300,
            loop: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '23%',
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  centerPadding: '10%',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 767,
                settings: {
                  centerPadding: '0px',
                  slidesToShow: 1
                }
              }
            ]
          });
    }
}
export default experienceSlide;