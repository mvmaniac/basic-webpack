// import './main.css';
import '@/app.scss';

import polyfill from 'custom-event-polyfill';
import MainController from '@/controllers/MainController';

document.addEventListener('DOMContentLoaded', () => {
  const main = new MainController();
  main.renderView();

  if (module.hot) {
    console.log('핫 모듈 켜짐...');
  }

  console.log('콘솔 로그 제거 확인용');
});
