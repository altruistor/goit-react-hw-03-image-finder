import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38878000-57d2fc47fc5738245ae74ac28';
export const getApi = async ({ query, page }) => {
  const {
    data: { hits, total },
  } = await axios(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return { hits, total };
};

