/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <li className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={`Poster of movie ${title}`} />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <div className="movie-card-rating"><Rating rating={rating} /></div>
        </section>
      </li>
    );
  }
}


export default MovieCard;
