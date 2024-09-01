// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { getMoviesByCategory } from '../api/tmdb';
import MovieRow from '../components/MovieRow';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [categories] = useState(['popular', 'top_rated', 'upcoming']); // Exemplo de categorias

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const promises = categories.map(category => getMoviesByCategory(category));
        const results = await Promise.all(promises);
        setMovies(results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, [categories]);

  return (
    <div className="container">
      {categories.map((category, index) => (
        <MovieRow
          key={category}
          title={category.replace('_', ' ')}
          movies={movies[index] || []}
        />
      ))}
    </div>
  );
};

export default Home;
