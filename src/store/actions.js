/* --- Types --- */
export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";

/* --- actions --- */

// Search
export const changeSearchField = (value) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: value
})

export const getMovies = () => ({
  type: GET_MOVIES,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies
});




