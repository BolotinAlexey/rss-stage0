import getRefs from './getRefs.js';
const { modalMessage } = getRefs();
// @param message - shown message
// @param c - array colors [red,green,blue]
export default function onMessage(message, c) {
  modalMessage.innerText = message;
  modalMessage.style.backgroundColor = `rgba(${c[0]}, ${c[1]}, ${c[2]},0.5)`;
  modalMessage.classList.add('visible');
  setTimeout(() => modalMessage.classList.remove('visible'), 3000);
}
