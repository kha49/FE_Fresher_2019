import Global from './views/components/global/global';
// import HeaderAirBnb from './views/components/airbnbUpdate/header/header';
//adaptisVer2
import load from './views/components/adaptisVer2/adaptisVer2SolutionBlock/adaptisVer2SolutionBlock';
// import loadClient from './views/components/adaptisVer2/adaptisVer2Clients/adaptisVer2Clients';

// import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';
// import skrollr from '../node_modules/skrollr/dist/skrollr.min.js';
require('normalize.css');
// require('./skrollr.min.js');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  load.init();
  // loadClient.init();
  // skrollr.init();
  // new WOW().init();
  
    // lazy.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
};

$(window).on('scroll', () => {adaptisHeaderLogo.scrollFunction(), load.init()});
