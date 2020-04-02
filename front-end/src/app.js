// import './main.css';
import '@/app.scss';

import polyfill from 'custom-event-polyfill';
import MainController from '@/controllers/MainController';

document.addEventListener('DOMContentLoaded', () => {
  const main = new MainController();
  main.renderView();
});
