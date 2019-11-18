import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((element) => <MovieCard key={element.title} movie={element} />
        )};
      </section>
    );
  }
}
