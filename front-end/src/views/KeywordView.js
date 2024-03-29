import View from './View';
import './KeywordView.scss';

export default class KeywordView extends View {
  constructor(el) {
    super(el);

    this._messages = {
      NO_KEYWORDS: '추천 검색어가 없습니다',
    };
  }

  mount(data = []) {
    this.el.innerHTML = data.length
      ? this.getKeywordsHtml(data)
      : this._messages.NO_KEYWORDS;
    this.show();
    this._bindClickEvent();
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  getKeywordsHtml(data) {
    return `${data.reduce((html, item, index) => {
      // eslint-disable-next-line no-param-reassign
      html += `<li data-keyword="${item.keyword}"><span class="number">${
        index + 1
      }</span>${item.keyword}</li>`;
      return html;
    }, '<ul class="KeywordView">')}</ul>`;
  }

  _bindClickEvent() {
    Array.from(this.el.querySelectorAll('li')).forEach((li) => {
      li.addEventListener('click', (e) => this._onClickKeyword(e));
    });
  }

  _onClickKeyword(e) {
    const { keyword } = e.currentTarget.dataset;
    this.emit('@click', { keyword });
  }
}
