import Global from './views/components/global/global';
// import Header from './views/components/header/header';
import HeaderAirBnb from './views/components/airbnbUpdate/header/header';
import FormAirBnb from './views/components/airbnbUpdate/form/form';

require('normalize.css');
// require('slick.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  $('.responsive').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});



$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};

$(window).on('scroll', () => {HeaderAirBnb.scrollFunction();});
$(window).on('click', () => {FormAirBnb.multipleFunction();});

