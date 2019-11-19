import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies)
    return (
      <div className='movie-list'>
      {movies.map(movie => {
          console.log(movie)
          return <MovieCard key={movie.title} movie={movie} />
        })}
      </div>
    );
  }
}

export default MovieList;
