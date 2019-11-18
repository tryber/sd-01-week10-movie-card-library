import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="movie-card-rating">
        <h4 className="rating">{rating}</h4>
      </div>
    );
  }
}
export default Rating;
