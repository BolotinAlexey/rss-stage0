import closeModal from './closeModal.js';
import getRefs from './getRefs.js';

const nodes = ['bgModal', 'modal', 'cross', 'table'];
const refs = getRefs();
export default function () {
  const scoreNames = localStorage.getItem('scoreNames')
    ? JSON.parse(localStorage.getItem('scoreNames'))
    : [];
  refs.modalTitle.innerText = 'SCORE TABLE';
  refs.modalText.innerText = scoreNames.length
    ? ''
    : 'Unfortunately, there are no players yet in the table.';
  nodes.forEach(el => refs[el].classList.add('block'));
  refs.cross.addEventListener('click', () => {
    refs.table.innerHTML = '';
    closeModal(nodes);
  });

  if (!scoreNames.length) return;
  // create table

  scoreNames.reverse().length = 10;
  const insertString =
    '<tr>' +
    Object.keys(scoreNames[0]).reduce((a, b) => a + `<th>${b}</th>`, '') +
    '</tr>' +
    scoreNames.reduce((a, b) => a + tableRow(b), '');
  refs.table.insertAdjacentHTML('beforeend', insertString);
}

function tableRow({ name, score, dimension, max_tile }) {
  return `
  <tr>
  <td>${name}</td>
  <td>${score}</td>
  <td>${dimension}x${dimension}</td>
   <td>${max_tile}</td>
</tr>
    `;
}
