import Global from './views/components/global/global';
import load from './views/components/adaptisVer2/adaptisVer2SolutionBlock/adaptisVer2SolutionBlock';
import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';
import skrollr from './skrollr.min.js';
require('normalize.css');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  adaptisHeaderLogo.init();
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
