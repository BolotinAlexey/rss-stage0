import getRefs from './getRefs.js';

const words = ['cats', 'dogs', 'nature', 'arts'];
const refs = getRefs();

const url =
  'https://pixabay.com/api/?key=33299161-c9719a65dfe469cb85eb97047&q=';

export default async function bgImage() {
  const word = words[Math.floor(Math.random() * 4)];
  const index = Math.floor(Math.random() * 20);
  try {
    const resultFetch = await fetch(url + word);
    const result = await resultFetch.json();

    refs.area.style.backgroundImage = `url(${result.hits[index].webformatURL})`;
  } catch (error) {
    console.log(error.message);
  }
}
