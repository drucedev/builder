import requests from "./requests";
import tabs from "./tabs";
import editor from "./editor";
import select from './select';
import modal from "./modal";
import {reducer as toastr} from 'react-redux-toastr';
import {RESET_LOCAL_STORAGE} from "../actions/requests";
import {combineReducers} from 'redux';

export default (state, action) => {
  if (action.type === RESET_LOCAL_STORAGE) {
    state = undefined;
  }
  const combinedReducers = combineReducers({
    requests,
    tabs,
    select,
    editor,
    modal,
    toastr
  });

  return combinedReducers(state, action);
};
