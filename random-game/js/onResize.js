export default function currentSize() {
  return window.innerWidth > window.innerHeight
    ? window.innerHeight - 180
    : window.innerWidth - 180;
}
