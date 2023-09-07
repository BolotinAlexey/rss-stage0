// auth
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const registerBtn = document.querySelector('#registerBtn');
const profileBtn = document.querySelector('#profileBtn');
const logoBtn = document.querySelector('.logo__btn');
const login = document.querySelector('.logo__profile.logIn');
const logout = document.querySelector('.logo__profile.logOut');

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
  login,
  logout,
  burger,
  mobile,
  bg,
  body,
  logo,
};
export default ref;
