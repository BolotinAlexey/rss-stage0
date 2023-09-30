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
  else if (e.code === 'ArrowDown') {
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
});
