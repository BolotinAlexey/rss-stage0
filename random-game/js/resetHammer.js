import getRefs from './getRefs.js';

const { hammerBtn, hammerCount, hammerScore } = getRefs();

export default function resetHammer(scoreHammerStart) {
  hammerScore.innerText = scoreHammerStart;
  hammerCount.innerText = '0';
  hammerBtn.disabled = true;
}
