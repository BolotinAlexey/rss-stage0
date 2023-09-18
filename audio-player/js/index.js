import def from './ref.js';
import { volumes } from './volumes.js';

const {
  range,
  startBtn,
  descLink,
  container,
  view,
  bg,
  prev,
  next,
  prevSvg,
  nextSvg,
  mute,
  volume,
  svgOff,
  svgOn,
} = def;

let intervalId,
  current = 0,
  shift = 0;
const audio = new Audio('./assets/songs/EdSheeran–Shape_of_You.mp3');

const onMute = () => {
  {
    audio.muted = mute.checked;

    mute.checked &&
      svgOn.classList.contains('hidden') &&
      svgOn.classList.remove('hidden');
    mute.checked && svgOff.classList.add('hidden');

    !mute.checked &&
      svgOff.classList.contains('hidden') &&
      svgOff.classList.remove('hidden');
    !mute.checked && svgOn.classList.add('hidden');
  }
};

const changeTrack = current => {
  audio.pause();
  clearInterval(intervalId);
  intervalId = null;
  range.value = 0;
  shift = shift % 50;
  audio.src = './assets/songs/' + volumes[current].path;
  descLink.innerHTML = formDescription(volumes[current]);
  bg.style.backgroundImage =
    view.style.backgroundImage = `url(./assets/images/${volumes[current].cover})`;
  startStop();
};
const onPrev = () => {
  prevSvg.classList.add('shift');
  setTimeout(() => prevSvg.classList.remove('shift'), 1000);
  current = (current + 2) % 3;
  changeTrack(current);
};
const onNext = () => {
  nextSvg.classList.add('shift-reverse');
  setTimeout(() => nextSvg.classList.remove('shift-reverse'), 1000);
  current = ++current % 3;
  changeTrack(current);
};
const formDescription = ({ singer, name, genre, year }) => {
  return new Array(30)
    .fill(
      `${singer}&nbsp; &nbsp; <span>${name}</span> &nbsp; &nbsp; &nbsp; &nbsp;`
    )
    .join('');
};

const checkRange = () => {
  if (audio.duration === audio.currentTime) {
    current = ++current % 3;
    changeTrack(current);
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
  if (intervalId) clearInterval(intervalId);

  if (startBtn.checked) {
    intervalId = setInterval(checkRange, 1000);
    audio.play();
    // descLink.classList.add('visible');
  } else {
    // descLink.classList.remove('visible');
    audio.pause();
  }
};

descLink.innerHTML = formDescription(volumes[0]);
bg.style.backgroundImage =
  view.style.backgroundImage = `url(./assets/images/${volumes[0].cover})`;
startBtn.addEventListener('input', startStop);
range.addEventListener('input', onRange);
prev.addEventListener('click', onPrev);
next.addEventListener('click', onNext);
mute.addEventListener('change', onMute);
