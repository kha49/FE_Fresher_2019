// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import header from './views/components/header/header';
import offersSlide from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
import Gallery from './views/components/kem-homepage/kem-homepage-gallery/kem-homepage-gallery';

import Explore from './views/components/kem-homepage/kem-homepage-explore/kem-homepage-explore';
import experienceSlide from './views/components/kem-homepage/kem-homepage-experience/kem-homepage-experience';
import footer from './views/components/footer/footer';
import footerModal from './views/components/modals/modal-footer/modal-footer';
import search from './views/components/kem-homepage/kem-search/kem-search';
import searchModal from './views/components/modals/modal-search/modal-search';
import destinationPlace from './views/components/kem-destination/kem-destination-place/kem-destination-place';

require('isotope-layout');
require('normalize.css');
require('slick-carousel');
require('daterangepicker');
require('mapbox-gl');

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
  Gallery.init();
  Gallery.showModal();
  Gallery.closedModal();
  Explore.doubleSlider();
  Explore.singleSlider();
  // Explore.showButton();
  header.init();
  footer.init();
  footerModal.init();
  search.init();
  search.daterp()
  searchModal.init();
  destinationPlace.init();
  destinationPlace.filter();
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
