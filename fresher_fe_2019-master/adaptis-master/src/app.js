// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import adaptisSlider from '../src/views/components/adaptis/slide/slide';
// bootstrap;
import 'bootstrap';
// import reveal from '../src/views/components/adaptis/develop/develop';
require('normalize.css');
require('../src/skrollr.min.js');
$(() => {
  // Code here
});
$(document).ready(() => {
  Global.lazyLoad();
  skrollr.init();

  new WOW().init();
  $('.single-item').slick();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
