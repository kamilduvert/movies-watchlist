// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import lists from './lists';
import search from './search';

// == Reducer
export default combineReducers({
  lists,
  search,
});
