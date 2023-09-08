// auth
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const registerBtn = document.querySelector('#registerBtn');
const profileBtn = document.querySelector('#profileBtn');
const logoBtn = document.querySelector('.logo__btn');
const loginProfile = document.querySelector('.login__profile');
const logoutProfile = document.querySelector('.logout__profile');
const loginModal = document.querySelector('.login');
const registerModal = document.querySelector('.register');

// mobile menu
const burger = document.querySelector('.burger-wrap');
const mobile = document.querySelector('.mobile');
const bg = document.querySelector('.bg-mobile');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

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
};
export default ref;
