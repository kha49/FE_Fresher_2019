// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/airbnb-host/header/header';
import HeadersModal from './views/components/airbnb-host/header/header-modals/header-modals';
import ContentQuestion from './views/components/airbnb-host/content/content-question/content-question';
import ContentQuestionModal from './views/components/airbnb-host/content/content-question/content-question-modal/content-question-modal';
import Footer from './views/components/airbnb-host/footer/footer';
import FooterModal from './views/components/airbnb-host/footer/footer-modals/footer-modals';


// import './views/components/airbnb-host/header/header';
// import './views/components/airbnb-host/header/header-modals/header-modals';


require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  Header.init();
  HeadersModal.init();
  ContentQuestion.init();
  ContentQuestionModal.init();
  Footer.init();
  FooterModal.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
