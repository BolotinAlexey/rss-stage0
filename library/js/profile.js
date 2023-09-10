import ref from './refs.js';

const { profileModal, books, visits, bonuses, cardNumber } = ref;
export default function profile(user) {
  visits.innerHTML = user.loginCount;
  books.innerHTML = user.books;
  bonuses.innerHTML = user.bonuses;
  cardNumber.innerHTML = user.card;
}
