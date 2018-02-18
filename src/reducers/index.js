import readmeReducers from './readmeReducers';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

export default combineReducers({
  readmeReducers,
  routerReducer
})