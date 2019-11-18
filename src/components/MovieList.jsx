import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <article className="movie-list">
        {movies.map(movie => <MovieCard movie = {movie}/>)}
      </article>
    )
  }
}

export default MovieList;
