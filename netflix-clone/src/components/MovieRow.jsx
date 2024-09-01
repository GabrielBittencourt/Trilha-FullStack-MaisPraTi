import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tmdb from '../api/tmdb';
import './MovieRow.css';

function MovieRow({ title, category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await tmdb.getMoviesByCategory(category);
      setMovies(response.data.results);
    }
    fetchData();
  }, [category]);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row__posters">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-row__poster"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
