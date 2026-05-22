import axios from 'axios';

const API_KEY = '55981750-407047847782865d9c6ccfb62'
const BASE_URL = 'https://pixabay.com/api/'

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    }
  })
  .then(response => {
    return response.data; // Возвращаем свойство data из ответа по ТЗ
  });
}