import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import readmeReducer from './readmeReducer';
import calendarReducer from './calendarReducer';
import contactsReducer from './contactsReducer';

export default combineReducers({
  calendarReducer,
  readmeReducer,
  contactsReducer,
  routerReducer
})