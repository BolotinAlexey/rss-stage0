import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
import onToggleProfile from './onToggleProfile.js';
import toggleModal from './toggleModal.js';

const {
  loginBtn,
  profileBtn,
  logoutBtn,
  registerBtn,
  logoBtn,
  loginProfile,
  logoutProfile,
  mobile,
  logo,
  loginModal,
  registerModal,
} = ref;

window.isLogin = false;
const onProfile = e => {
  e.stopPropagation();
  console.log(e.target);
  if (e.target === loginBtn) toggleModal(loginModal);
  if (e.target === registerBtn) toggleModal(registerModal);
};

logoBtn.addEventListener('click', () => {
  if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  onToggleProfile();
});

logo.addEventListener('click', onProfile);
// loginBtn.addEventListener('click', on);
// logoutBtn.addEventListener('click', on);
// registerBtn.addEventListener('click', on);
// profileBtn.addEventListener('click', on);
