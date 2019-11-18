/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <ul className="movie-list">
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </ul>
    );
  }
}

export default MovieList;
