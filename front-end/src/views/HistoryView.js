import KeywordView from './KeywordView';
import './HistoryView.scss';

export default class HistoryView extends KeywordView {
  constructor(el) {
    super(el);
    this._messages.NO_KEYWORDS = '검색 이력이 없습니다';
  }

  // eslint-disable-next-line class-methods-use-this
  getKeywordsHtml(data) {
    return `${data.reduce((html, item) => {
      // eslint-disable-next-line no-param-reassign
      html += `<li data-keyword="${item.keyword}">
        ${item.keyword} 
        <span class="date">${item.date}</span>
        <button class="btn-remove"></button>
        </li>`;
      return html;
    }, '<ul class="HistoryView">')}</ul>`;
  }

  bindRemoveBtn() {
    Array.from(this.el.querySelectorAll('button.btn-remove')).forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onRemove(btn.parentElement.dataset.keyword);
      });
    });
  }

  onRemove(keyword) {
    this.emit('@remove', { keyword });
  }
}
