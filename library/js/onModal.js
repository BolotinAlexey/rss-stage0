import ref from './refs.js';

const {
  loginModal,
  registerModal,
  loginCross,
  registerCross,
  loginBg,
  registerBg,
} = ref;

export default function onModal(e) {
  e.stopPropagation();

  console.log(e.currentTarget);
  //   if(e.target===)
}
