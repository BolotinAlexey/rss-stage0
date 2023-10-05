import getRefs from './getRefs.js';
const words = ['cats', 'dogs', 'nature', 'arts', 'surrealism', 'flowers'];
const refs = getRefs();

const url =
  'https://pixabay.com/api/?key=33299161-c9719a65dfe469cb85eb97047&q=';

export default async function bgImage(isNotFirst) {
  const word = isNotFirst
    ? words[Math.floor(Math.random() * words.length)]
    : 'montain';

  const result = await newFetch(word);
  refs.area.style.backgroundImage = `url(${
    result.hits[Math.floor(Math.random() * result.hits.length)].webformatURL
  })`;
}

async function newFetch(word) {
  try {
    const resultFetch = await fetch(url + word);
    const result = await resultFetch.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
