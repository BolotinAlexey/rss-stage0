export default function getRefs() {
  return {
    gallery: document.querySelector('.gallery'),
    form: document.querySelector('#search-form'),
    input: document.querySelector('[name="searchQuery"]'),
    button: document.querySelector('.load-more'),
    modal: document.querySelector('.modal'),
    cross: document.querySelector('.cross'),
    bgModal: document.querySelector('.bg-modal'),
    modalMessage: document.querySelector('.modal-message'),
  };
}
