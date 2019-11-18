import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    console.log(this.props);
    return (
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <img className="movie-card-image" src={imagePath} alt="Filmes" />
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}
export default MovieCard;
