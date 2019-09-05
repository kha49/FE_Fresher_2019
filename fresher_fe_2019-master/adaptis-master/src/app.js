import Global from './views/components/global/global';
import load from './views/components/adaptisVer2/adaptisVer2SolutionBlock/adaptisVer2SolutionBlock';
import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';
import adaptisSlide from './views/components/adaptisVer2/adaptisVer2Slide/adaptisVer2Slide';
import skrollr from '../node_modules/skrollr/src/skrollr';

import '../node_modules/slick-carousel/slick/slick';
require('normalize.css');
require('./skrollr.min.js');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  adaptisHeaderLogo.init();
  adaptisSlide.init();
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
