import enableSubmitButton from './enableSubmitButton.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { buyBtns, loginBg, cardBg, buyForm, buyCardSubmit } = ref;

const isFillForm = () => {
  const notFill = [...buyForm.elements].find(
    el => el !== buyCardSubmit && !el.value
  );
  !notFill && enableSubmitButton(buyCardSubmit);
};

const onBuyBtn = e => {
  if (!currentUser) {
    toggleModal(loginBg);
    return;
  }
  if (!currentUser.books) {
    toggleModal(cardBg);
    console.log(buyForm.elements);
    [...buyForm.elements].forEach(el =>
      el.addEventListener('input', isFillForm)
    );
  }
};

[...buyBtns].forEach(el => el.addEventListener('click', onBuyBtn));
