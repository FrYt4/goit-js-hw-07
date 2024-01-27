import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const imagesEl = createGalleryImg(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesEl);

function createGalleryImg(item) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<ul class="gallery">
        <li>
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
</ul>`
    }).join('');

}

const lightbox = new SimpleLightbox('.gallery', {  
captionsData: "alt",
captionType: "alt",
captionDelay: 250,
captionPosition: "bottom"
  });