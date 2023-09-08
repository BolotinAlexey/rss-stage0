import ref from './refs.js';

const {
  login,
  logout,
  body,
  logo,
  loginBtn,
  profileBtn,
  logoutBtn,
  registerBtn,
} = ref;

const onBody = e => {
  console.log(e.currentTarget);
  if (e.currentTarget !== logo) onToggleProfile();
};

export default function onToggleProfile() {
  if (isLogin) {
    logout.classList.replace('hide', 'visible');
    login.style.zIndex = -10;
    logout.style.zIndex = 10;
  } else {
    login.classList.toggle('hide');
    login.classList.toggle('visible');
    login.style.zIndex = 10;
    logout.style.zIndex = -10;
  }

  // addEventListener body click
  if (
    login.classList.contains('visible') ||
    logout.classList.contains('visible')
  )
    body.addEventListener('click', onBody);
  else body.removeEventListener('click', onBody);
}
