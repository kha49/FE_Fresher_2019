// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import offersSlide from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
import Gallery from './views/components/kem-homepage/kem-homepage-gallery/kem-homepage-gallery';
import experienceSlide from './views/components/kem-homepage/kem-homepage-experience/kem-homepage-experience';
require('normalize.css');
require('slick-carousel');
require('lightgallery');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  offersSlide.slickSlider();
  experienceSlide.slickSlider();
  Gallery.slickSlider();
  Gallery.modalSlider();
  Gallery.init();
  Gallery.showModal();
  Gallery.closedModal();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
