import {CHANGE_SELECTED} from "../actions/select.js";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return {...state, [action.uri]: action.id};
    default:
      return state;
  }
}
