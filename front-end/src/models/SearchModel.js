import request from './request';

export default {
  async list() {
    const data = await request('get', `${API_URL}/api/search`);
    return data;
  }
};
