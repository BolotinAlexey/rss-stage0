import formHandler from './formHandler.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { registerBg, registerSubmit, registerForm } = ref;
const { elements } = registerForm;
// const { elements } = registerForm;
export default function regiserHadler() {
  const data = formHandler(elements, registerSubmit);
  if (!data) return;
  if (data.password.length < 8) {
    alert('Password has to more 7 charters');
    return;
  }
  registerForm.reset();
  toggleModal(registerBg);
  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const newUsers = oldUsers ? [...oldUsers, data] : [data];

  localStorage.setItem('users', JSON.stringify(newUsers));
  console.log(JSON.parse(localStorage.getItem('users')));
}
