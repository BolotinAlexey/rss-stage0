import getRefs from './getRefs.js';
import Area from './area.js';
import bgImage from './bgImage.js';

const refs = getRefs();
const arena = new Area(3);
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
        checkLose();
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
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
        checkLose();
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
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
        checkLose();
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
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
        checkLose();
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
  }
};

document.addEventListener('keyup', onArrow);

function checkLose() {
  if (arena.empty > 0 || !arena.checkFull()) {
    return;
  }
  refs.bgModal.classList.add('block');
  refs.modalLose.classList.add('block');
  document.removeEventListener('keyup', onArrow);
  arena.show();
}
