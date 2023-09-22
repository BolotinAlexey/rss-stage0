const KEY = '33299161-c9719a65dfe469cb85eb97047';
const URL_BASE = `https://pixabay.com/api/?key=${KEY}`;
export default class Api {
  constructor(q = '') {
    // this.q = q;
    this.require = {
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: 1,
    };
    this.arrayImages = [];
  }
  set q(q) {
    this.require.q = q;
  }
  get q() {
    return this.require.q;
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
      const resultFetch = await fetch(urlToFetch);
      const result = await resultFetch.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
}
