//== Packages
import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

//== Actions
import { addMovieToWatchlist, addMovieToWatched } from '../../store/actions';

const ResultCard = ({ movie, handleAddMovieToWatchlist, handleAddMovieToWatched, watchlist, watched }) => {

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
            disabled={watchlist.find((m) => m.id === movie.id)}
            onClick={() => handleAddMovieToWatchlist(movie)
            }
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watched.find((m) => m.id === movie.id)}
            onClick={() => handleAddMovieToWatched(movie)
            }
          >
            Add to Watched
          </button>

        </div>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  movie: PropTypes.object.isRequired,
  watchlist: PropTypes.array.isRequired,
  handleAddMovieToWatchlist: PropTypes.func.isRequired,
  handleAddMovieToWatched: PropTypes.func.isRequired
};

// == Container
const mapStateToProps = (state, ownProps) => ({
  movie: ownProps.movie,
  watchlist: state.lists.watchlist,
  watched: state.lists.watched
});

const mapDispatchToProps = (dispatch) => ({
  handleAddMovieToWatchlist: (movie) => {
    dispatch(addMovieToWatchlist(movie));
  },
  handleAddMovieToWatched: (movie) => {
    dispatch(addMovieToWatched(movie));
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(ResultCard);

export default container;
