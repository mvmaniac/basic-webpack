import request from './request';

export default {
  data: [],

  async list() {
    if (this.data.length) return this.data;

    this.data = await request('get', `${API_URL}/api/history`);
    return this.data;
  },

  add(keyword = '') {
    const trimKeyword = keyword.trim();

    if (!trimKeyword) return;

    if (this.data.some((item) => item.keyword === trimKeyword)) {
      this.remove(keyword);
    }

    const date = '12.31';
    this.data = [
      {
        trimKeyword,
        date
      },
      ...this.data
    ];
  },

  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword);
  }
};
