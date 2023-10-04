import getRefs from './getRefs.js';

const refs = getRefs();

export default function localStorageOperation(score, dimension) {
  const name = refs.inputName.value ? refs.inputName.value : 'anonymous';
  const scoreNames = localStorage.getItem('scoreNames')
    ? JSON.parse(localStorage.getItem('scoreNames'))
    : [];
  scoreNames.push({ name, score, dimension });
  localStorage.setItem('scoreNames', JSON.stringify(scoreNames));
}
