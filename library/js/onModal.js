import ref from './refs.js';
import regiserHadler from './registerHandler.js';
import toggleModal from './toggleModal.js';

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
} = ref;

export default function onModal(e) {
  e.stopPropagation();

  if (e.currentTarget === registerBg || e.currentTarget === registerCross) {
    toggleModal(registerBg);
    return;
  }
  if (e.currentTarget === loginBg || e.currentTarget === loginCross) {
    toggleModal(loginBg);
    return;
  }

  if (e.target === toLoginBtn || e.target === toRegisterBtn) {
    // e.preventDefault();
    toggleModal(loginBg);
    toggleModal(registerBg);
  }

  if (e.target === loginSubmit) {
    e.preventDefault();
    loginHadler();
  }
  if (e.target === registerSubmit) {
    e.preventDefault();
    regiserHadler();
  }

  // console.log(e.target);
  //   if(e.target===)
}
