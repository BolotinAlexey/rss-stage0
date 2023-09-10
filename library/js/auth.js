import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
import onToggleProfile from './onToggleProfile.js';
import toggleModal from './toggleModal.js';
import onModal from './onModal.js';
import logoutUser from './logoutUser.js';

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
  logoInitials,
  profileModal,
  profileCross,
  profileBg,
  cardModal,
  cardBg,
  cardCross,
} = ref;

window.currentUser = null;

const onProfile = e => {
  e.stopPropagation();
  if (e.target === logoutBtn) {
    onToggleProfile();
    logoutUser(logoInitials);
  }
  if (e.target === loginBtn) {
    onToggleProfile();
    toggleModal(loginBg);
  }
  if (e.target === registerBtn) {
    onToggleProfile();
    toggleModal(registerBg);
  }
  if (e.target === profileBtn) {
    onToggleProfile();
    toggleModal(profileBg);
  }
};

// handlers botton buttons login & register
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
  profileCross,
  profileBg,
  profileModal,
  cardModal,
  cardBg,
  cardCross,
].forEach(el => el.addEventListener('click', onModal));

// logoutBtn.addEventListener('click', () => logoutUser(logoInitials));
