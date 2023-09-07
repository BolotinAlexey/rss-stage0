const burger = document.querySelector('.burger-wrap');
const mobile = document.querySelector('.mobile');
const bg = document.querySelector('.bg-mobile');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function onVisibleMobile(e) {
  bg.classList.toggle('visibleMobile');
  mobile.classList.toggle('visibleMobile');
  body.classList.toggle('visibleMobile');
  burger.classList.toggle('visibleMobile');
  logo.classList.toggle('visibleMobile');
}

burger.addEventListener('click', onVisibleMobile);
bg.addEventListener('click', e => {
  if (e.target === bg) {
    onVisibleMobile(e);
  }
});
mobile.addEventListener('click', e => {
  if (e.target.tagName === 'A') onVisibleMobile(e);
});
