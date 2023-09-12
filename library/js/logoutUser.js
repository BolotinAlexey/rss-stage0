import profile from './profile.js';
import ref from './refs.js';
const {
  cardCheckBtn,
  cardTitle,
  cardProfileInfo,
  cardInputName,
  cardInputNumber,
  cardRight,
  cardRightLogin,
  listBooks,
  buyBtns,
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
  currentUser.books = [];
  currentUser.bonuses = 0;
  profile(currentUser);
  listBooks.innerHTML = '';
  buyBtns.forEach(el => {
    el.innerHTML = 'Buy';
    el.disabled = false;
  });

  currentUser = null;
}
