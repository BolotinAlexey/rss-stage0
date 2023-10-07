import closeModal from './closeModal.js';
import getRefs from './getRefs.js';
import onChangeName from './onChangeName.js';

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
  refs.inputName.focus();
  const onChangeNameBind = onChangeName.bind(null, area, onArrowBind, nodes);
  refs.inputName.addEventListener('change', onChangeNameBind, { once: true });
  refs.cross.addEventListener(
    'click',
    () => {
      refs.inputName.removeEventListener('change', onChangeNameBind);
      closeModal(nodes);
    },
    { once: true }
  );
  area.isContinue = true;
}
