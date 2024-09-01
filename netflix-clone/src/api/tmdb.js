import axios from 'axios';

const API_KEY = '5dc62e1bb57365d1b9be56a80b6e95d2';
const API_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const getMoviesByCategory = (category) =>
  tmdb.get(`/movie/${category}`);

export const getMovieDetails = (movieId) =>
  tmdb.get(`/movie/${movieId}`);

export default tmdb;
