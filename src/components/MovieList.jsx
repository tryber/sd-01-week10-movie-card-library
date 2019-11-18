import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    function listFilm() {
      return (
        <div className="movie-list">
          {movies.map((select) => (
            <MovieCard key={select.title} movie={select} />
          ))}
        </div>
      );
    }
    return listFilm();
  }
}

export default MovieList;
