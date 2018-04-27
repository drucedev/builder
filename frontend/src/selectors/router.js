import {createSelector} from 'reselect';
const routerState = state => state.router;

export const getCurrentUri = createSelector(
  routerState, ({location}) => location.pathname
);
