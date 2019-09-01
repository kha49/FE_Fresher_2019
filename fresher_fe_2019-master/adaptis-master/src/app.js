// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import header from './views/components/header/header';
import offersSlide from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
import footer from './views/components/footer/footer';
import footerModal from './views/components/modals/modal-footer/modal-footer';
import search from './views/components/kem-homepage/kem-search/kem-search';
import searchModal from './views/components/modals/modal-search/modal-search';


require('normalize.css');
require('slick-carousel');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  header.init();
  offersSlide.slickSlider();
  footer.init();
  footerModal.init();
  search.init();
  searchModal.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
