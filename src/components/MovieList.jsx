import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((select) => <MovieCard key={select.title} movie={select} />)}
      </div>
    );
  }
}

export default MovieList;
