import ref from './refs.js';
const { cardCheckBtn, cardTitle, cardProfileInfo } = ref;
export default function logoutUser(initials) {
  // isLogin = false;
  initials.innerHTML = '';
  initials.classList.remove('display-block');
  initials.setAttribute('title', 'login');

  // !doit: move own function
  cardCheckBtn.style.display = 'block';
  cardTitle.innerHTML = 'Find your Library card';
  cardProfileInfo.style.display = 'none';

  currentUser = null;
}
