import ref from './refs.js';

const { loginProfile, logoutProfile, body, logo } = ref;

const onBody = e => {
  console.log(e.currentTarget);
  if (e.currentTarget !== logo) onToggleProfile();
};

export default function onToggleProfile() {
  if (currentUser) {
    logoutProfile.classList.toggle('hide');
    logoutProfile.classList.toggle('visible');
    loginProfile.style.zIndex = -10;
    logoutProfile.style.zIndex = 10;
  } else {
    loginProfile.classList.toggle('hide');
    loginProfile.classList.toggle('visible');
    loginProfile.style.zIndex = 10;
    logoutProfile.style.zIndex = -10;
  }

  // addEventListener body click
  if (
    loginProfile.classList.contains('visible') ||
    logoutProfile.classList.contains('visible')
  )
    body.addEventListener('click', onBody);
  else body.removeEventListener('click', onBody);
}
