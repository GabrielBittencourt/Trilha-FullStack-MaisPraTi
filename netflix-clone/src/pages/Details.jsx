// src/pages/Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="container">
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
          <p><strong>Avaliação:</strong> {movie.vote_average}</p>
          <p><strong>Elenco:</strong> {movie.cast?.join(', ')}</p>
        </div>
      ) : (
        <p>Carregando detalhes...</p>
      )}
    </div>
  );
};

export default Details;
