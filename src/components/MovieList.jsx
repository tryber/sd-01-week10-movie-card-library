// Iniciando o projeto 🚀
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const arrMovies = this.props.movies;
    return (
      <div className="MovieList">
        {arrMovies.map((movie) => <MovieCard key={movie.name} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
