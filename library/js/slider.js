const SHOW_DELAY = 6000;

let idInterval,
  currentArticle = 0;
const seasonBtns = document.querySelectorAll('.season-input');
const seasonArticles = document.querySelectorAll('.favorite__articles');

// run showArticle() function every SHOW_DELAY ms
const handleInterval = () => {
  idInterval && clearInterval(idInterval);
  idInterval = setInterval(() => {
    currentArticle = ++currentArticle % 4;
    showArticle();
  }, SHOW_DELAY);
};

// handler of season buttons press
const onClickSeasonBtn = e => {
  currentArticle = e.target.dataset.numseason;
  handleInterval();
  showArticle();
};

// fadout previous articles and fadein next atticles and change checked button
const showArticle = () => {
  // fadein-fadout articles
  const prev = document.querySelector('.show-article');
  prev.classList.replace('show-article', 'hide-article');

  const current = seasonArticles[currentArticle];
  current.classList.contains('hide-article') &&
    current.classList.remove('hide-article');
  current.classList.add('show-article');

  // change checked season input
  [...seasonBtns].find(el => el.checked).checked = false;

  const btnDisabled = [...seasonBtns].find(el => el.disabled);
  if (btnDisabled) btnDisabled.disabled = false;

  seasonBtns[currentArticle].checked = seasonBtns[
    currentArticle
  ].disabled = true;
};

// main part
seasonBtns.forEach((el, i) => {
  el.setAttribute('data-numseason', i);
  el.addEventListener('click', onClickSeasonBtn);
});

seasonArticles.forEach((el, i) => {
  el.setAttribute('data-seasonart', i);
  // el.style.zIndex = 4 - i;
});
handleInterval();
