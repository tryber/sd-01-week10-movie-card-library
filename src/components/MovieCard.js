import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.dados;
    console.log(this.props);

    return (
      <div>
        <h4>{title}</h4>
        <img src={imagePath} alt="Filme" />
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>{rating}</p>
      </div>
    );
  }
}
export default MovieCard;
