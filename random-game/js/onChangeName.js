import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import localStorageOperation from './localStorageOperation.js';

const refs = getRefs();

export default function (arena, onArrowBind, nodes) {
  localStorageOperation(arena.score, arena.div, arena.maxTile);
  closeModal(nodes);
  refs.newGame.classList.add('shake-rotate');
  document.removeEventListener('keyup', onArrowBind);
  refs.inputName.value = '';
}
