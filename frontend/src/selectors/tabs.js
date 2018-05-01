import {getSelectedId} from "./select.js";
import {getCurrentUri} from "./router.js";
import {createSelector} from 'reselect';

const tabsState = state => state.tabs;

const getCurrentUriTab = createSelector(
  [tabsState, getCurrentUri],
  (tabs, currentUri) => tabs[currentUri] || {}
);

export const getSelectedTab = createSelector(
  [getCurrentUriTab, getSelectedId],
  (currentUriTab, selectedId) => currentUriTab[selectedId]
);
