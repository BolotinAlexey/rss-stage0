import Api from './fetchAPI.js';
import createGallery from './gallery.js';
import getRefs from './getRefs.js';

const refs = getRefs();

const api = new Api();
refs.form.addEventListener('submit', onSubmit);

// Main script
async function runScript(word, page) {
  refs.gallery.addEventListener('click', onGalery);
  api.query = word;
  api.page = page;
  try {
    const { total, total_pages, results } = await api.fetchApi();
    if (total === 0) {
      onMessage(
        'Sorry, there are no images matching your search query. Please try again.',
        [255, 0, 0]
      );
      clear();
      return;
    }
    refs.gallery.insertAdjacentHTML('beforeend', createGallery(results));

    if (api.page === 1)
      onMessage(` Hooray! We found ${total} images.`, [0, 255, 0]);
    else shiftGallery();

    if (api.page >= total_pages) {
      refs.button.classList.add('invisible');
      onMessage(
        "We're sorry, but you've reached the end of search results.",
        [120, 120, 0]
      );
      return;
    }
    refs.button.classList.remove('invisible');
    refs.button.addEventListener('click', nextPage);
  } catch (error) {
    console.log(error);
  }
}

// "submit" event handler
function onSubmit(e) {
  e.preventDefault();
  const inputWord = e.target.elements.searchQuery.value.trim();
  resetGallery();
  // if (!inputWord) return;
  runScript(inputWord, 1);
}

// Leads the contents of the gallery to the initial state
function clear() {
  refs.input.value = '';
  api.query = '';
  refs.button.classList.add('invisible');
  resetGallery();
}

// Cleans the contents of the gallery
function resetGallery() {
  refs.gallery.innerHTML = '';
}

// Increments the current page by one and restarts the gallery rendering script
function nextPage() {
  api.incrementPage();
  refs.button.removeEventListener('click', nextPage);
  runScript(api.query, api.page);
}

// Shifts the gallery by 2 cards up
function shiftGallery() {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function onBgModal(img, e) {
  if (e.target.tagName === 'IMG') return;
  img.remove();
  refs.bgModal.classList.remove('block');
  refs.bgModal.removeEventListener('click', onBgModal);
}

// create modal
const onGalery = e => {
  console.log(e.target.dataset.url);
  refs.bgModal.classList.toggle('block');
  const img = document.createElement('img');
  refs.modal.appendChild(img);
  img.setAttribute('src', e.target.dataset.url);
  img.classList.add('gallery__image');

  refs.bgModal.addEventListener('click', onBgModal.bind(null, img));
};

// @param message - shown message
// @param colors - array colors [red,green,blue]
function onMessage(message, c) {
  refs.modalMessage.innerText = message;
  refs.modalMessage.style.backgroundColor = `rgba(${c[0]}, ${c[1]}, ${c[2]},0.5)`;
  refs.modalMessage.classList.add('visible');
  setTimeout(() => refs.modalMessage.classList.remove('visible'), 3000);
}
