/* --- Types --- */
export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";
export const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
export const GET_SEARCH_MOVIES_SUCCESS = "GET_SEARCH_MOVIES_SUCCESS";

/* --- actions --- */

// Search
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




