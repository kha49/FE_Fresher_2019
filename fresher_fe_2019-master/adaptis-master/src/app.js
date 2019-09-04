import Global from './views/components/global/global';
// import HeaderAirBnb from './views/components/airbnbUpdate/header/header';
//adaptisVer2
import adaptisHeaderLogo from './views/components/adaptisVer2/adaptisVer2Header/adaptisVer2Header';

require('normalize.css');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  adaptisHeaderLogo.init();
  skrollr.init();
  // HeaderAirBnb.init();
  // HeaderAirBnb.modal();
  //adaptisVer2
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};

$(window).on('scroll', () => {adaptisHeaderLogo.scrollFunction()});
