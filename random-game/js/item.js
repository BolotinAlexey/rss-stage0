import getRefs from './getRefs.js';
const refs = getRefs();
export default class Item {
  constructor(x, y, value, sizeItem) {
    this.x = x;
    this.y = y;
    this.value = value;

    // create div
    this.node = document.createElement('div');
    this.node.classList.add('area__item');

    this.node.style.width = this.node.style.height = `${sizeItem}px`;

    this.node.style.top = `${(sizeItem + 10) * y}px`;
    this.node.style.left = `${(sizeItem + 10) * x}px`;
    refs.area.appendChild(this.node);

    // create p
    this.p = document.createElement('p');
    this.p.classList.add('area__value');
    this.node.appendChild(this.p);
  }
  del() {
    this.node.remove();
  }
}
