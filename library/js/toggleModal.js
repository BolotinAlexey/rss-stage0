import ref from './refs.js';

const { loginModal } = ref;
export default function toggleModal(el) {
  el.classList.replace('hide', 'visible');
}
