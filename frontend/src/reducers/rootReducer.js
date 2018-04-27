import requests from "./requests.js";
import tabs from "./tabs.js";
import editor from "./editor.js";
import select from './select.js';
import {RESET_LOCAL_STORAGE} from "../actions/requests.js";
import {combineReducers} from 'redux';

export default (state, action) => {
  if (action.type === RESET_LOCAL_STORAGE) {
    state = undefined;
  }
  const combinedReducers = combineReducers({
    requests,
    tabs,
    select,
    editor
  });

  return combinedReducers(state, action);
};
