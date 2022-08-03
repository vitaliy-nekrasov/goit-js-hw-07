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

const showBigImg = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`,
  {
    onShow: showBigImg => {
      window.addEventListener('keydown', onKeyClick);
    },
    onClose: showBigImg => {
      window.removeEventListener('keydown', onKeyClick);
    },
  }
);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  showBigImg.element().querySelector('img').src = evt.target.dataset.source;
  showBigImg.show();
}

function onKeyClick(evt) {
  if (evt.key === 'Escape') {
    showBigImg.close();
    return;
  }
  console.log(evt.key);
}
