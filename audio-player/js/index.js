import def from './ref.js';

const { range, startBtn } = def;

let intervalId, rangeValue, current;
const audio = new Audio('./assets/songs/EdSheeran–Shape_of_You.mp3');
const checkRange = () => {
  range.value = (100 * audio.currentTime) / audio.duration;
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
  } else audio.pause();
};

startBtn.addEventListener('input', startStop);
range.addEventListener('input', onRange);
