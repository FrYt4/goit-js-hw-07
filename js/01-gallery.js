import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const images = createGalleryImg(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", images);
galleryContainer.addEventListener(`click` , onContainerClick)

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

if(x.target.nodeName !== `IMG`){
  return ;
}
const source = event.target.dataset.source
const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`, {
        onShow: () => {
            window.addEventListener('keydown', onKeydownEsc);
        },
        onClose: () => {
            window.removeEventListener('keydown', onKeydownEsc);
        }
    });

const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === 'Escape') {
        instance.close();
    }
};

instance.show();
}