import profile from './profile.js';
import ref from './refs.js';
//
const {
  cardProfileInfo,
  cardInputName,
  cardInputNumber,
  cardCheckBtn,
  cardForm,
} = ref;
export default function cardShow() {
  const users = JSON.parse(localStorage.getItem('users'));

  const findUser = [...users].find(
    ({ card, name, surname }) =>
      name.toLowerCase() + surname.toLowerCase() ===
        cardInputName.value.replaceAll(' ', '').toLowerCase() &&
      card.toLowerCase() ===
        cardInputNumber.value.replaceAll(' ', '').toLowerCase()
  );

  if (!findUser) return;

  cardCheckBtn.style.display = 'none';

  cardProfileInfo.style.display = 'flex';

  profile(findUser);

  setTimeout(() => {
    cardCheckBtn.style.display = 'block';
    cardForm.reset();
    cardProfileInfo.style.display = 'none';
    profile({ userCount: 0, books: [], bonuses: 0 });
  }, 10000);
}
