import Global from './views/components/global/global';
import load from './views/components/adaptisVer2/adaptisVer2SolutionBlock/adaptisVer2SolutionBlock';
import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';
import skrollr from './skrollr.min.js';
import adaptisSlide from './views/components/adaptisVer2/adaptisVer2Slide/adaptisVer2Slide';
import '../node_modules/slick-carousel/slick/slick';
import '../node_modules/jquery-validation/dist/jquery.validate.min';
import adaptisContact from './views/components/adaptisVer2/adaptisVer2Contact/adaptisVer2Contact';

require('normalize.css');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  adaptisHeaderLogo.init();
  adaptisSlide.init();
  adaptisContact.init();
  $('.single-item').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  skrollr.init();
  load.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
};

$(window).on('scroll', () => {adaptisHeaderLogo.scrollFunction(), load.init()});
