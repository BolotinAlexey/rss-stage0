import getRefs from './getRefs.js';
import Area from './area.js';
import bgImage from './bgImage.js';
import winModal from './winModal.js';
import lossModal from './loseModal.js';
import tableShow from './tableShow.js';

const WIN_TILE = 8;
const refs = getRefs();

let previousGame, onArrowBind;
refs.newGame.addEventListener('click', runGame);
refs.tableButton.addEventListener('click', tableShow);

function runGame() {
  if (refs.newGame.classList.contains('shake-rotate'))
    refs.newGame.classList.remove('shake-rotate');
  refs.area.innerHTML = '';
  previousGame && document.removeEventListener('keyup', onArrowBind);
  previousGame?.clear();
  refs.inputChange.addEventListener('change', bgImage);
  const arena = new Area(+refs.inputDimension.value);
  bgImage();
  arena.newRandomItem();
  arena.render();

  onArrowBind = onArrow.bind(null, arena);

  document.addEventListener('keyup', onArrowBind);
  return arena;
}

// check is lose
function checkLose(arena) {
  if (arena.empty >= 0 && (arena.empty > 0 || !arena.checkFull())) return;
  arena.audioResult.src = './assets/sounds/gameOver.wav';
  arena.audioResult.play();
  lossModal(arena);
  document.removeEventListener('keyup', onArrowBind);
}

// handler arrow keys
function onArrow(arena, e) {
  refs.inputDimension.blur();
  // top
  if (e.code === 'ArrowUp') {
    arena.top();
    // arena.show();
    arena.render();

    setTimeout(() => {
      arena.checkTop();
      arena.render();
      arena.maxTile === WIN_TILE && !arena.isContinue && winModal(arena);

      setTimeout(() => {
        arena.empty && arena.newRandomItem();
        checkLose(arena);
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
      arena.maxTile === WIN_TILE && !arena.isContinue && winModal(arena);
      setTimeout(() => {
        arena.empty && arena.newRandomItem();
        checkLose(arena);
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
      arena.maxTile === WIN_TILE && !arena.isContinue && winModal(arena);
      setTimeout(() => {
        arena.empty && arena.newRandomItem();
        checkLose(arena);
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
      arena.maxTile === WIN_TILE && !arena.isContinue && winModal(arena);
      setTimeout(() => {
        arena.empty && arena.newRandomItem();
        checkLose(arena);
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
  }
}

previousGame = runGame();
