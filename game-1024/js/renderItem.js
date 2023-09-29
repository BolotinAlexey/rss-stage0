export default function renderItem(el) {
  el.node.style.top = 110 * el.y + 'px';
  el.node.style.left = 110 * el.x + 'px';
}
