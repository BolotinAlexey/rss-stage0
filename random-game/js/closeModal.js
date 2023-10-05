import getRefs from './getRefs.js';
const refs = getRefs();

export default function closeModal(nodes) {
  refs.modalTitle.innerText = '';
  refs.modalText.innerText = '';
  nodes.forEach(el => refs[el].classList.remove('block'));
}
