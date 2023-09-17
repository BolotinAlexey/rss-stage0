import def from './ref.js';
import { volumes } from './volumes.js';

const { range, startBtn, descLink, container, view, bg } = def;

let intervalId,
  current = 0,
  shift = 0;
const audio = new Audio('./assets/songs/EdSheeran–Shape_of_You.mp3');

const formDescription = ({ singer, name, genre, year }) => {
  return new Array(30)
    .fill(`${singer} "${name}" &nbsp; &nbsp; &nbsp; &nbsp;`)
    .join('');
};
const checkRange = () => {
  if (audio.duration === audio.currentTime) {
    audio.pause();
    clearInterval(intervalId);
    intervalId = null;
    range.value = 0;
    shift = 0;
    current = ++current % 3;
    audio.src = './assets/songs/' + volumes[current].path;
    descLink.innerHTML = formDescription(volumes[current]);
    bg.style.backgroundImage =
      view.style.backgroundImage = `url(./assets/images/${volumes[current].cover})`;
    startStop();
    return;
  }
  range.value = (100 * audio.currentTime) / audio.duration;
  descLink.style.transform = `translateX(-${++shift}vw)`;
};

const onRange = e => {
  clearInterval(intervalId);
  intervalId = null;

  audio.currentTime = (range.value * audio.duration) / 100;
  startStop();
};
const startStop = () => {
  if (startBtn.checked) {
    if (!intervalId) intervalId = setInterval(checkRange, 1000);
    audio.play();
    descLink.classList.add('visible');
  } else {
    descLink.classList.remove('visible');
    audio.pause();
  }
};

descLink.innerHTML = formDescription(volumes[0]);
bg.style.backgroundImage =
  view.style.backgroundImage = `url(./assets/images/${volumes[0].cover})`;
startBtn.addEventListener('input', startStop);
range.addEventListener('input', onRange);
