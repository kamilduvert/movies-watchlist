// == Packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';

// == Local imports

// LocalStorage
import { saveState, loadState } from './localStorage';

// Reducer
import rootReducer from '../reducers';

// Middlewares
import searchMW from '../middlewares/search'

// == Store
const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(
    applyMiddleware(searchMW)
  ),
);

// Allows to save state from the store to localStorage
store.subscribe(throttle(() => {
  saveState({
    lists: store.getState().lists,
  })
}, 1000))

export default store;
