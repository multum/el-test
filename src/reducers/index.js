import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import readmeReducer from './readmeReducer';
import calendarReducer from './calendarReducer';
import contactsReducer from './contactsReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
  imagesReducer,
  calendarReducer,
  readmeReducer,
  contactsReducer,
  routerReducer
})