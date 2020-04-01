import View from './View';

import defaultImage from '../images/default-image.jpg';

export default class ResultView extends View {
  constructor(el) {
    super(el);

    this.messages = {
      NO_RESULT: '검색 결과가 없습니다'
    };
  }

  mount(data = []) {
    this.el.innerHTML = `<div class="ResultView">
      ${data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT}
    </div>`;
    this.show();
  }

  getSearchResultsHtml(data) {
    return `${data.reduce((html, item) => {
      // eslint-disable-next-line no-param-reassign
      html += this.getSearchItemHtml(item);
      return html;
    }, '<ul>')}</ul>`;
  }

  // eslint-disable-next-line class-methods-use-this
  getSearchItemHtml(item) {
    return `<li>
      <img src="${item.image}" onerror="this.src='${defaultImage}'"/>
      <p>${item.name}</p>
    </li>`;
  }
}
