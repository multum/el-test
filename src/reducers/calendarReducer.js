import {START_DATE, SET_DATES, SET_FOCUS_INPUT} from "../constans/calendar";

const initialState = {
  startDate: null,
  endDate: null,
  enteredTo: null,
  focusedInput: START_DATE
};

export default function calendarReducers(state = initialState, action) {
  if (action.type === SET_DATES) {
    const {startDate, endDate, enteredTo} = action;
    return Object.assign({}, state, {
      startDate,
      endDate,
      enteredTo
    });
  }
  if (action.type === SET_FOCUS_INPUT) {
    return Object.assign({}, state, {focusedInput: action.focusedInput});
  }
  return state;
}

