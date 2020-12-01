import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware , compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers/index';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const cp = compose(applyMiddleware(logger, thunk), devtools)

const store = createStore(rootReducer, cp);

ReactDOM.render(
 <Provider store ={store}>
  <App />
  </Provider>
, document.getElementById('root')
);
