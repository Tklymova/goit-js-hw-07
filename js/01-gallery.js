import { galleryItems } from './gallery-items.js';
// Change code below this line



const ulGalleryEl = document.querySelector('.gallery');
const createMarkup = createGallery(galleryItems);
ulGalleryEl.insertAdjacentHTML('beforeend', createMarkup);
function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
    }).join('');
};

ulGalleryEl.addEventListener("click", onGalleryItemClick);


function onGalleryItemClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const galleryLink = event.target.dataset.source;
    
    const instance = basicLightbox.create(`<img src="${galleryLink}">`);
    instance.show();

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") instance.close();
    });
}