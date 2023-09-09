import formHandler from './formHandler.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { loginBg, loginSubmit, loginForm } = ref;
const { elements } = loginForm;

export default function () {
  const data = formHandler(elements, loginSubmit);
  if (!data) return;

  const users = JSON.parse(localStorage.getItem('users'));

  if (!users) {
    alert('First register');
    return;
  }

  const user = users.find(
    ({ card, email }) => card === data.name || email === data.name
  );

  if (!user) {
    alert(`User ${data.name} doesn't exist`);
    return;
  }

  if (data.password.length < 8) {
    alert('Password has to more 7 charters');
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
