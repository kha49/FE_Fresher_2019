const Explore = {
    doubleSlider: () => {
      $('.hotel-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 1200,
        asNavFor: '.countries-name'
      });
      $('.countries-name').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.hotel-info',
        dots: true,
        speed: 300,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });   
    },
    singleSlider: () =>{
      $('.china').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
      });
    }
  }
  
  export default Explore;