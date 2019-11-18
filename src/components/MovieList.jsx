// Iniciando o projeto 🚀
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
render() {
    const { movies } = this.props;
    return (
        <div>
            {movies.map(movies => <MovieCard key={movies.title} movies={movies}/>)}
        </div>
        )
    }
}

export default MovieList;
    