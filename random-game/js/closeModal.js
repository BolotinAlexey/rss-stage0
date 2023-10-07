import getRefs from './getRefs.js';
const refs = getRefs();

export default function closeModal(nodes) {
  refs.modalTitle.innerText = '';
  refs.modalText.innerText = '';
  refs.labelName.value = '';
  nodes.forEach(el => refs[el].classList.remove('block'));
  refs.inputName;
}
