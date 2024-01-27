import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesEl = createGalleryImg(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesEl);


function createGalleryImg(item) {
    return galleryItems.map(({ preview, original, description }
    
        ) => {
           return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        }).join('');
};


const onContainerClick = (x) => {
    x.preventDefault();


  const source = e.target.dataset.source;
    if (!source) return;
const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};
galleryContainer.addEventListener("click", onContainerClick);