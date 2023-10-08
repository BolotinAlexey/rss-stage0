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
    old += 3;
    if (old >= now) {
      clearInterval(intID);
      console.log('IDnow= ', now, 'IDold= ', old);
      refs.score.innerText = now;
    }
    refs.score.innerText = old;
  }, t);

  console.log('now= ', now, 'old= ', old);
}
