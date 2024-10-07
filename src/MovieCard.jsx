import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <span>{movie.Year}</span>
            </div>
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
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