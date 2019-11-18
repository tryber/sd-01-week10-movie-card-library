import React from 'react';
import Dados from '../data';
import MovieCard from './MovieCard';

function interarFilme(lista) {
  return lista.map(select => <MovieCard dados={select} />);
}

function MovieList() {
  return <div>{interarFilme(Dados)}</div>;
}

export default MovieList;
