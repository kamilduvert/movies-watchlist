/* --- Types --- */
const ADD_MOVIE_TO_WATCHLIST = "ADD_MOVIE_TO_WATCHLIST";
const REMOVE_MOVIE_FROM_WATCHLIST = "REMOVE_MOVIE_FROM_WATCHLIST";
const ADD_MOVIE_TO_WATCHED = "ADD_MOVIE_TO_WATCHED";
const MOVE_TO_WATCHLIST = "MOVE_TO_WATCHLIST";
const REMOVE_FROM_WATCHED = "REMOVE_FROM_WATCHED";

/* --- actions --- */
// actions
const addMovieToWatchlist = (movie) => {
  dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: movie });
};

const removeMovieFromWatchlist = (id) => {
  dispatch({ type: REMOVE_MOVIE_FROM_WATCHLIST, payload: id });
};

const addMovieToWatched = (movie) => {
  dispatch({ type: ADD_MOVIE_TO_WATCHED, payload: movie });
};

const moveToWatchlist = (movie) => {
  dispatch({ type: MOVE_TO_WATCHLIST, payload: movie });
};

const removeFromWatched = (id) => {
  dispatch({ type: REMOVE_FROM_WATCHED, payload: id });
};
