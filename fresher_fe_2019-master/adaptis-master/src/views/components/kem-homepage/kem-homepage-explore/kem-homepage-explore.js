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
    ,
    // showButton: () =>{
    //   if($('.slick-next,.slick-prev,.hotels_des,#china').length){
    //     var button = document.querySelector('.slick-next');
    //     var button1 = document.querySelector('.slick-prev');
    //     var hotel = document.querySelectorAll('.hotels_des');
    //     var china = document.getElementById('china');
    //     for(let j=0 ; j<hotel.length ; j++){
    //       hotel[j].onmouseover = () => {
    //         button.style.opacity = "1";
    //         button1.style.opacity = "1";
    //       }
    //       hotel[j].onmouseout = () => {
    //         button.style.opacity = "0";
    //         button1.style.opacity = "0";
    //       }
    //     }
    //     china.onmouseover = () => {
    //       button.style.display = "none";
    //       button1.style.display = "none";
    //     }
    //     china.onmouseout = () => {
    //       button.style.display = "block";
    //       button1.style.display = "block";
    //     }
    //     button.onmouseover = () => {
    //       button.style.opacity = ".9";
    //       button1.style.opacity = ".9";
    //     }
    //     button1.onmouseover = () =>{
    //       button1.style.opacity = ".9";
    //       button.style.opacity = ".9";
    //     }
    //   }
    // }
  }
  
  export default Explore;