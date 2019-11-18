/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Rating extends React.Component {
  render() {
    return <div className="rating">{this.props.rating}</div>;
  }
}

export default Rating;
