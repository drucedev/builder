import {getSelectedId} from "./select.js";
import {getCurrentUri} from "./router.js";
import config from "../config.js";
import {createSelector} from 'reselect';

const requestsState = (state) => state.requests;

export const getCurrentRequests = createSelector(
  [requestsState, getCurrentUri],
  (requests, currentUri) => requests[currentUri] || {}
);

export const getCurrentRequestsValues = createSelector(
  getCurrentRequests, (currentRequests) => Object.keys(currentRequests).map((requestId) => currentRequests[requestId])
);

export const getCurrentRequest = createSelector(
  [getSelectedId, getCurrentRequests],
  (selectedId, currentRequests) => currentRequests[selectedId]
);

export const getDefaultRequestSchema = createSelector(
  getCurrentRequests, (requests) => requests[config.defaultRequestId].schema
);
