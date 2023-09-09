import ref from './refs.js';

const { logoInitials } = ref;

export default function loginUser({ name, surname, card, email }) {
  isLogin = true;
  const avatar =
    name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
  logoInitials.innerHTML = avatar;
  logoInitials.classList.add('display-block');
}
