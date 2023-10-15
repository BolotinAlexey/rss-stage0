import getRefs from './getRefs.js';

const refs = getRefs();

export default function localStorageOperation(score, dimension, max_tile) {
  if (!refs.inputName.value) return;

  const scoreNames = localStorage.getItem('scoreNames')
    ? JSON.parse(localStorage.getItem('scoreNames'))
    : [];
  scoreNames.push({ name: refs.inputName.value, score, dimension, max_tile });
  localStorage.setItem('scoreNames', JSON.stringify(scoreNames));
}
