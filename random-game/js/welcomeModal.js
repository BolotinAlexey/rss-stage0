import closeModal from './closeModal.js';
import { DELAY_WELCOME } from './constants.js';
import getRefs from './getRefs.js';

const refs = getRefs();
const nodes = ['bgModal', 'modal'];

export default function welcomeModal() {
  refs.modalTitle.innerText = 'Welcome to 1024!';
  refs.modalText.innerHTML = `Your task, perced tiles WASD or arrows on the keyboard, dial the maximum tile 1024. Tiles, the same in value, are chopped in the direction of movement and summarized.</br></br><span class='good-luck'>GOOD LUCK!</span>`;

  nodes.forEach(node => {
    refs[node].classList.add('block');
  });

  setTimeout(() => closeModal(nodes), DELAY_WELCOME);
}
