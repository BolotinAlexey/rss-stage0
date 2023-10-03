import getRefs from './getRefs.js';

const refs = getRefs();
export default function animationScore(old, now) {
  const t = 80;

  const intID = setInterval(() => {
    old += 2;
    if (old >= now) {
      clearInterval(intID);
    }
    refs.score.innerHTML = old;
  }, t);
  refs.score.innerHTML = now;
}
