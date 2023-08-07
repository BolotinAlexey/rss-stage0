const burger = document.querySelector('.burger-wrap');
const mobile = document.querySelector('.mobile');
burger.addEventListener('click', e => mobile.classList.toggle('visibleMobile'));
