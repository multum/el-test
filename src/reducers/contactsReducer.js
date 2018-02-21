import {FETCH_CONTACTS_DATA} from "../constans/contacts";

const initialState = {
  data: []
};

export default function readmeReducers(state = initialState, action) {
  if (action.type === FETCH_CONTACTS_DATA) {
    return Object.assign({}, state, {data: action.data});
  }
  return state;
}

