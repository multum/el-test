import {SET_DATES} from "../constans/calendar";

const initialState = {
  startDate: null,
  endDate: null,
  enteredTo: null
};

export default function calendarReducer(state = initialState, action) {
  if (action.type === SET_DATES) {
    const {startDate, endDate, enteredTo} = action;
    return Object.assign({}, state, {
      startDate,
      endDate,
      enteredTo
    });
  }
  return state;
}

