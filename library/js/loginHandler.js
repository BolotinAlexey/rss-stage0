import formHandler from './formHandler.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { loginBg, loginSubmit, loginForm } = ref;
const { elements } = loginForm;

export default function regiserHadler() {
  const data = formHandler(elements, loginSubmit);
  if (!data) return;

  const users = JSON.parse(localStorage.getItem('users'));
  console.log(data, users);

  if (!users) {
    alert('First register');
    return;
  }
  const user = users.find(({ card, email }) => {
    console.log(card, email);
    console.log(card, data.name);
    return card === data.name || email === data.name;
  });
  if (!user) {
    alert(`User ${data.name} doesn't exist`);
    return;
  }
  if (user.password !== data.password) {
    alert('Check password');
    return;
  }
  loginForm.reset();
  toggleModal(loginBg);
  return user;
}
