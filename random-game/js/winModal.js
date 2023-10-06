import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import localStorageOperation from './localStorageOperation.js';

const refs = getRefs();
const nodes = ['bgModal', 'modal', 'cross', 'labelName'];

export default function winModal(area, onArrowBind) {
  area.audioResult.src = './assets/sounds/win.wav';
  area.audioResult.play();
  refs.modalTitle.innerText = 'YOU WIN!';
  refs.modalText.innerText = `Your maximum tile is ${area.maxTile}. You scored ${area.score} points in when playing with ${area.div}x${area.div} dimensions. You can close this window and continue to earn points or start a new game,entering your name.`;
  nodes.forEach(node => {
    refs[node].classList.add('block');
  });
  refs.inputName.addEventListener(
    'change',
    () => {
      localStorageOperation(area.score, area.div, area.maxTile);
      closeModal(nodes);
      refs.newGame.classList.add('shake-rotate');
      document.removeEventListener('keyup', onArrowBind);
    },
    { once: true }
  );
  refs.cross.addEventListener('click', () => closeModal(nodes), { once: true });
  area.isContinue = true;
}
