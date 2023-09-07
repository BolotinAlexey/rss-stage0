import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
import onVisibleProfile from './onVisibleProfile.js';

const {
  loginBtn,
  profileBtn,
  logoutBtn,
  registerBtn,
  logoBtn,
  login,
  logout,
  mobile,
} = ref;

window.isLogin = false;
const onProfile = () => {
  //
};
logoBtn.addEventListener('click', () => {
  if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  onVisibleProfile();
});
