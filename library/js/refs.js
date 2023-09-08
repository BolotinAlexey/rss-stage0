// auth
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const registerBtn = document.querySelector('#registerBtn');
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

// modals
const loginBg = document.querySelector('.login');
const registerBg = document.querySelector('.register');
const loginModal = document.querySelector('.login__modal');
const registerModal = document.querySelector('.register__modal');
const loginCross = document.querySelector('.login .modal__cross');
const registerCross = document.querySelector('.register .modal__cross');

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
  loginBg,
  registerBg,
};
export default ref;
