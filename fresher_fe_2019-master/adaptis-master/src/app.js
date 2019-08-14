// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import airbnbHeader from './views/components/airbnb/header/header';
import airbnbSlickSlider from './views/components/airbnb/airbnb';
// import * as xyz from '..'
// import slick from 'slick-carousel';
import 'slick-carousel/slick/slick';

  require('normalize.css');
  require('jquery-datetimepicker');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  airbnbHeader.timePicker();
  airbnbSlickSlider.SlickSlider('.multiple-items');
  airbnbSlickSlider.BookedSlickSlider();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
