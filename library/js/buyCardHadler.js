import ref from './refs.js';

import profile from './profile.js';
import toggleModal from './toggleModal.js';

const { cardBg, buyForm } = ref;
export default function buyCardHadler() {
  if (!currentUser.books.length) {
    buyForm.reset();
    toggleModal(cardBg);
  }
  currentUser.books.push(currentUser.currentBook);
  currentUser.currentBook.disabled = true;
  profile(currentUser);
}
