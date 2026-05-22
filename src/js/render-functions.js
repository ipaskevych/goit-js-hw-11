import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Импортируем стили красивой библиотеки лоадеров
import "pure-css-loader/dist/css-loader.css";

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Создаем один экземпляр лайтбокса для всего приложения
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// 1. Функция создания галереи
export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><span>${likes}</span></p>
        <p class="info-item"><b>Views</b><span>${views}</span></p>
        <p class="info-item"><b>Comments</b><span>${comments}</span></p>
        <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh(); // Обновляем лайтбокс после вставки картинок
}

// 2. Функция очистки галереи
export function clearGallery() {
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
}

// 3. Функции управления лоадером через специальный класс библиотеки is-active
export function showLoader() {
  if (loader) loader.classList.add('is-active');
}

export function hideLoader() {
  if (loader) loader.classList.remove('is-active');
}