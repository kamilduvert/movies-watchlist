//== Packages
import React from "react";

//== Components
import MovieControls from "../MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__overlay"></div>
      <img
        className="movie-card__img"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControls type={type} movie={movie} />
    </div>
  )
};

export default MovieCard;
