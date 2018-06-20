import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from "./components/app/App";
import {loadState, saveState} from "./localStorage";
import {configureStore} from "./store.js";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {createHashHistory} from 'history';
import './index.css';
import registerServiceWorker from "./registerServiceWorker";
import {registerInterceptors} from "./http";

const history = createHashHistory();
const persistedState = loadState();

const store = configureStore(history, persistedState);

registerInterceptors(store);

store.subscribe(() => saveState(store.getState()));

const rootEl = document.getElementById('root');
Modal.setAppElement(rootEl);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  rootEl
);

registerServiceWorker();
