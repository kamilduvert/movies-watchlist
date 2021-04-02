// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import watchlist from './watchlist';
import search from './search';

// == Reducer
export default combineReducers({
  watchlist,
  search,
});
