// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import adaptisSlider from '../src/views/components/adaptis/slide/slide';
require('normalize.css');

$(() => {
  // Code here
});


$(document).ready(() => {
  Global.lazyLoad();
  AdaptisHeader.scrollFunction();
  AdaptisHeader.toggleClass();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};

$(window).on('scroll', () => {AdaptisHeader.scrollFunction();});