import {START_DATE, RANGE_DATES_CHANGE, FOCUS_INPUT_CHANGE} from "../constans/calendar";

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: START_DATE
};
export default function calendarReducers(state = initialState, action) {
  if (action.type === RANGE_DATES_CHANGE) {
    return Object.assign({}, state, {startDate: action.startDate, endDate: action.endDate});
  }
  if (action.type === FOCUS_INPUT_CHANGE) {
    return Object.assign({}, state, {focusedInput: action.focusedInput});
  }
  return state;
}

