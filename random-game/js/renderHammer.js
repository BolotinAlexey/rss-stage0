import getRefs from './getRefs.js';

const { hammerBtn, hammerCount, hammerScore } = getRefs();

export default function renderHammer(count, score) {
  //   console.log(count, score);
  hammerBtn.classList.add('add-hammer');
  hammerBtn.disabled = false;
  hammerCount.innerText = count;
  hammerScore.innerText = score;
}
