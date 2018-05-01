import {createSelector} from 'reselect';
import {decodeUri} from "../utils";

const routerState = state => state.router;

export const getCurrentUri = createSelector(
  routerState, ({location}) => location.pathname !== '/' && decodeUri(location.pathname)
);
