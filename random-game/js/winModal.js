import closeModal from './closeModal.js';
import getRefs from './getRefs.js';

const refs = getRefs();
const nodes = ['bgModal', 'modal', 'cross'];

export default function winModal(area) {
  area.audioResult.src = './assets/sounds/win.wav';
  area.audioResult.play();
  refs.modalTitle.innerText = 'YOU WIN!';
  refs.modalText.innerText = `Your maximum tile is ${area.maxTile}. You scored ${area.score} points in when playing with ${area.div}x${area.div} dimensions. You can close this window and continue to earn points or start a new game..`;
  nodes.forEach(node => {
    refs[node].classList.add('block');
  });
  refs.cross.addEventListener('click', () => closeModal(nodes));
  area.isContinue = true;
}
