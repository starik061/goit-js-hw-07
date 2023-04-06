import { galleryItems } from "./gallery-items.js";

const galleryElement = document.querySelector(".gallery");
createGallery(galleryItems);
console.dir(galleryElement);
const galleryItemLink = galleryElement.querySelector(".gallery__link");
const galleryItemImg = galleryElement.querySelector(".gallery__image");

galleryElement.addEventListener("click", showBigImage);

function createGallery(galleryData) {
  galleryElement.innerHTML = galleryData
    .map(
      (galleryItem) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
    )
    .join("");
}

function getBigImageUrl(event) {
  console.log(event.target.dataset.source);
  return event.target.dataset.source;
}

function showBigImage(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${getBigImageUrl(event)}" width="800" height="600">
  `);

  instance.show();
}
