import getRefs from './getRefs.js';

const { hammerBtn, hammerCount, hammerScore } = getRefs();

export default function renderHammer(count, score) {
  hammerBtn.disabled = false;
  hammerCount.innerText = count;
  hammerScore.innerText = score;
}
