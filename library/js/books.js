import onToggleMobile from './onToggleMobile.js';
import onToggleProfile from './onToggleProfile.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { buyBtns, loginBg, loginProfile, logoutProfile, mobile } = ref;

const onBuyBtn = e => {
  // if (!currentUser) {
  //   console.log(currentUser);
  //   if (mobile.classList.contains('visibleMobile')) onToggleMobile();
  //   if (
  //     loginProfile.classList.contains('visible') ||
  //     logoutProfile.classList.contains('visible')
  //   ) {
  //     onToggleProfile();
  //   }
  //   toggleModal(loginBg);
  //   return;
  // }
};

[...buyBtns].forEach(el => el.addEventListener('click', onBuyBtn));
