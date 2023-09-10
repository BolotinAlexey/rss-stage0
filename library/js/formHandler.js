export default function formHandler(elements, subBtn) {
  let data;
  try {
    data = [...elements].reduce((a, b) => {
      if (!b.value && b !== subBtn) throw new Error();
      return b === subBtn ? a : { ...a, [b.name]: b.value };
    }, {});
  } catch (err) {
    alert('Fill all fields');
    return;
  }
  return data;
}
