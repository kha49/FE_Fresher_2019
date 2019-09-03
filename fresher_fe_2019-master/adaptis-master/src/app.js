// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import offersSlide from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
import Gallery from './views/components/kem-homepage/kem-homepage-gallery/kem-homepage-gallery';
import Explore from './views/components/kem-homepage/kem-homepage-explore/kem-homepage-explore';
import experienceSlide from './views/components/kem-homepage/kem-homepage-experience/kem-homepage-experience';
require('normalize.css');
require('slick-carousel');
require('lightgallery');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  Gallery.init();
  Gallery.showModal();
  Gallery.closedModal();
  offersSlide.slickSlider();
  experienceSlide.slickSlider();
  Gallery.slickSlider();
  Gallery.modalSlider();
  Explore.doubleSlider();
  Explore.singleSlider();
  Explore.showButton();

});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
    offersSlide.slickSlider();
    experienceSlide.slickSlider();
    Gallery.slickSlider();
    Gallery.modalSlider();
    Explore.doubleSlider();
    Explore.singleSlider();
  }, 250);
});

window.onload = () => {

};
