import getRefs from './getRefs.js';
import localStorageOperation from './localStorageOperation.js';

const links = ['bgModal', 'modal', 'labelName'];
const refs = getRefs();

export default function lossModal(arena) {
  refs.modalTitle.innerText = arena.isContinue ? 'GAME OVER!' : 'YOU LOSE!';
  refs.modalText.innerText = `Your maximum tile is ${arena.maxTile}.You scored ${arena.score} points in when playing with ${arena.div}x${arena.div} dimensions. You can dial more if you choose a large dimension.`;
  links.forEach(el => refs[el].classList.add('block'));

  refs.inputName.addEventListener(
    'change',
    () => {
      localStorageOperation(arena.score, arena.div);
      refs.modalTitle.innerText = '';
      refs.modalText.innerText = '';
      links.forEach(el => refs[el].classList.remove('block'));
    },
    { once: true }
  );
}
