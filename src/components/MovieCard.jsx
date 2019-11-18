import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
    return (
      <div className="MovieCard">
        <img src={imagePath} alt="imagem-legal" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
