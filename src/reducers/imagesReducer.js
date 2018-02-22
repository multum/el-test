import {ADD_LOADED_IMAGE} from "../constans/imageLoader";

const initialState = [];

export default function imagesReducer(state = initialState, action) {
  if (action.type === ADD_LOADED_IMAGE) {
    return state.concat(action.image);
  }
  return state;
}

