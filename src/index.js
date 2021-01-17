import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import mainReducer from './reducers'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

const store = createStore(
  mainReducer,
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
