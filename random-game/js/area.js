import getRefs from './getRefs.js';
import Item from './item.js';
import renderItem from './renderItem.js';
import supTop from './auxilaryMove/supTop.js';
import supBottom from './auxilaryMove/supBottom.js';
import supLeft from './auxilaryMove/supLeft.js';
import supRight from './auxilaryMove/supRight.js';
import animationScore from './animationScore.js';

const SCORE_RATIO = 3;
const refs = getRefs();
let sizeArea = onResize();

window.addEventListener('resize', () => (sizeArea = onResize()));

export default class Area {
  constructor(n) {
    this.audioShift = new Audio('./assets/sounds/shift.mp3');
    this.audioCollapse = new Audio('./assets/sounds/collapse.mp3');
    this.audioResult = new Audio();
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
    this.isContinue = false;
    this.maxTile = 2;

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
    this.audioShift.play();
  }

  // check same value in rows
  checkLeft() {
    let coefScore = 1;
    for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div - 1; j++) {
        if (!this.area[i][j + 1] || !this.area[i][j]) break;
        if (this.area[i][j + 1].value === this.area[i][j].value) {
          this.audioCollapse.play();
          const old = this.score;
          this.score += this.area[i][j].value * SCORE_RATIO * coefScore++;
          animationScore(old, this.score);

          this.area[i][j].value *= 2;
          this.maxTile =
            this.maxTile < this.area[i][j].value
              ? this.area[i][j].value
              : this.maxTile;

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
    this.audioShift.play();
  }

  // check same value in rows
  checkRight() {
    let coefScore = 1;
    for (let i = 0; i < this.div; i++) {
      for (let j = this.div - 1; j > 0; j--) {
        if (!this.area[i][j - 1] || !this.area[i][j]) break;

        if (this.area[i][j - 1].value === this.area[i][j].value) {
          this.audioCollapse.play();
          const old = this.score;
          this.score += this.area[i][j].value * SCORE_RATIO * coefScore++;
          animationScore(old, this.score);
          this.area[i][j].value *= 2;

          this.maxTile =
            this.maxTile < this.area[i][j].value
              ? this.area[i][j].value
              : this.maxTile;
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
    this.audioShift.play();
  }

  // check same value in columns
  checkTop() {
    let coefScore = 1;
    for (let j = 0; j < this.div; j++) {
      for (let i = 0; i < this.div - 1; i++) {
        if (!this.area[i + 1][j] || !this.area[i][j]) break;
        if (this.area[i + 1][j].value === this.area[i][j].value) {
          this.audioCollapse.play();
          const old = this.score;
          this.score += this.area[i][j].value * SCORE_RATIO * coefScore++;
          animationScore(old, this.score);

          this.area[i][j].value *= 2;
          this.maxTile =
            this.maxTile < this.area[i][j].value
              ? this.area[i][j].value
              : this.maxTile;

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
    this.audioShift.play();
  }

  // check same value in columns
  checkBottom() {
    let coefScore = 1;
    for (let j = 0; j < this.div; j++) {
      for (let i = this.div - 1; i > 0; i--) {
        if (!this.area[i - 1][j] || !this.area[i][j]) break;

        if (this.area[i - 1][j].value === this.area[i][j].value) {
          this.audioCollapse.play();
          const old = this.score;
          this.score += this.area[i][j].value * SCORE_RATIO * coefScore++;
          animationScore(old, this.score);

          this.area[i][j].value *= 2;
          this.maxTile =
            this.maxTile < this.area[i][j].value
              ? this.area[i][j].value
              : this.maxTile;

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
        if (j > 0 && this.area[i][j].value === this.area[i][j - 1].value) {
          return false;
        }

        if (i > 0 && this.area[i][j].value === this.area[i - 1][j].value) {
          return false;
        }
      }
    }
    return true;
  }

  clear() {
    // this.area.forEach(row => row.forEach(el => (el = null)));
    this.audioCollapse = this.audioShift = this.audioResult = null;
    delete this.area;
    refs.score.innerHTML = '0';
    refs.score.style.right = '-60px';
  }
}

function onResize() {
  return window.innerWidth > window.innerHeight
    ? window.innerHeight - 180
    : window.innerWidth - 180;
}

function supRender(arr, sizeItem) {
  arr?.forEach(row => row.forEach(el => el && renderItem(el, sizeItem)));
}
