// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>`;
    }).join("");
};

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});