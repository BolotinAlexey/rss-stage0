export default function checkCardForm(btn, { number, code1, code2, cvc }) {
  number = number.value.replaceAll(' ', '');

  if (number.length !== 16 || !Number.isInteger(+number)) return;
  if (
    code1.value.length !== 2 ||
    !Number.isInteger(+code1.value) ||
    code2.value.length !== 2 ||
    !Number.isInteger(+code2.value)
  )
    return;
  if (cvc.value.length !== 3 || !Number.isInteger(+cvc.value)) return;
  return true;
}
