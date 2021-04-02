// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import watchlistReducer from './watchlist';

// == Reducer
export default combineReducers({
  watchlist: watchlistReducer
});
