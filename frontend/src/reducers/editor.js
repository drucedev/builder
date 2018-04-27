import {TOGGLE_FULL_SCREEN_MODE} from "../actions/editor.js";

const initialState = {
  fullScreenMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FULL_SCREEN_MODE:
      return {...state, fullScreenMode: !state.fullScreenMode};
    default:
      return state;
  }
}
