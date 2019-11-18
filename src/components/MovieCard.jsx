import React from 'react';

class MovieCard extends React.Component {
    render() {
        const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
        return <article>
        <img src={imagePath}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        </article>

    }
}

export default MovieCard;
