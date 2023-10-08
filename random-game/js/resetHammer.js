import getRefs from './getRefs.js';

const { hammerBtn, hammerCount, hammerScore } = getRefs();

export default function resetHammer(scoreHammerStart) {
  hammerScore.innerText = scoreHammerStart;
  hammerCount.innerText = '0';
  hammerBtn.disabled = true;
  if (hammerBtn.classList.contains('add-hammer'))
    hammerBtn.classList.remove('add-hammer');
}
