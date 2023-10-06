import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import localStorageOperation from './localStorageOperation.js';

const nodes = ['bgModal', 'modal', 'labelName'];
const refs = getRefs();

export default function lossModal(arena) {
  refs.modalTitle.innerText = arena.isContinue ? 'GAME OVER!' : 'YOU LOSE!';
  refs.modalText.innerText = `Your maximum tile is ${arena.maxTile}.You scored ${arena.score} points in when playing with ${arena.div}x${arena.div} dimensions. You can dial more if you choose a large dimension.`;
  nodes.forEach(el => refs[el].classList.add('block'));

  refs.inputName.addEventListener(
    'change',
    () => {
      localStorageOperation(arena.score, arena.div, arena.maxTile);
      closeModal(nodes);
      refs.newGame.classList.add('shake-rotate');
    },
    { once: true }
  );
}
