import Api from './fetchAPI.js';
import createGallery from './gallery.js';
import getRefs from './getRefs.js';
import onMessage from './onMessage.js';

const refs = getRefs();

const api = new Api();
refs.form.addEventListener('submit', onSubmit);

// Main script
async function runScript(word, page) {
  api.query = word;
  api.page = page;
  try {
    const resp = word ? await api.fetchApi() : await api.randomApi();
    if (!resp) return;
    let total, total_pages, results, totalMsg;
    if (word) {
      total = resp.total;
      total_pages = resp.total_pages;
      results = resp.results;
      totalMsg = total;
    } else {
      results = resp;
      total = Infinity;
      totalMsg = 'infiniti random';
    }
    // const { total, total_pages, results } = resp;
    if (total === 0) {
      onMessage(
        'Sorry, there are no images matching your search query. Please try again.',
        [255, 0, 0]
      );
      clear();
      return;
    }
    refs.gallery.addEventListener('click', onGalery);
    refs.anchor.classList.add('block');
    refs.gallery.insertAdjacentHTML('beforeend', createGallery(results));

    if (api.page === 1)
      onMessage(` Hooray! We found ${totalMsg} images.`, [0, 255, 0]);
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
  if (refs.anchor.classList.contains('block'))
    refs.anchor.classList.remove('block');
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
  if (e.target.tagName !== 'IMG') return;
  refs.bgModal.classList.toggle('block');
  const img = document.createElement('img');
  refs.modal.appendChild(img);
  img.setAttribute('src', e.target.dataset.url);
  img.classList.add('gallery__image');

  refs.bgModal.addEventListener('click', onBgModal.bind(null, img));
};
