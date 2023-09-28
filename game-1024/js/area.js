import Item from './item.js';

export default class Area {
  constructor(n) {
    this.div = n;
    const temp = new Array(n).fill(true);
    this.area = temp.map(el => new Array(n).fill(null));
    // this.emptyArr = new Array(n * n).fill(true);
    this.empty = n * n;
  }
  toString() {
    this.area.forEach(console.dir);
  }
  // show items
  show() {
    this.area.forEach((row, i) => {
      console.log('-------');
      row.forEach((el, j) => console.log('[' + i + ',' + j + ']=' + el));
    });
  }

  // shift matrix area to the bottom
  top() {
    let isHas;
    for (let j = 0; j < this.div; j++) {
      for (let i = 0; i < this.div; i++) {
        if (this.area[i][j]) continue;
        isHas = false;

        //shift column to top
        for (let k = i; k < this.div - 1; k++) {
          this.area[k][j] = this.area[k + 1][j];
          isHas = isHas || !!this.area[k][j];
        }
        this.area[this.div - 1][j] = null;
        if (!isHas) break;

        // return previous point
        i--;
      }
    }
  }
  bottom() {
    let isHas;
    for (let j = 0; j < this.div; j++) {
      for (let i = this.div - 1; i >= 0; i--) {
        if (this.area[i][j]) continue;
        isHas = false;

        //shift column to the bottom
        for (let k = i; k > 0; k--) {
          this.area[k][j] = this.area[k - 1][j];
          isHas = isHas || !!this.area[k][j];
        }
        this.area[0][j] = null;
        if (!isHas) break;

        // return previous point
        i++;
      }
    }
  }

  newRandomItem() {
    const rndIndex = Math.floor(Math.random() * this.empty--);
    let isBreak,
      count = 0;
    for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div; j++) {
        // console.log(count);
        if (count === rndIndex && !this.area[i][j]) {
          this.area[i][j] = new Item(i, j, 2);
          console.log('[' + i + ',' + j + ']=');
          isBreak = true;
          break;
        }
        if (!this.area[i][j]) count++;
      }
      if (isBreak) break;
    }
  }
}
function searchNULL(arr) {
  console.log(arr);
}
