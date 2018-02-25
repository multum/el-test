import {SET_DATES} from "../constans/calendar";

export const datesChange = dates => {
  return {
    type: SET_DATES,
    ...dates
  };
};