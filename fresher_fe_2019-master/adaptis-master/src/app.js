// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import 'bootstrap';
import user from './views/components/group3/header/header-navbar-mobile/header-box-user/user-content';
import nav_canvas from './views/components/group3/header/header-navbar-mobile-canvas/nav-canvas';
import '../node_modules/slick-carousel/slick/slick';
import scrollBtn from './views/components/group3/footer/scroll_btn/btn';
import box_checkout from './views/components/group3_checkout/box-checkout/box-checkout';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  user.init();
  nav_canvas.init();
  $('.multiple-items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1128,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  scrollBtn.init();
  box_checkout.init();
  new WOW().init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);

});

window.onload = () => {
};
