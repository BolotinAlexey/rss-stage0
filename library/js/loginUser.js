import ref from './refs.js';

const { logoInitials, nameProfile } = ref;

export default function loginUser(user) {
  let { name, surname, card, email, loginCount } = user;
  isLogin = true;
  const avatar =
    name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
  logoInitials.innerHTML = avatar;
  logoInitials.classList.add('display-block');
  logoInitials.setAttribute('title', name + ' ' + surname);
  nameProfile.innerHTML = card;

  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const withoutUser = [...oldUsers].filter(el => el.card !== card);
  const newUsers = [...withoutUser, { ...user, loginCount: loginCount + 1 }];
  console.log(newUsers);

  localStorage.setItem('users', JSON.stringify(newUsers));
}
