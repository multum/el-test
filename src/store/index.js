import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import combineReducers from '../reducers/index';
import {routerMiddleware} from 'react-router-redux';

import reduxThunk from 'redux-thunk';
import middlewares from '../middlewares/index';
import history from '../history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers,
  composeEnhancers(
    applyMiddleware(
      reduxThunk,
      routerMiddleware(history),
      ...middlewares)
  )
);