import './main.css';

import MainController from './controllers/MainController';

document.addEventListener('DOMContentLoaded', () => {
  const main = new MainController();
  main.renderView();
});
