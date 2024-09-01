import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../api/tmdb';
import './Details.css';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await tmdb.getMovieDetails(id);
      setMovie(response.data);
    }
    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
      <p><strong>Avaliação:</strong> {movie.vote_average}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </div>
  );
}

export default Details;
