import React, { Component } from 'react';
import Rating from './Rating';

export default class MovieCard extends Component {
    render() {
        const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
        return (
            <article className="movie-card movie-card-body">
                <img src={imagePath} className="movie-card-image"></img>
                <h4 className="movie-card-title">{title}</h4>
                <h5 className="movie-card-subtitle">{subtitle}</h5>
                <p className="movie-card-storyline">{storyline}</p>
                <Rating rating={rating}/>
            </article>
        )
    }
}