import getRefs from './getRefs.js';
import Item from './item.js';
import renderItem from './renderItem.js';

const refs = getRefs();

export default class Area {
  constructor(n) {
    refs.area.style.width = `${110 * n}px`;
    refs.area.style.height = `${110 * n}px`;

    this.div = n;
    const temp = new Array(n).fill(true);
    this.area = temp.map(el => new Array(n).fill(null));
    // this.emptyArr = new Array(n * n).fill(true);
    this.empty = n * n;
  }
  toString() {
    this.area.forEach(console.dir);
  }

  // rendering area
  render() {
    this.area.forEach(row => row.forEach(el => el && renderItem(el)));
  }

  // show items
  show() {
    console.log('-------------------------------------');
    console.log('empty:' + this.empty);
    this.area.forEach((row, i) => {
      console.log('-------');
      row.forEach((el, j) =>
        console.log('[' + i + ',' + j + ']=' + el?.y, el?.x, el?.value)
      );
    });
  }

  // shift matrix area to the top
  top() {
    supTop(this.area);
    // let isHas;
    // for (let j = 0; j < this.div; j++) {
    //   for (let i = 0; i < this.div; i++) {
    //     if (this.area[i][j]) continue;
    //     isHas = false;

    //     //shift column to top
    //     for (let k = i; k < this.div - 1; k++) {
    //       this.area[k][j] = this.area[k + 1][j];
    //       // console.log(this.area[k][j]);
    //       if (this.area[k][j]) this.area[k][j].y = k;
    //       isHas = isHas || !!this.area[k][j];
    //     }
    //     this.area[this.div - 1][j] = null;
    //     if (!isHas) break;

    //     // return to the previous point
    //     i--;
    //   }
    // }
  }

  // check same value in columns
  checkTop() {
    for (let j = 0; j < this.div; j++) {
      for (let i = 0; i < this.div - 1; i++) {
        if (!this.area[i + 1][j] || !this.area[i][j]) break;
        if (this.area[i + 1][j].value === this.area[i][j].value) {
          this.area[i][j].value *= 2;
          console.log(this.area[i + 1][j]);
          console.log('del:', [i + 1], [j], 'val:', this.area[i + 1][j].value);
          this.area[i + 1][j].del();
          this.area[i + 1][j] = null;
          this.empty++;
        }
      }
    }
    supTop(this.area, 'check');
  }

  // shift matrix area to the bottom
  bottom() {
    supBottom(this.area);
    // let isHas;
    // for (let j = 0; j < this.div; j++) {
    //   for (let i = this.div - 1; i >= 0; i--) {
    //     if (this.area[i][j]) continue;
    //     isHas = false;

    //     //shift column to the bottom
    //     for (let k = i; k > 0; k--) {
    //       this.area[k][j] = this.area[k - 1][j];
    //       if (this.area[k][j]) this.area[k][j].y = k;
    //       isHas = isHas || !!this.area[k][j];
    //     }
    //     this.area[0][j] = null;
    //     if (!isHas) break;

    //     // return to the previous point
    //     i++;
    //   }
    // }
  }

  // check same value in columns
  checkBottom() {
    for (let j = 0; j < this.div; j++) {
      for (let i = this.div - 1; i > 0; i--) {
        if (!this.area[i - 1][j] || !this.area[i][j]) break;

        if (this.area[i - 1][j].value === this.area[i][j].value) {
          this.area[i][j].value *= 2;
          console.log(this.area[i - 1][j]);
          console.log('del:', [i - 1], [j], 'val:', this.area[i - 1][j].value);
          this.area[i - 1][j].del();
          this.area[i - 1][j] = null;
          this.empty++;
        }
      }
    }
    supBottom(this.area);
  }

  newRandomItem() {
    const rndIndex = Math.floor(Math.random() * this.empty--);
    let isBreak,
      count = 0;
    for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div; j++) {
        // console.log(count);
        if (count === rndIndex && !this.area[i][j]) {
          this.area[i][j] = new Item(j, i, 2);
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
function supTop(arr) {
  let isHas;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift column to top
      for (let k = i; k < arr.length - 1; k++) {
        arr[k][j] = arr[k + 1][j];

        if (arr[k][j]) arr[k][j].y = k;
        isHas = isHas || !!arr[k][j];
      }
      arr[arr.length - 1][j] = null;
      if (!isHas) break;

      // return to the previous point
      i--;
    }
  }
}

function supBottom(arr) {
  let isHas;
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift column to the bottom
      for (let k = i; k > 0; k--) {
        arr[k][j] = arr[k - 1][j];
        if (arr[k][j]) arr[k][j].y = k;
        isHas = isHas || !!arr[k][j];
      }
      arr[0][j] = null;
      if (!isHas) break;

      // return to the previous point
      i++;
    }
  }
}
