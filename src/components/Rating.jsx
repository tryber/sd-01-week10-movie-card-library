import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props.dados;

    return <h4>{rating}</h4>;
  }
}
export default Rating;
