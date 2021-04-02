//== Types

// ====== Search ===========================================
export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";
export const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
export const GET_SEARCH_MOVIES_SUCCESS = "GET_SEARCH_MOVIES_SUCCESS";

// ====== Lists =============================================
export const ADD_MOVIE_TO_WATCHLIST = "ADD_MOVIE_TO_WATCHLIST";
export const ADD_MOVIE_TO_WATCHED = "ADD_MOVIE_TO_WATCHED";
export const REMOVE_MOVIE_FROM_WATCHLIST = "REMOVE_MOVIE_FROM_WATCHLIST";
export const MOVE_MOVIE_TO_WATCHLIST = "MOVE_MOVIE_TO_WATCHLIST";
export const REMOVE_MOVIE_FROM_WATCHED = "REMOVE_MOVIE_FROM_WATCHED";

//== Action Creators

// ====== Search ===========================================
export const changeSearchField = (value) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: value
})

export const getMovies = () => ({
  type: GET_SEARCH_MOVIES,
});

export const getSearchMoviesSuccess = (movies) => ({
  type: GET_SEARCH_MOVIES_SUCCESS,
  payload: movies
});

// ====== Lists =============================================
export const addMovieToWatchlist = (movie) => ({
  type: ADD_MOVIE_TO_WATCHLIST,
  payload: movie
});

export const addMovieToWatched = (movie) => ({
  type: ADD_MOVIE_TO_WATCHED,
  payload: movie
});

export const removeMovieFromWatchlist = (id) => ({
  type: REMOVE_MOVIE_FROM_WATCHLIST,
  payload: id
});

export const MoveMovieToWatchlist = (movie) => ({
  type: MOVE_MOVIE_TO_WATCHLIST,
  payload: movie
});

export const removeMovieFromWatched = (id) => ({
  type: REMOVE_MOVIE_FROM_WATCHED,
  payload: id
});



