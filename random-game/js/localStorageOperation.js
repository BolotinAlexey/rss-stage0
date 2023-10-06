import getRefs from './getRefs.js';

const refs = getRefs();

export default function localStorageOperation(score, dimension, max_tile) {
  const name = refs.inputName.value ? refs.inputName.value : 'anonymous';
  const scoreNames = localStorage.getItem('scoreNames')
    ? JSON.parse(localStorage.getItem('scoreNames'))
    : [];
  scoreNames.push({ name, score, dimension, max_tile });
  localStorage.setItem('scoreNames', JSON.stringify(scoreNames));
}
