// == Package
import { combineReducers } from 'redux';

// == Reducers
import lists from './lists';
import search from './search';

// == combinerReducers
export default combineReducers({
  lists,
  search,
});
