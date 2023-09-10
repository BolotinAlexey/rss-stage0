import ref from './refs.js';
import formHandler from './formHandler.js';

const { buyForm } = ref;
export default function buyCardHadler() {
  const { elements } = buyForm;
  console.log(elements);
  //   formHandler();
}
