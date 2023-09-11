import formHandler from './formHandler.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { registerBg, registerSubmit, registerForm } = ref;
const { elements } = registerForm;

export default function regiserHadler() {
  let data = formHandler(elements, registerSubmit);
  if (!data) return;

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!data.email.match(pattern)) {
    alert('Enter correct email');
    return;
  }

  if (data.password.length < 8) {
    alert('Password has to more 7 charters');
    return;
  }

  const card = Math.floor(Math.random() * 0xfffffffff).toString(16);
  data = { ...data, card, loginCount: 0, books: [], bonuses: 1240 };
  registerForm.reset();
  toggleModal(registerBg);
  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const newUsers = oldUsers ? [...oldUsers, data] : [data];

  localStorage.setItem('users', JSON.stringify(newUsers));
  return data;
}
