import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p>{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    )
  }
}
export default MovieCard;
