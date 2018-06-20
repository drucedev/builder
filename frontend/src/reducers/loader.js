import {START_LOADER, STOP_LOADER} from "../actions/loader";

const initialState = {
  requests: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADER:
      return {
        ...state,
        requests: [...state.requests, action.requestId]
      };
    case STOP_LOADER:
      return {
        ...state,
        requests: state.requests.filter(requestId => requestId !== action.requestId)
      };
    default:
      return state;
  }
}
