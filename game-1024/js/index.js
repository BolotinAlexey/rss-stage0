import getRefs from './getRefs.js';
import Area from './area.js';
import bgImage from './bgImage.js';

const refs = getRefs();
const arena = new Area(2);
bgImage();
arena.newRandomItem();
arena.render();

const onArrow = e => {
  // top
  if (e.code === 'ArrowUp') {
    arena.top();
    // arena.show();
    arena.render();
    setTimeout(() => {
      arena.checkTop();
      arena.render();

      setTimeout(() => {
        arena.newRandomItem();
        // arena.show();
        arena.render();
        checkLose();
      }, 250);
    }, 500);
  }

  // down
  if (e.code === 'ArrowDown') {
    arena.bottom();
    // arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkBottom();
      arena.render();
      // arena.show();

      setTimeout(() => {
        arena.newRandomItem();
        // arena.show();
        arena.render();
        checkLose();
      }, 250);
    }, 500);
  }

  // left
  if (e.code === 'ArrowLeft') {
    arena.left();
    // arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkLeft();
      arena.render();
      // arena.show();

      setTimeout(() => {
        arena.newRandomItem();
        // arena.show();
        arena.render();
        checkLose();
      }, 250);
    }, 500);
  }

  // right
  if (e.code === 'ArrowRight') {
    arena.right();
    // arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkRight();
      arena.render();
      // arena.show();
      setTimeout(() => {
        arena.newRandomItem();

        // arena.show();
        arena.render();
        checkLose();
      }, 250);
    }, 500);
  }
};

document.addEventListener('keyup', onArrow);

function checkLose() {
  console.log('-------->' + arena.empty);
  if (arena.empty < 0) {
    refs.bgModal.classList.add('block');
    document.removeEventListener('keyup', onArrow);
  }
}
