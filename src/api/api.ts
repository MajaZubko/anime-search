import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v3';

const getResults = (endpoint: string) => {
  return axios.get(`${API_URL}${endpoint}`);
};

export {getResults};
