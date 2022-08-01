import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryEl.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const showBigImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  showBigImg.show();

  window.addEventListener('keydown', onKeyClick);

  function onKeyClick() {
    showBigImg.close();
    window.removeEventListener('keydown', onKeyClick);
  }
}
