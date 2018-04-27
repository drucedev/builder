import {
  SET_REQUESTS,
  EDIT_REQUEST,
  SAVE_REQUEST,
  DELETE_REQUEST
} from "../actions/requests.js";

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS:
      return action.requests;
    case SAVE_REQUEST:
      return {
        ...state,
        [action.uri]: {
          ...state[action.uri],
          [action.id]: action.request
        }
      };
    case EDIT_REQUEST:
      return {
        ...state, [action.uri]: {
          ...state[action.uri],
          [action.id]: {
            ...state[action.uri][action.id],
            ...action.request
          }
        }
      };
    case DELETE_REQUEST:
      const {[action.id]: _, ...requests} = state[action.uri];
      return {
        ...state,
        [action.uri]: requests
      };
    default:
      return state;
  }
}
