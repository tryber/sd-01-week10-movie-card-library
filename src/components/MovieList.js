import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
        const movies = this.props.movie
        return (
          <MovieCard />
        )
    }
}

export default MovieList;