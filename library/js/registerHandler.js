import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { registerBg, registerSubmit, registerForm } = ref;
const { elements } = registerForm;
// const { elements } = registerForm;
export default function regiserHadler() {
  let data;
  try {
    data = [...elements].reduce((a, b) => {
      if (!b.value && b !== registerSubmit) throw new Error();
      return b === registerSubmit ? a : { ...a, [b.name]: b.value };
    }, {});
  } catch (err) {
    alert('Fill all fields');
    return;
  }
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
