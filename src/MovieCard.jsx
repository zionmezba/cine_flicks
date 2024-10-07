import React from "react";
import UnavailablePoster from './not_available.jpg';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <span>{movie.Year}</span>
            </div>
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : UnavailablePoster}
                    alt={movie.Title} />
            </div>

            <div>
                <h3>{movie.Title}</h3>
                <span>{movie.Year}</span>
            </div>
        </div>
    );
}

export default MovieCard;