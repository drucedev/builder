import {CHANGE_SELECTED} from "../actions/tabs.js";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return {
        ...state, [action.uri]: {
          ...state[action.uri],
          [action.id]: action.tab
        }
      };
    default:
      return state;
  }
}
