import React from 'react';

class Rating extends React.Component {
  render() {
    const rate = this.props.rating
    return (
      <div className="movie-card-rating">
        <span className="rating">{rate}</span>
      </div>
    );
  }
}

export default Rating;
