import readmeReducer from './readmeReducer';
import calendarReducer from './calendarReducer';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

export default combineReducers({
  calendarReducer,
  readmeReducer,
  routerReducer
})