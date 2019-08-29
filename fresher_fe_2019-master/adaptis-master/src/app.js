// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import 'bootstrap';
import user from './views/components/group3/header/header-navbar-mobile/header-box-user/user-content';
import nav_canvas from './views/components/group3/header/header-navbar-mobile-canvas/nav-canvas';

require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  user.init();
  nav_canvas.init();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
