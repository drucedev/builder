import rootReducer from './reducers/rootReducer.js';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';

export const configureStore = (history, initialState) => {
  const middlewares = [
    thunk,
    createLogger()
  ];

  const composeEnhancers = (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    connectRouter(history)(rootReducer),
    initialState, composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      ...middlewares
    ),
  ));
};
