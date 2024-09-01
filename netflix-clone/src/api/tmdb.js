// src/api/tmdb.js
import axios from 'axios';

const API_KEY = '5dc62e1bb57365d1b9be56a80b6e95d2'; // Substitua com sua chave da API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMoviesByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};
