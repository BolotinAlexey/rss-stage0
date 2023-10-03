import getRefs from './getRefs.js';

const refs = getRefs();
export default function animationScore(old, now) {
  if (old.toString().length !== now.toString().length) {
    if (now > 99) refs.score.style.right = '-90px';
    if (now > 999) refs.score.style.right = '-120px';
    if (now > 9999) refs.score.style.right = '-150px';
    if (now > 99999) refs.score.style.right = '-180px';
  }
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
