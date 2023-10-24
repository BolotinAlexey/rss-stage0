const range = document.querySelector('#range');
const currentTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const startBtn = document.querySelector('#checkbox');
const descLink = document.querySelector('#description');
const container = document.querySelector('.container');
const view = document.querySelector('.view');
const bg = document.querySelector('.bg');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const prevSvg = document.querySelector('.prev__svg');
const nextSvg = document.querySelector('.next__svg');
const svgOn = document.querySelector('.on');
const svgOff = document.querySelector('.off');
const mute = document.querySelector('#mute');
const volume = document.querySelector('#volume');
const control = document.querySelector('.control');

const ref = {
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
  currentTime,
  duration,
  control,
};
export default ref;
