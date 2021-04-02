import React from "react";

import dayjs from 'dayjs';

const resultCard = ({ movie }) => {

  return (
    <div className="result-card">
      <div className="result-card__poster">
        {movie.poster_path ? (
          <img
            className="result-card__poster__img"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="result-card__poster__filler">No poster available</div>
        )}
      </div>

      <div className="result-card__content">
        <div className="result-card__header">
          <h3 className="result-card__header__title">{movie.title}</h3>
          <h4 className="result-card__header__date">
            {dayjs(`${movie.release_date}`).format('DD/MM/YYYY')}
          </h4>
        </div>

        <div className="result-card__controls">
          <button
            className="btn result-card__controls__btn"
            /* onClick={() => addMovieToWatchlist(movie)} */
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            /* onClick={() => addMovieToWatched(movie)} */
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default resultCard;
