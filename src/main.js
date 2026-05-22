import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');

if (searchForm) {
  searchForm.addEventListener('submit', handleSearch);
}

function handleSearch(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  // Считываем значение инпута строго по его имени из ТЗ
  const searchQuery = form.elements['search-text'].value.trim();

  // Проверка на пустую строку перед запросом
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  // Очищаем галерею и включаем красивый лоадер перед стартом запроса
  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      // Проверка на длину массива в ответе
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Если всё супер — рисуем картинки
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      // Выключаем лоадер в любом случае (успех или ошибка) и сбрасываем форму
      hideLoader();
      form.reset();
    });
}