import {TOGGLE_MODAL} from "../actions/modal";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        [action.modal]: !state[action.modal]
      };
    default:
      return state;
  }
}
