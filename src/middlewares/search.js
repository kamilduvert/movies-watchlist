import axios from 'axios';

import { getMoviesSuccess, GET_MOVIES } from '../store/actions';

const tmdbApiKey = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&page=1&include_adult=false&query=`

const searchMw = store => next => action => {
  switch (action.type) {
    case GET_MOVIES: {
      const { search: { search} } = store.getState();
      console.log(BASE_URL+search)
      const config = {
        method: 'get',
        url: BASE_URL+search
      };

      axios(config)
        .then(response => {
          store.dispatch(getMoviesSuccess(response.data.results));
        }).catch(error => {
          console.error(error);
        });
      break;
    };
    default: next(action)
  };
};

export default searchMw;
