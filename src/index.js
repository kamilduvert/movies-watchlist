//== Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//== Styles
import './styles/reset.css';
import './styles/index.scss';

//== Store
import store from './store';

//== Component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

