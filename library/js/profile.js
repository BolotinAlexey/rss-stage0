import ref from './refs.js';

const {
  books,
  visits,
  bonuses,
  cardNumber,
  listBooks,
  cardInitials,
  cardFullname,
} = ref;
export default function profile(user) {
  visits.forEach(el => (el.innerHTML = user.loginCount));
  // visits.innerHTML = user.loginCount;
  books.forEach(el => (el.innerHTML = user.books.length));
  // books.innerHTML = user.books.length;
  bonuses.forEach(el => (el.innerHTML = user.bonuses));
  // bonuses.innerHTML = user.bonuses;
  cardNumber.innerHTML = user.card;
  cardInitials.innerHTML =
    user.name.slice(0, 1).toUpperCase() +
    user.surname.slice(0, 1).toUpperCase();
  cardFullname.innerHTML = user.name + ' ' + user.surname;
}
