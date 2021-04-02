
// == Package imports
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Local imports
// reducer
import rootReducer from '../reducers';

// middlewares
import searchMW from '../middlewares/search'

// == Store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(searchMW)
  ),
);

export default store;
