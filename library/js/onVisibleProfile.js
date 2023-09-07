import ref from './refs.js';

export default function onVisibleProfile() {
  if (isLogin) {
    ref.logout.classList.replace('hide', 'visible');
  } else {
    ref.login.classList.toggle('hide');
    ref.login.classList.toggle('visible');
  }
}
