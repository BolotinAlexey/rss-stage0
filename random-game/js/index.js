import getRefs from './getRefs.js';
import Area from './area.js';
import bgImage from './bgImage.js';
import localStorageOperation from './localStorageOperation.js';

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
  if (arena.empty >= 0 && (arena.empty > 0 || !arena.checkFull())) return;

  lossCase(arena.score, arena.div);
  document.removeEventListener('keyup', onArrow);
  arena.show();
}

function lossCase(score, dimension) {
  refs.modalTitle.innerText = 'GAME OVER!';
  refs.modalText.innerText = `You scored ${score} points in when playing with ${dimension}x${dimension} dimensions. You can dial more if you choose a large dimension.`;
  refs.bgModal.classList.add('block');
  refs.modal.classList.add('block');
  refs.inputName.addEventListener('change', () =>
    localStorageOperation(score, dimension)
  );
}
