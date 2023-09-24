import onMessage from './onMessage.js';

const ACCESS_KEY = 'AG5ZvuxXoUAGyujohtlyMbsrnfNeLFsrQWCXyyYu0_Y';
const HEADER = {
  headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
};

const URL_BASE = `https://api.unsplash.com/search/photos/?`;
export default class Api {
  constructor(query = '') {
    // this.q = q;
    this.require = {
      query,
      per_page: 40,
      page: 1,
    };
    this.arrayImages = [];
  }
  set query(query) {
    this.require.query = query;
  }
  get query() {
    return this.require.query;
  }
  set page(page) {
    this.require.page = page;
  }
  get page() {
    return this.require.page;
  }
  incrementPage() {
    this.require.page++;
  }

  async fetchApi() {
    try {
      const urlToFetch =
        URL_BASE +
        Object.keys(this.require)
          .map(key => `&${key}=${this.require[key]}`)
          .join('');

      const resultFetch = await fetch(urlToFetch, HEADER);
      if (!resultFetch.ok) {
        onMessage(`Status: ${resultFetch.status}`, [255, 0, 0]);
        throw new Error(resultFetch.status);
      }
      const result = await resultFetch.json();
      return result;
    } catch (error) {
      console.error('Error: ', error);
      return null;
    }
  }

  //  if word=''
  async randomApi() {
    try {
      const urlToFetch =
        'https://api.unsplash.com/photos?' +
        Object.keys({
          page: this.require.page,
          per_page: this.require.per_page,
        })
          .map(key => `&${key}=${this.require[key]}`)
          .join('');

      const resultFetch = await fetch(urlToFetch, HEADER);
      if (!resultFetch.ok) {
        onMessage(`Status: ${resultFetch.status}`, [255, 0, 0]);
        throw new Error(resultFetch.status);
      }
      const result = await resultFetch.json();
      console.log(result);

      return result;
    } catch (error) {
      console.error('Error: ', error);
      return null;
    }
  }

  // async fetchLike(id) {
  //   const res = await fetch(`https://api.unsplash.com/photos/${id}/like`, {
  //     ...HEADER,
  //     method: 'POST',
  //   });
  //   console.log(res);
  // }
}
