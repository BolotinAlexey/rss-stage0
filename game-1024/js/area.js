import getRefs from './getRefs.js';
import Item from './item.js';
import renderItem from './renderItem.js';

const refs = getRefs();
const sizeArea =
  window.innerWidth > window.innerHeight
    ? window.innerHeight - 150
    : window.innerWidth - 150;

export default class Area {
  constructor(n) {
    refs.area.style.width = refs.area.style.height = `${sizeArea}px`;

    this.sizeItem = (sizeArea - 10 * (n + 1)) / n;

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
    this.area.forEach(row =>
      row.forEach(el => el && renderItem(el, this.sizeItem))
    );
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

  // shift matrix area to the left
  left() {
    supLeft(this.area);
  }

  // check same value in rows
  checkLeft() {
    for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div - 1; j++) {
        if (!this.area[i][j + 1] || !this.area[i][j]) break;
        if (this.area[i][j + 1].value === this.area[i][j].value) {
          this.area[i][j].value *= 2;
          this.area[i][j + 1].del();
          this.area[i][j + 1] = null;
          this.empty++;
          if (j + 2 < this.div) j++;
        }
      }
    }
    supLeft(this.area);
  }

  // shift matrix area to the right
  right() {
    supRight(this.area);
  }

  // check same value in rows
  checkRight() {
    for (let i = 0; i < this.div; i++) {
      for (let j = this.div - 1; j > 0; j--) {
        if (!this.area[i][j - 1] || !this.area[i][j]) break;

        if (this.area[i][j - 1].value === this.area[i][j].value) {
          this.area[i][j].value *= 2;

          this.area[i][j - 1].del();
          this.area[i][j - 1] = null;
          this.empty++;
          if (j > 2) j--;
        }
      }
    }
    supRight(this.area);
  }

  // shift matrix area to the top
  top() {
    supTop(this.area);
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
          if (i + 2 < this.div) i++;
        }
      }
    }
    supTop(this.area);
  }

  // shift matrix area to the bottom
  bottom() {
    supBottom(this.area);
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
          if (i > 2) i--;
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
          this.area[i][j] = new Item(j, i, 2, this.sizeItem);

          isBreak = true;
          break;
        }
        if (!this.area[i][j]) count++;
      }
      if (isBreak) break;
    }
  }
}

// supply moving function
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

function supLeft(arr) {
  let isHas;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j]) continue;

      isHas = false;
      //shift row to the left
      for (let k = j; k < arr.length - 1; k++) {
        arr[i][k] = arr[i][k + 1];

        if (arr[i][k]) arr[i][k].x = k;
        isHas = isHas || !!arr[i][k];
      }
      arr[i][arr.length - 1] = null;
      if (!isHas) break;

      // return to the previous point
      j--;
    }
  }
}

function supRight(arr) {
  let isHas;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift row to the right
      for (let k = j; k > 0; k--) {
        arr[i][k] = arr[i][k - 1];
        if (arr[i][k]) arr[i][k].x = k;
        isHas = isHas || !!arr[i][k];
      }
      arr[i][0] = null;
      if (!isHas) break;

      // return to the previous point
      j++;
    }
  }
}
