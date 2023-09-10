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
  visits.innerHTML = user.loginCount;
  books.innerHTML = user.books.length;
  bonuses.innerHTML = user.bonuses;
  cardNumber.innerHTML = user.card;
  cardInitials.innerHTML =
    user.name.slice(0, 1).toUpperCase() +
    user.surname.slice(0, 1).toUpperCase();
  cardFullname.innerHTML = user.name + ' ' + user.surname;
}
