import galleryItem from './gallery-items.js';

const galerryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGallaryMarkup(galleryItem);

galerryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galerryContainer.addEventListener('click', onModalOpenClick);

function createGallaryMarkup(galleryItem) {
  return galleryItem
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

const modalIsOpen = document.querySelector('div.lightbox');
const imgClick = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

function onModalOpenClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  modalIsOpen.classList.add('is-open');
  imgClick.setAttribute('src', `${evt.target.getAttribute('data-source')}`);
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modalIsOpen.classList.remove('is-open');
  imgClick.removeAttribute('src');
}
