import {DELETE_REQUEST, EDIT_REQUEST, IMPORT_REQUESTS, SAVE_REQUEST} from "../actions/requests";

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_REQUESTS:
      return {...state, ...action.requests};
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
