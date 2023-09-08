import onToggleProfile from './onToggleProfile.js';
import ref from './refs.js';

const { burger, mobile, bg, body, logo, login, logout } = ref;

export default function onToggleMobile() {
  bg.classList.toggle('visibleMobile');
  mobile.classList.toggle('visibleMobile');
  body.classList.toggle('visibleMobile');
  burger.classList.toggle('visibleMobile');
  logo.classList.toggle('visibleMobile');

  // if (mobile.classList.contains('visibleMobile')) {
  //   if (
  //     login.classList.contains('visible') ||
  //     logout.classList.contains('visible')
  //   )
  //     onToggleProfile();
  // }
}
