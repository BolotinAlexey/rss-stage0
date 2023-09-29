import Area from './area.js';
const area = new Area(3);

area.newRandomItem();
console.log('--new');
area.show();
area.top();
console.log('--top');
area.show();
area.render();

setTimeout(() => {
  area.newRandomItem();
  console.log('--new');
  area.show();
  area.bottom();
  console.log('--top');
  area.show();
  area.render();
}, 1000);

setTimeout(() => {
  area.newRandomItem();
  console.log('--new');
  area.show();
  area.top();
  console.log('--top');
  area.show();
  area.render();
}, 2000);

setTimeout(() => {
  area.newRandomItem();
  console.log('--new');
  area.show();
  area.bottom();
  console.log('--bottom');
  area.show();
  area.render();
}, 3000);

setTimeout(() => {
  area.newRandomItem();
  console.log('--new');
  area.show();
  area.top();
  console.log('--bottom');
  area.show();
  area.render();
}, 4000);

// console.log(area.empty);
// console.log(area);
