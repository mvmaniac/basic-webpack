import request from './request';

export default {
  async list() {
    const data = await request('get', '/api/search');
    return data;
  }
};
