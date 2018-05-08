import config from "../config.js";
import {getCurrentUri} from "./router.js";
import {createSelector} from 'reselect';

const selectState = (state) => state.select;

export const getSelectedId = createSelector(
  [getCurrentUri, selectState],
  (currentUri, select) => select[currentUri] || config.defaultRequestId
);

export const isDefaultRequest = createSelector(
  getSelectedId, (selectedId) => (selectedId) === config.defaultRequestId
);
