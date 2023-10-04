import getRefs from './getRefs.js';

const refs = getRefs();
const nodes = ['bgModal', 'modal', 'cross'];

export default function winModal(area) {
  refs.modalTitle.innerText = 'YOU WIN!';
  refs.modalText.innerText = `Your maximum tile is ${area.maxTile}. You scored ${area.score} points in when playing with ${area.div}x${area.div} dimensions. You can close this window and continue to earn points or start a new game..`;
  nodes.forEach(node => refs[node].classList.add('block'));
  refs.cross.addEventListener('click', closeModal);
  area.isContinue = true;
}

function closeModal() {
  refs.modalTitle.innerText = refs.modalText.innerText = '';
  nodes.forEach(node => refs[node].classList.remove('block'));
}
