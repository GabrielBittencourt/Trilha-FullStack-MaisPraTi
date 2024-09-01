// src/components/MovieRow.jsx

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieRow.css';

const MovieRow = ({ title, movies }) => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const movieChunks = chunkArray(movies, 5); // Divida os filmes em chunks de 1 para exibir um de cada vez

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <Carousel controls={true} indicators={false} interval={null} slide={true}>
        {movieChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex">
              {chunk.map(movie => (
                <Link to={`/details/${movie.id}`} key={movie.id} className="movie-card-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-card"
                  />
                </Link>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieRow;
