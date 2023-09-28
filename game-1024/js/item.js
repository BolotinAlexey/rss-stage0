import getRefs from './getRefs.js';
const refs = getRefs();
export default class Item {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;

    // create div
    this.node = document.createElement('div');
    this.node.classList.add('area__item');
    this.node.style.top = `${110 * y}px`;
    this.node.style.left = `${110 * x}px`;
    refs.area.appendChild(this.node);
  }
}
