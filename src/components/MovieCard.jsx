import React from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
        return (<article className="movie-card movie-card-body">
            <img className="movie-card-image" src={imagePath} alt=""></img>
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <p className="movie-card-rating"><Rating rating={rating} /></p>
        </article>);
    }
}

export default MovieCard;
