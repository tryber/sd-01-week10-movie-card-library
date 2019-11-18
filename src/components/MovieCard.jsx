import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props.movies
        return (
            <div>
                <img src={imagePath} alt='Imagem do Filme' />
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{storyline}</p>
                <Rating rating={rating} />
            </div>
        );
    }
}

export default MovieCard;
