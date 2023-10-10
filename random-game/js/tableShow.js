import closeModal from './closeModal.js';
import getRefs from './getRefs.js';

const nodes = ['bgModal', 'modal', 'cross', 'table'];
const refs = getRefs();

export default function tableShow() {
  let k = 1;

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
  const insertString =
    '<tr>' +
    Object.keys(scoreNames[0]).reduce(
      (a, b) => a + `<th data-th='${b}'>${b}</th>`,
      ''
    ) +
    '</tr>';
  refs.table.insertAdjacentHTML('beforeend', insertString);
  renderTable([...scoreNames].reverse());

  // add btns
  addBtn('score', scoreNames, k);
  addBtn('max_tile', scoreNames, k);
  addBtn('dimension', scoreNames, k);
  addBtn('name', scoreNames, k);
}

function changeOrderTable(scoreNames, key, k) {
  const trs = Object.values(refs.table.querySelectorAll('tr'));

  // delete all tr, exactly 0th(contains th)
  trs.forEach((tr, i) => i && tr.remove());

  const sortFn =
    key === 'name'
      ? (a, b) =>
          k > 0 ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key])
      : (a, b) => k * b[key] - k * a[key];
  const tempArr = [...scoreNames].sort(sortFn);
  renderTable(tempArr);
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

function renderTable(arr) {
  arr.length = 10;
  const insertString = arr.reduce((a, b) => a + tableRow(b), '');
  document.querySelector('tbody').insertAdjacentHTML('beforeend', insertString);
}

function addBtn(key, scoreNames, k) {
  const th = refs.table.querySelector(`[data-th=${key}]`);
  const btnTh = document.createElement('button');
  btnTh.classList.add('btn-th');
  th.appendChild(btnTh);

  const svgString = `<span>
                  <svg class="contacts__icon-invert" width="16" height="15">
                    <use href="./assets/sprite.svg#arrow"></use>
                  </svg>
                </span>`;
  btnTh.insertAdjacentHTML('beforeend', svgString);

  btnTh.addEventListener('click', () => {
    changeOrderTable(scoreNames, key, k);
    k *= -1;
  });
}
