import getRefs from './getRefs.js';
import Item from './item.js';
import renderItem from './renderItem.js';
import supTop from './auxilaryMove/supTop.js';
import supBottom from './auxilaryMove/supBottom.js';
import supLeft from './auxilaryMove/supLeft.js';
import supRight from './auxilaryMove/supRight.js';

const refs = getRefs();
let sizeArea = onResize();

window.addEventListener('resize', () => (sizeArea = onResize()));

export default class Area {
  constructor(n) {
    window.addEventListener('resize', () => {
      sizeArea = onResize();
      refs.area.style.width = refs.area.style.height = `${sizeArea}px`;

      this.sizeItem = (sizeArea - 10 * (n + 1)) / n;
      supRender(this.area, this.sizeItem);
    });

    refs.area.style.width = refs.area.style.height = `${sizeArea}px`;

    this.sizeItem = (sizeArea - 10 * (n + 1)) / n;
    this.score = 0;
    this.div = n;

    const temp = new Array(n).fill(true);
    this.area = temp.map(el => new Array(n).fill(null));

    this.empty = n * n;
  }

  toString() {
    this.area.forEach(console.dir);
  }

  // rendering area
  render() {
    supRender(this.area, this.sizeItem);
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

  checkFull() {
    for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div; j++) {
        // if (j > 0)
        //   console.log(
        //     '[',
        //     i,
        //     ',',
        //     j,
        //     ']=',
        //     this.area[i][j].value,
        //     '   [',
        //     i,
        //     ',',
        //     j - 1,
        //     ']=',
        //     this.area[i][j - 1].value
        //   );

        // if (i > 0)
        //   console.log(
        //     '[',
        //     i,
        //     ',',
        //     j,
        //     ']=',
        //     this.area[i][j].value,
        //     '   [',
        //     i - 1,
        //     ',',
        //     j,
        //     ']=',
        //     this.area[i - 1][j].value
        //   );

        if (j > 0 && this.area[i][j].value === this.area[i][j - 1].value) {
          console.log(this.area[i][j].value + 'x');
          return false;
        }

        if (i > 0 && this.area[i][j].value === this.area[i - 1][j].value) {
          console.log(this.area[j][i].value + 'y');
          return false;
        }
      }
    }
    return true;
  }
}

function onResize() {
  return window.innerWidth > window.innerHeight
    ? window.innerHeight - 150
    : window.innerWidth - 150;
}

function countSizes(sizeArea) {}
function supRender(arr, sizeItem) {
  arr.forEach(row => row.forEach(el => el && renderItem(el, sizeItem)));
}
