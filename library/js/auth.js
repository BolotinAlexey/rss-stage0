import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
import onToggleProfile from './onToggleProfile.js';
import toggleModal from './toggleModal.js';
import onModal from './onModal.js';

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
  loginBg,
  registerBg,
  loginModal,
  registerModal,
  loginCross,
  registerCross,
} = ref;

window.isLogin = false;
const onProfile = e => {
  e.stopPropagation();
  console.log(e.target);
  if (e.target === loginBtn) {
    onToggleProfile();
    toggleModal(loginBg);
  }
  if (e.target === registerBtn) {
    onToggleProfile();
    toggleModal(registerBg);
  }
};

logoBtn.addEventListener('click', () => {
  if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  onToggleProfile();
});

logo.addEventListener('click', onProfile);

loginCross.addEventListener('click', onModal);
registerCross.addEventListener('click', onModal);

loginBg.addEventListener('click', onModal);
registerBg.addEventListener(
  'click',
  onModal
  // toggleModal(registerBg)
);

loginModal.addEventListener('click', onModal);
registerModal.addEventListener('click', onModal);

// loginBtn.addEventListener('click', on);
// logoutBtn.addEventListener('click', on);
// registerBtn.addEventListener('click', on);
// profileBtn.addEventListener('click', on);
