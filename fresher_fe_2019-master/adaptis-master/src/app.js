// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import header from './views/components/header/header';
import Offers from './views/components/kem-homepage/kem-homepage-offers/kem-homepage-offers';
import Gallery from './views/components/kem-homepage/kem-homepage-gallery/kem-homepage-gallery';

import Explore from './views/components/kem-homepage/kem-homepage-explore/kem-homepage-explore';
import Experience from './views/components/kem-homepage/kem-homepage-experience/kem-homepage-experience';
import footer from './views/components/footer/footer';
import footerModal from './views/components/modals/modal-footer/modal-footer';
import search from './views/components/kem-homepage/kem-search/kem-search';
import searchModal from './views/components/modals/modal-search/modal-search';
import destinationPlace from './views/components/kem-destination/kem-destination-place/kem-destination-place';
import Mapbox from './views/components/kem-homepage/kem-homepage-mapbox/kem-homepage-mapbox';

require('normalize.css');
require('slick-carousel');
require('daterangepicker');
require('jquery-validation');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  destinationPlace.init();
  header.init();
  search.init();
  searchModal.init();
  footer.init();
  footerModal.init();
  Experience.init();
  Gallery.init();
  Offers.init();
  Explore.init();
  Mapbox.init();

});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
    Experience.init();
    Gallery.init();
    Offers.init();
    Explore.init();
  }, 250);
});

window.onload = () => {
  Mapbox.init();
  Experience.init();
  Gallery.init();
  Offers.init();
  Explore.init();
};
