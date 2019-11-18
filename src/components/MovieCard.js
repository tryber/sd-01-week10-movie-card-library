import React from 'react';
import data from '../data.js'

class MovieCard extends React.Component {
  render() {
    return <div className="movie-card">
        {
            data.forEach(movie => {
                movies => <MovieCard movie={movies} />
            })
        }
    </div>;
  }
}

export default MovieCard;