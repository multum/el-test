import {ADD_README_DATA} from "../constans/readme";

const initialState = {
  data: []
};
export default function readmeReducers(state = initialState, action) {
  if (action.type === ADD_README_DATA) {
    return Object.assign({}, state, {data: action.data})
  }
  return state
}

