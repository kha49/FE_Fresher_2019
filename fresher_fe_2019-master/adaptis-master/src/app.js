// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import offersSlide from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
require('normalize.css');
require('slick-carousel');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  offersSlide.slickSlider();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
