import itemBgColor from './itemBgColor.js';

export default function renderItem(el) {
  el.node.style.top = 110 * el.y + 'px';
  el.node.style.left = 110 * el.x + 'px';
  el.node.style.backgroundColor = itemBgColor(el.value);
  el.node.innerText = el.value;
}
