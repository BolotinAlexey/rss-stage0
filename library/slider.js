const SHOW_DELAY = 6000;

let currentArticle = 0;
const seasonBtns = document.querySelectorAll('.season-input');
const seasonArticles = document.querySelectorAll('.favorite__articles');

const idTimeout = new Array(4);
const idInterval = new Array(4);

const onClickSeasonBtn = e => {
  //   console.log(e.target.dataset.numseason);
};

// const showArticle = () => {
//   // const currentArticle = document.querySelector(`[data-seasonart='${i}']`);
//   document.querySelector('.show-article').classList.remove('show-article');

//   seasonArticles[++currentSlide % 4].classList.add('show-article');
// };

// const setIntervalCustom = i => {
//     showArticle(i);
//   idInterval[i] = setInterval(showArticle, SHOW_DELAY * 4, i);
// };

const showArticle = () => {
  const prev = document.querySelector('.show-article');
  prev.classList.remove('show-article');
  prev.classList.add('hide-article');
  currentArticle = ++currentArticle % 4;
  const current = seasonArticles[currentArticle];
  if (current.classList.contains('hide-article'))
    current.classList.remove('hide-article');
  current.classList.add('show-article');
};

seasonBtns.forEach((el, i) => {
  el.setAttribute('data-numseason', i);
  el.addEventListener('click', onClickSeasonBtn);
});

// seasonArticles.forEach((el, i) => {
//   el.setAttribute('data-seasonart', i);
//   idTimeout[i] = setTimeout(setIntervalCustom, SHOW_DELAY * i, i);
// });

seasonArticles.forEach((el, i) => {
  el.setAttribute('data-seasonart', i);
  //   idInterval[i] = setInterval(setIntervalCustom, SHOW_DELAY * i, i);
});
const id = setInterval(showArticle, SHOW_DELAY);
