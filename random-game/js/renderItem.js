import itemBgColor from './itemBgColor.js';

export default function renderItem(el, sizeItem) {
  el.node.style.top = (sizeItem + 10) * el.y + 'px';
  el.node.style.left = (sizeItem + 10) * el.x + 'px';
  el.node.style.backgroundColor = itemBgColor(el.value);
  el.node.style.width = `${sizeItem}px`;
  el.node.style.height = `${sizeItem}px`;

  el.node.childNodes[0].innerText = el.value;
  el.node.childNodes[0].style.fontSize = `${sizeItem / 3}px`;
}
