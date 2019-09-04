import Global from './views/components/global/global';
// import HeaderAirBnb from './views/components/airbnbUpdate/header/header';
//adaptisVer2
import load from './views/components/adaptisVer2/adaptisVer2SolutionBlock/adaptisVer2SolutionBlock';
// import loadClient from './views/components/adaptisVer2/adaptisVer2Clients/adaptisVer2Clients';
import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';
import skrollr from '../node_modules/skrollr/src/skrollr';
require('normalize.css');
// require('./skrollr.min.js');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
<<<<<<< HEAD
  adaptisHeaderLogo.init();
  skrollr.init();
  // HeaderAirBnb.init();
  // HeaderAirBnb.modal();
  //adaptisVer2
=======
  load.init();
  // loadClient.init();
  skrollr.init();
  // new WOW().init();
  
    // lazy.init();
>>>>>>> 951104987bb2f934f476b80276963b906fb50054
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
};

$(window).on('scroll', () => {adaptisHeaderLogo.scrollFunction(), load.init()});
