import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return <h4 className="rating">{rating}</h4>;
  }
}
export default Rating;
