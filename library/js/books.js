import checkCardForm from './checkCardForm.js';
import ref from './refs.js';
import toggleModal from './toggleModal.js';

const { buyBtns, loginBg, cardBg, buyForm, buyCardSubmit, copyBtn } = ref;

const isFillForm = () => {
  const notFill = [...buyForm.elements].find(
    el => el !== buyCardSubmit && !el.value
  );
  // if (notFill) btn.disabled = true;
  // else {
  //   btn.disabled = false;
  //   enableSubmitButton(buyCardSubmit, buyForm.elements);
  // }

  buyCardSubmit.disabled =
    notFill || !checkCardForm(buyCardSubmit, buyForm.elements);
};

const onBuyBtn = e => {
  if (!currentUser) {
    toggleModal(loginBg);
    return;
  }
  if (!currentUser.books) {
    toggleModal(cardBg);
    [...buyForm.elements].forEach(el =>
      el.addEventListener('input', isFillForm)
    );
  }
};

[...buyBtns].forEach(el => el.addEventListener('click', onBuyBtn));

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(currentUser.card);
});
