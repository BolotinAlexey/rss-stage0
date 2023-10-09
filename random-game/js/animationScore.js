import getRefs from './getRefs.js';

const T = 40;
const refs = getRefs();
export default function animationScore(old, arena) {
  if (old.toString().length !== arena.score.toString().length) {
    refs.score.style.right = `-${arena.score.toString().length * 30}px`;
  }

  const intID = setInterval(() => {
    old += 3;
    refs.score.innerText = old;
    if (old >= arena.score) {
      clearInterval(intID);
      refs.score.innerText = arena.score;
    }
  }, T);
}
