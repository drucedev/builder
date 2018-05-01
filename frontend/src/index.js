import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App";
import {loadState, saveState} from "./localStorage";
import {configureStore} from "./store.js";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {createHashHistory} from 'history';
import './index.css';
import registerServiceWorker from "./registerServiceWorker";

const history = createHashHistory();
const persistedState = loadState();

const store = configureStore(history, persistedState);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
