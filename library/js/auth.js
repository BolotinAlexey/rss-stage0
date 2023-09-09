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
  registerBtnCard,
  loginBtnCard,
} = ref;

window.isLogin = false;
const onProfile = e => {
  e.stopPropagation();
  if (e.target === loginBtn) {
    onToggleProfile();
    toggleModal(loginBg);
  }
  if (e.target === registerBtn) {
    onToggleProfile();
    toggleModal(registerBg);
  }
};

[
  [registerBtnCard, registerBg],
  [loginBtnCard, loginBg],
].forEach(el => {
  el[0].addEventListener('click', e => {
    // if (mobile.classList.contains('visibleMobile')) onToggleMobile();
    if (
      loginProfile.classList.contains('visible') ||
      logoutProfile.classList.contains('visible')
    ) {
      onToggleProfile();
    }

    toggleModal(el[1]);
  });
});

logoBtn.addEventListener('click', () => {
  if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  onToggleProfile();
});

logo.addEventListener('click', onProfile);

[
  loginCross,
  registerCross,
  loginBg,
  registerBg,
  loginModal,
  registerModal,
].forEach(el => el.addEventListener('click', onModal));

// loginCross.addEventListener('click', onModal);
// registerCross.addEventListener('click', onModal);

// loginBg.addEventListener('click', onModal);
// registerBg.addEventListener('click', onModal);

// loginModal.addEventListener('click', onModal);
// registerModal.addEventListener('click', onModal);
