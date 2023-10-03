export default function getRefs() {
  return {
    area: document.querySelector('#area'),
    bgModal: document.querySelector('.bg-modal'),
    modal: document.querySelector('.modal'),
    modalTitle: document.querySelector('.modal__title'),
    modalText: document.querySelector('.modal__text'),
    inputName: document.querySelector('.modal__input-name'),
    inputDimension: document.querySelector('#dimension'),
    newGame: document.querySelector('.ng-button'),
    // modalLose: document.querySelector('.modal-lose'),
    score: document.querySelector('.score__value'),
  };
}
