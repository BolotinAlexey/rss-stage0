import ref from './refs.js';
import profile from './profile.js';

const {
  logoInitials,
  nameProfile,
  cardCheckBtn,
  cardProfileInfo,
  cardTitle,
  cardInputName,
  cardInputNumber,
} = ref;

export default function loginUser(user) {
  let { name, surname, card, loginCount } = user;

  const avatar =
    name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
  logoInitials.innerHTML = avatar;
  logoInitials.classList.add('display-block');
  logoInitials.setAttribute('title', name + ' ' + surname);
  nameProfile.innerHTML = card;

  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const withoutUser = [...oldUsers].filter(el => el.card !== card);

  user = { ...user, loginCount: loginCount + 1, books: [] };

  currentUser = user;

  profile(user);
  const newUsers = [...withoutUser, user];
  localStorage.setItem('users', JSON.stringify(newUsers));

  // !doit: move own function
  cardCheckBtn.style.display = 'none';
  cardTitle.innerHTML = 'Your Library card';
  cardProfileInfo.style.display = 'flex';

  cardInputName.value = currentUser.name + ' ' + currentUser.surname;
  cardInputNumber.value = currentUser.card;
}
