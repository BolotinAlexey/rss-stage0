const control = document.querySelectorAll('.pagination__btn');
const slider = document.querySelector('.about__list');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
let currentSlide = 0;

const toggleCurrentButton = current => {
  document.querySelector('.current-slide').classList.remove('current-slide');
  document
    .querySelector(`[data-number = '${current}']`)
    .classList.add('current-slide');
};

const onClick = e => {
  currentSlide = +e.target.dataset.number;
  toggleCurrentButton(currentSlide);

  if (window.innerWidth > 1420)
    slider.style.left = `calc(${-33.33333 * currentSlide}% - ${
      8 * currentSlide
    }px)`;
  else if (window.innerWidth > 1024)
    slider.style.left = `calc(${-50 * currentSlide}% - ${16 * currentSlide}px)`;
  else {
    slider.style.left = `calc(${-100 * currentSlide}% - ${
      14 * currentSlide
    }px)`;
    prev.disabled = currentSlide === 0 ? true : false;
    next.disabled = currentSlide === 4 ? true : false;
  }
};

const onPrevious = () => {
  next.disabled = false;
  slider.style.left = `calc(${-100 * --currentSlide}% - ${
    14 * currentSlide
  }px)`;
  if (currentSlide === 0) prev.disabled = true;
  toggleCurrentButton(currentSlide);
};
const onNext = () => {
  prev.disabled = false;
  slider.style.left = `calc(${-100 * ++currentSlide}% - ${
    14 * currentSlide
  }px)`;
  if (currentSlide === 4) next.disabled = true;
  toggleCurrentButton(currentSlide);
};

control.forEach((el, i) => {
  el.addEventListener('click', onClick);
  el.setAttribute('data-number', i);
});
prev.addEventListener('click', onPrevious);
next.addEventListener('click', onNext);
