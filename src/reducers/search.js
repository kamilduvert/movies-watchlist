import { CHANGE_SEARCH_FIELD, GET_SEARCH_MOVIES_SUCCESS } from '../store/actions'

const initialState = {
  search: '',
  results: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...oldState,
        search: action.payload
      };
    case GET_SEARCH_MOVIES_SUCCESS:
      return {
        ...oldState,
        results: action.payload
      };

    default:
      return oldState;
  }
}

export default reducer;
