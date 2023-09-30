import Area from './area.js';

const arena = new Area(3);

arena.newRandomItem();
// console.log('--new');
// arena.show();
arena.render();

document.addEventListener('keyup', e => {
  // top
  if (e.code === 'ArrowUp') {
    arena.top();
    arena.show();
    arena.render();
    setTimeout(() => {
      arena.checkTop();
      arena.render();

      setTimeout(() => {
        arena.newRandomItem();
        arena.show();
        arena.render();
      }, 250);
    }, 500);
  }

  // down
  if (e.code === 'ArrowDown') {
    arena.bottom();
    arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkBottom();
      arena.render();
      arena.show();
      setTimeout(() => {
        arena.newRandomItem();

        arena.show();
        arena.render();
      }, 250);
    }, 500);
  }
  // left
  if (e.code === 'ArrowLeft') {
    console.log('left');
    arena.left();
    arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkLeft();
      arena.render();
      arena.show();
      setTimeout(() => {
        arena.newRandomItem();

        arena.show();
        arena.render();
      }, 250);
    }, 500);
  }

  // right
  if (e.code === 'ArrowRight') {
    console.log('right');
    arena.right();
    arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkRight();
      arena.render();
      arena.show();
      setTimeout(() => {
        arena.newRandomItem();

        arena.show();
        arena.render();
      }, 250);
    }, 500);
  }
});

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
