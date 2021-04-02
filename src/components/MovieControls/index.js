import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addMovieToWatched,
  removeMovieFromWatchlist,
  MoveMovieToWatchlist,
  removeMovieFromWatched
} from '../../store/actions'

const MovieControls = ({
  movie,
  type,
  handleAddMovieToWatched,
  handleRemoveMovieFromWatchlist,
  handleMoveMovieToWatchlist,
  handleRemoveMovieFromWatched
 }) => {
  return (
    <div className="movie-controls">
      {type === "watchlist" && (
        <div className="movie-controls__group">
          <button 
          className="movie-controls__btn"
          onClick={() => handleAddMovieToWatched(movie)}
          >
            <i className="fas fa-eye"></i>
          </button>

          <button 
          className="movie-controls__btn"
          onClick={() => handleRemoveMovieFromWatchlist(movie.id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {type === "watched" &&(
        <div className="movie-controls__group">
          <button 
          className="movie-controls__btn"
          onClick={() => handleMoveMovieToWatchlist(movie)}
          >
            <i className="fas fa-eye-slash"></i>
          </button>

          <button 
          className="movie-controls__btn"
          onClick={() => handleRemoveMovieFromWatched(movie.id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      
    </div>
  )
};

MovieControls.propTypes = {
  movie: PropTypes.object.isRequired,
  handleAddMovieToWatched: PropTypes.func.isRequired,
  handleRemoveMovieFromWatchlist: PropTypes.func.isRequired,
  handleMoveMovieToWatchlist: PropTypes.func.isRequired,
  handleRemoveMovieFromWatched: PropTypes.func.isRequired
};

// == Container
const mapStateToProps = (state, ownProps) => ({
  movie: ownProps.movie
});

const mapDispatchToProps = (dispatch) => ({
  handleAddMovieToWatched: (movie) => {
    dispatch(addMovieToWatched(movie));
  },
  handleRemoveMovieFromWatchlist: (id) => {
    dispatch(removeMovieFromWatchlist(id))
  },
  handleMoveMovieToWatchlist: (movie) => {
    dispatch(MoveMovieToWatchlist(movie));
  },
  handleRemoveMovieFromWatched: (id) => {
    dispatch(removeMovieFromWatched(id))
  },

});

const container = connect(mapStateToProps, mapDispatchToProps)(MovieControls);

export default container;
