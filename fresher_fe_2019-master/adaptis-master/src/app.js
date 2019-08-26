// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import ChangePrice from './views/components/airbnb2/header/header';
import ModalLogin from './views/components/airbnb2/modal-login/modal-login';
import ModalQuestion from './views/components/airbnb2/question/question';
import ModalFooter from './views/components/airbnb2/footer/footer';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();

  ModalLogin .showModalLogin();
  ModalLogin .closedModalLogin();
  ModalQuestion .init();
  ModalQuestion .showModal();
  ModalQuestion .closedModal();
  ModalFooter .init();
  ModalFooter .showModal();
  ModalFooter .closedModal();
  ChangePrice .init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
