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
import Trending from './views/components/group3/main/trending/trending';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  user.init();
  nav_canvas.init();
  hotSale.init();
  scrollBtn.init();
  box_checkout.init();
  form_checkout.init();
  Modal.init();
  Trending.init();
  new WOW().init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);

});

window.onload = () => {
};
