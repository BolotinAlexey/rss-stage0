import Area from './area.js';
import bgImage from './bgImage.js';

const arena = new Area(3);
bgImage();
arena.newRandomItem();
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
