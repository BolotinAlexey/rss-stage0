// auth
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const registerBtn = document.querySelector('#registerBtn');
const loginBtnCard = document.querySelector('#card__login');
const registerBtnCard = document.querySelector('#card__register');
const profileBtn = document.querySelector('#profileBtn');
const logoBtn = document.querySelector('.logo__btn');
const loginProfile = document.querySelector('.login__profile');
const logoutProfile = document.querySelector('.logout__profile');

// mobile menu
const burger = document.querySelector('.burger-wrap');
const mobile = document.querySelector('.mobile');
const bg = document.querySelector('.bg-mobile');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const logoInitials = document.querySelector('.logo__initials');
const logoSvg = document.querySelector('.logo__svg');

// modals
const loginBg = document.querySelector('.login');
const registerBg = document.querySelector('.register');

const loginModal = document.querySelector('.login__modal');
const registerModal = document.querySelector('.register__modal');
const loginCross = document.querySelector('.login .modal__cross');
const registerCross = document.querySelector('.register .modal__cross');
const loginSubmit = document.querySelector('.login__submit');
const registerSubmit = document.querySelector('.register__submit');
const loginForm = document.querySelector('.login__form');
const registerForm = document.querySelector('.register__form');
const toRegisterBtn = document.querySelector('.login__question');
const toLoginBtn = document.querySelector('.register__question');
const nameProfile = document.querySelector('#name-profile');

// books
const buyBtns = document.querySelectorAll('.article__btn');

// Profile modal
const profileModal = document.querySelector('.myprofile__modal');
const profileBg = document.querySelector('.myprofile');
const profileCross = document.querySelector('.myprofile .modal__cross');
// ---
const visits = document.querySelector('.visits .information__count');
const bonuses = document.querySelector('.bonuses .information__count');
const books = document.querySelector('.books .information__count');
const cardNumber = document.querySelector('.card-number');

// Library card module
const cardModal = document.querySelector('.library__modal');
const cardBg = document.querySelector('.library');
const cardCross = document.querySelector('.library .modal__cross');
const buyCardSubmit = document.querySelector('.buy__submit');
const buyForm = document.querySelector('.library__form ');

const ref = {
  loginBtn,
  profileBtn,
  logoutBtn,
  registerBtn,
  logoBtn,
  loginProfile,
  logoutProfile,
  burger,
  mobile,
  bg,
  body,
  logo,
  loginModal,
  registerModal,
  loginCross,
  registerCross,
  profileCross,
  loginBg,
  registerBg,
  profileBg,
  loginSubmit,
  registerSubmit,
  toLoginBtn,
  toRegisterBtn,
  loginForm,
  registerForm,
  logoInitials,
  logoSvg,
  loginBtnCard,
  registerBtnCard,
  nameProfile,
  buyBtns,
  profileModal,
  visits,
  bonuses,
  books,
  cardNumber,
  cardModal,
  cardBg,
  cardCross,
  buyCardSubmit,
  buyForm,
};
export default ref;
