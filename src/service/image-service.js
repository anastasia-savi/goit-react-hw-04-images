import axios from 'axios'

axios.defaults.params={
  orientation: 'horizontal',
  per_page: 12,
}

export const getImages = async(word, page) => {
  const KEY = '37163644-8110db8e34b19fc01c5b102a4';
  const URL = `https://pixabay.com/api/?q=${word}&key=${KEY}&image_type=photo&page=${page}`;
  const response = await axios.get(URL);
  return response;
}
