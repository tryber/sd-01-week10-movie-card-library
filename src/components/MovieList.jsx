import React from 'react';

class MovieList extends React.Component {
  render(){
    const {movies} = this.props
    console.log(movies)
    console.log(this.props)
    return (
      <div>
        
      </div>
    );
  }
}

export default MovieList;
