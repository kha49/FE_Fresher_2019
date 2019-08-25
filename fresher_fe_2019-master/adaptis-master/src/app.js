// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Modal from './views/components/airbnb/header/form-login/modal';
import form from './views/components/airbnb/header/form/form';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  Modal.init();
  form.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
