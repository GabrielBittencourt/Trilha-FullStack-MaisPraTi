import React from 'react';
import MovieRow from '../components/MovieRow';

function Home() {
  return (
    <div>
      <MovieRow title="Populares" category="popular" />
      <MovieRow title="Mais Votados" category="top_rated" />
      <MovieRow title="Ação" category="action" />
      <MovieRow title="Comédia" category="comedy" />
      {/* Adicione mais categorias conforme necessário */}
    </div>
  );
}

export default Home;
