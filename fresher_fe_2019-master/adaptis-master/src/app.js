// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import 'bootstrap';
import user from './views/components/group3/header/header-navbar-mobile/header-box-user/user-content';
import nav_canvas from './views/components/group3/header/header-navbar-mobile-canvas/nav-canvas';
import '../node_modules/slick-carousel/slick/slick';
import scrollBtn from './views/components/group3/footer/scroll_btn/btn';
import box_checkout from './views/components/group3_checkout/box-checkout/box-checkout';
import form_checkout from './views/components/group3_checkout/form_checkout/form_checkout';
import Modal from './views/components/group3/modal/modal';
import hotSale from './views/components/group3/main/hotsale/hotsale';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  user.init();
  nav_canvas.init();
  hotSale.init();
  $('.multiple-items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
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
    ]
  });
  scrollBtn.init();
  box_checkout.init();
  form_checkout.init();
  Modal.init();
  new WOW().init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);

});

window.onload = () => {
};
