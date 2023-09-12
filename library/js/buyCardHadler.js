import ref from './refs.js';

import profile from './profile.js';
import toggleModal from './toggleModal.js';

const { cardBg, buyForm, listBooks } = ref;
export default function buyCardHadler() {
  if (!currentUser.books.length) {
    buyForm.reset();
    toggleModal(cardBg);
  }
  listBooks.insertAdjacentHTML(
    'beforeend',
    `<li><p>${currentUser.currentBook.dataset.title}</p></li>`
  );
  console.log(currentUser);
  currentUser.books.push(currentUser.currentBook);
  currentUser.currentBook.textContent = 'Own';
  currentUser.currentBook.disabled = true;

  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const withoutUser = [...oldUsers].filter(el => el.card !== currentUser.card);
  const localUser = [...oldUsers].find(el => el.card === currentUser.card);
  console.log(withoutUser);
  console.log(localUser);
  localUser.books.push(currentUser.currentBook.dataset.title);

  localStorage.setItem('users', JSON.stringify([...withoutUser, localUser]));

  profile(currentUser);
}
