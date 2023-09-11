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

  currentUser.books.push(currentUser.currentBook);
  currentUser.currentBook.textContent = 'Own';
  currentUser.currentBook.disabled = true;

  profile(currentUser);
}
