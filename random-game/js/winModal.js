import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import onChangeName from './onChangeName.js';

const refs = getRefs();
const nodes = ['bgModal', 'modal', 'cross', 'labelName'];

export default function winModal(arena, onArrowBind, intID) {
  arena.audioResult.src = './assets/sounds/win.wav';
  arena.audioResult.play();
  refs.modalTitle.innerText = 'YOU WIN!';
  refs.modalText.innerText = `Your maximum tile is ${arena.maxTile}. You scored ${arena.score} points in when playing with ${arena.div}x${arena.div} dimensions. You can close this window and continue to earn points or start a new game,entering your name.`;

  nodes.forEach(node => {
    refs[node].classList.add('block');
  });
  refs.inputName.focus();
  const onChangeNameBind = onChangeName.bind(null, arena, onArrowBind, nodes);
  refs.inputName.addEventListener('change', onChangeNameBind, { once: true });
  refs.cross.addEventListener(
    'click',
    () => {
      refs.inputName.removeEventListener('change', onChangeNameBind);
      closeModal(nodes);
    },
    { once: true }
  );
  arena.isContinue = true;
  clearInterval(arena.intID);
  refs.score.innerText = arena.score;
}
