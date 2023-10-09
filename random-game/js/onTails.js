import getRefs from './getRefs.js';

const refs = getRefs();

export default function onTails(e, area, hammer) {
  const tail = e.target.classList.contains('area__value')
    ? e.target.parentNode
    : e.target;

  // if click not tail or hammerCount===0 or hammerBtn not active
  if (
    !tail.classList.contains('area__item') ||
    !hammer ||
    !refs.hammerBtn.classList.contains('on-hammer-btn')
  ) {
    Object.values(document.querySelectorAll('.area__item')).forEach(el => {
      el.classList.contains('on-button') && el.classList.remove('on-button');
    });
    refs.hammerBtn.classList.contains('on-hammer-btn') &&
      refs.hammerBtn.classList.remove('on-hammer-btn');
    return;
  }

  // if click on tail
  const sizeItem = parseInt(tail.style.width);
  const x = parseInt(tail.style.left) / (10 + sizeItem);
  const y = parseInt(tail.style.top) / (10 + sizeItem);

  area[y][x] = null;
  tail.remove();
  Object.values(document.querySelectorAll('.area__item')).forEach(el => {
    el.classList.contains('on-button') && el.classList.remove('on-button');
  });
  refs.hammerBtn.classList.contains('on-hammer-btn') &&
    refs.hammerBtn.classList.remove('on-hammer-btn');
  return true;
}
