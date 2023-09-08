import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
import onToggleProfile from './onToggleProfile.js';

const {
  loginBtn,
  profileBtn,
  logoutBtn,
  registerBtn,
  logoBtn,
  login,
  logout,
  mobile,
  logo,
} = ref;

window.isLogin = false;
const on = e => {
  e.stopPropagation();
};

logoBtn.addEventListener('click', () => {
  if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  onToggleProfile();
});

logo.addEventListener('click', on);
// loginBtn.addEventListener('click', on);
// logoutBtn.addEventListener('click', on);
// registerBtn.addEventListener('click', on);
// profileBtn.addEventListener('click', on);
