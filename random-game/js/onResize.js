export default function currentSize() {
  const left = document.querySelector('.game__left').style;
  const right = document.querySelector('.game__right').style;
  if (window.innerWidth < 520) {
    left.transform = right.transform = `scale(${window.innerWidth / 520})`;
    left.top = right.top = `${-(512 / window.innerWidth - 1) * 100}px`;
  } else {
    left.transform = right.transform = `scale(1)`;
    left.top = right.top = `0px`;
  }
  return window.innerWidth > window.innerHeight
    ? window.innerHeight - 180
    : window.innerWidth - 180;
}
