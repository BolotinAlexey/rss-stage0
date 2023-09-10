export default function logoutUser(initials) {
  isLogin = false;
  initials.innerHTML = '';
  initials.classList.remove('display-block');
  initials.setAttribute('title', 'login');
}
