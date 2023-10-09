import getRefs from './getRefs.js';
import Area from './area.js';
import bgImage from './bgImage.js';
import winModal from './winModal.js';
import lossModal from './loseModal.js';
import tableShow from './tableShow.js';
import onTails from './onTails.js';
import currentSize from './onResize.js';
import supRender from './supRender.js';

const WIN_TILE = 256;
const refs = getRefs();

let previousGame, onArrowBind, tailListenerBind, onResizeBind;
refs.newGame.addEventListener('click', runGame);
refs.tableButton.addEventListener('click', tableShow);

function runGame() {
  refs.newGame.classList.contains('shake-rotate') &&
    refs.newGame.classList.remove('shake-rotate');

  refs.area.innerHTML = '';

  // clear listeners previous game
  previousGame && document.removeEventListener('keyup', onArrowBind);

  previousGame && refs.area.removeEventListener('click', tailListenerBind);

  previousGame && window.addEventListener('resize', onResizeBind);

  previousGame?.clear();

  //
  refs.inputChange.addEventListener('change', bgImage);
  const arena = new Area(+refs.inputDimension.value);
  bgImage();
  arena.newRandomItem();
  arena.render();

  // onArrow
  onArrowBind = onArrow.bind(null, arena);
  document.addEventListener('keyup', onArrowBind);

  // tailListener
  tailListenerBind = tailListener.bind(null, arena);
  refs.area.addEventListener('click', tailListenerBind);

  // onResize
  onResizeBind = onResize.bind(null, arena);
  window.addEventListener('resize', onResizeBind);
  return arena;
}

// check is lose
function checkLose(arena) {
  if (arena.empty >= 0 && (arena.empty > 0 || !arena.checkFull())) return;
  arena.audioResult.src = './assets/sounds/gameOver.wav';
  arena.audioResult.play();
  lossModal(arena, onArrowBind);
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
      arena.maxTile === WIN_TILE &&
        !arena.isContinue &&
        winModal(arena, onArrowBind);

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
      arena.maxTile === WIN_TILE &&
        !arena.isContinue &&
        winModal(arena, onArrowBind);
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
      arena.maxTile === WIN_TILE &&
        !arena.isContinue &&
        winModal(arena, onArrowBind);
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
      arena.maxTile === WIN_TILE &&
        !arena.isContinue &&
        winModal(arena, onArrowBind);
      setTimeout(() => {
        arena.empty && arena.newRandomItem();
        checkLose(arena);
        // arena.show();
        arena.render();
      }, 100);
    }, 200);
  }
}

// listener tails
function tailListener(arena, e) {
  if (onTails(e, arena.area, arena.hammer)) {
    arena.empty++;
    // decrease hammer count and render
    refs.hammerCount.innerText = --arena.hammer;

    if (!arena.hammer) {
      refs.hammerBtn.classList.contains('add-hammer') &&
        refs.hammerBtn.classList.remove('add-hammer');
      refs.hammerBtn.disabled = true;
    }
  }
}

previousGame = runGame();

function onResize(arena) {
  arena.sizeArea = currentSize();
  refs.area.style.width = refs.area.style.height = `${arena.sizeArea}px`;

  arena.sizeItem = (arena.sizeArea - 10 * (arena.div + 1)) / arena.div;
  supRender(arena.area, arena.sizeItem);
}
