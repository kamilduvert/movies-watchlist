//== Actions
import {
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
  REMOVE_MOVIE_FROM_WATCHED,
  MOVE_MOVIE_TO_WATCHLIST,
} from "../store/actions";

const initialState = {
  watchlist: [],
  watched: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return {
        ...oldState,
        watchlist: [...oldState.watchlist, action.payload],
        watched: oldState.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    case REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...oldState,
        watchlist: oldState.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case ADD_MOVIE_TO_WATCHED:
      return {
        ...oldState,
        watchlist: oldState.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...oldState.watched, action.payload]
      };
    case REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...oldState,
        watched: oldState.watched.filter(
          (movie) => movie.id !== action.payload
        )
      };
    case MOVE_MOVIE_TO_WATCHLIST:
      return {
        ...oldState,
        watched: oldState.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [...oldState.watchlist, action.payload]
      };
    default: 
      return oldState;
  }
}

export default reducer;
