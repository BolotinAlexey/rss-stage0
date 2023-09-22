const ACCESS_KEY = 'AG5ZvuxXoUAGyujohtlyMbsrnfNeLFsrQWCXyyYu0_Y';

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
      // const resultFetch = await axios.get(urlToFetch);
      console.log(urlToFetch);
      const resultFetch = await fetch(urlToFetch, {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      });
      const result = await resultFetch.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
}
