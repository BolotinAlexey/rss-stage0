import ref from './refs.js';
const {
  cardCheckBtn,
  cardTitle,
  cardProfileInfo,
  cardInputName,
  cardInputNumber,
  cardRight,
  cardRightLogin,
} = ref;
//
export default function logoutUser(initials) {
  // isLogin = false;
  initials.innerHTML = '';
  initials.classList.remove('display-block');
  initials.setAttribute('title', 'login');

  // !doit: move own function
  cardCheckBtn.style.display = 'block';
  cardTitle.innerHTML = 'Find your Library card';
  cardProfileInfo.style.display = cardRightLogin.style.display = 'none';
  cardInputName.value = cardInputNumber.value = '';
  cardRight.style.display = 'flex';

  currentUser = null;
}
