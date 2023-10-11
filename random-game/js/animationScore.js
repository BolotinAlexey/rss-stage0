import getRefs from './getRefs.js';

const T = 40;
const refs = getRefs();
export default function animationScore(old, arena) {
  clearInterval(arena.intID);
  if (old.toString().length !== arena.score.toString().length) {
    refs.score.style.right = `-${arena.score.toString().length * 30}px`;
  }

  arena.intID = setInterval(() => {
    old += 3;
    refs.score.innerText = old;
    if (old >= arena.score) {
      clearInterval(arena.intID);
      refs.score.innerText = arena.score;
    }
  }, T);
}
