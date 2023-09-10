import ref from './refs.js';
import regiserHadler from './registerHandler.js';
import loginHadler from './loginHandler.js';
import toggleModal from './toggleModal.js';
import loginUser from './loginUser.js';

const {
  loginModal,
  registerModal,
  loginCross,
  registerCross,
  loginBg,
  registerBg,
  loginSubmit,
  registerSubmit,
  toLoginBtn,
  toRegisterBtn,
  loginForm,
  registerForm,
  profileBg,
  profileCross,
  cardModal,
  cardBg,
  cardCross,
} = ref;

export default function onModal(e) {
  e.stopPropagation();

  // close register modal
  if (e.currentTarget === registerBg || e.currentTarget === registerCross) {
    toggleModal(registerBg);
    registerForm.reset();
    return;
  }

  // close login modal
  if (e.currentTarget === loginBg || e.currentTarget === loginCross) {
    toggleModal(loginBg);
    loginForm.reset();
    return;
  }

  // close profile modal
  if (e.currentTarget === profileBg || e.currentTarget === profileCross) {
    toggleModal(profileBg);
    return;
  }

  // close buy library card modal
  if (e.currentTarget === cardBg || e.currentTarget === cardCross) {
    toggleModal(cardBg);
    return;
  }

  if (e.target === toLoginBtn || e.target === toRegisterBtn) {
    toggleModal(loginBg);
    toggleModal(registerBg);
    loginForm.reset();
    registerForm.reset();
  }

  if (e.target === loginSubmit) {
    e.preventDefault();
    const user = loginHadler();
    console.log('res');
    user && loginUser(user);
  }
  if (e.target === registerSubmit) {
    e.preventDefault();
    const user = regiserHadler();

    user && loginUser(user);
  }
}
