import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="movie-card-rating">
        <header className="rating">{rating}</header>
      </div>
    );
  }
}

export default Rating;
