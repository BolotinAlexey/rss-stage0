import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import localStorageOperation from './localStorageOperation.js';

const refs = getRefs();

export default function (area, onArrowBind, nodes) {
  console.log(nodes);
  localStorageOperation(area.score, area.div, area.maxTile);
  closeModal(nodes);
  refs.newGame.classList.add('shake-rotate');
  document.removeEventListener('keyup', onArrowBind);
  refs.inputName.value = '';
}
