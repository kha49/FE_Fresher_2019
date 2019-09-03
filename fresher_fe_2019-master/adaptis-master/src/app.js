// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import adaptisSlider from '../src/views/components/adaptis/slide/slide';
// import reveal from '../src/views/components/adaptis/develop/develop';
require('normalize.css');
// require(['skrollr'], function(skrollr){
// 	var s = skrollr.init();
// });
require('../src/skrollr.min.js');
$(() => {
  // Code here
});
$(document).ready(() => {
  Global.lazyLoad();
  skrollr.init();
  // reveal.init();
  // AOS.init();
  // developAnimate.init();

  $('.single-item').slick();
  // adaptisSlider.init();
  // adaptisSlider.plusDivs(n);
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};

$(window).on('scroll', () => {AdaptisHeader.scrollFunction();});