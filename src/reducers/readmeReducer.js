import {FETCH_README_DATA} from "../constans/readme";

const initialState = [];

export default function readmeReducers(state = initialState, action) {
  if (action.type === FETCH_README_DATA) return state.concat(action.data);
  return state;
}

