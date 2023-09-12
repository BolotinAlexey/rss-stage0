import ref from './refs.js';
import profile from './profile.js';

const {
  logoInitials,
  nameProfile,
  cardCheckBtn,
  cardProfileInfo,
  cardTitle,
  cardInputName,
  cardInputNumber,
  cardRight,
  cardRightLogin,
  listBooks,
  buyBtns,
} = ref;

export default function loginUser(user) {
  let { name, surname, card, loginCount } = user;

  const avatar =
    name.slice(0, 1).toUpperCase() + surname.slice(0, 1).toUpperCase();
  logoInitials.innerHTML = avatar;
  logoInitials.classList.add('display-block');
  logoInitials.setAttribute('title', name + ' ' + surname);
  nameProfile.innerHTML = card;

  const oldUsers = JSON.parse(localStorage.getItem('users'));
  const withoutUser = [...oldUsers].filter(el => el.card !== card);

  user.loginCount++;

  currentUser = user;

  profile(user);
  localStorage.setItem('users', JSON.stringify([...withoutUser, user]));

  // !doit: move own function
  cardCheckBtn.style.display = cardRight.style.display = 'none';
  cardTitle.innerHTML = 'Your Library card';
  cardProfileInfo.style.display = cardRightLogin.style.display = 'flex';

  cardInputName.value = currentUser.name + ' ' + currentUser.surname;
  cardInputNumber.value = currentUser.card;

  //
  listBooks.innerHTML = '';
  user.books.forEach(el => {
    const findBook = [...buyBtns].find(btn => btn.dataset.title === el);
    console.log(findBook);
    if (findBook) {
      listBooks.insertAdjacentHTML(
        'beforeend',
        `<li><p>${findBook.dataset.title}</p></li>`
      );
      findBook.innerHTML = 'Own';
      findBook.disabled = true;
    }
  });
}
