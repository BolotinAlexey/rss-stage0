import onToggleProfile from './onToggleProfile.js';

export default function logoutUser(initials) {
  onToggleProfile();
  isLogin = false;
  initials.innerHTML = '';
  initials.classList.remove('display-block');
  initials.setAttribute('title', 'login');
}
