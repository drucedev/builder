import App from "./components/App";
import {component} from "./components/elements";
import {loadState, saveState} from "./localStorage";
import {configureStore} from "./store.js";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import './index.css';

const history = createHashHistory();
const persistedState = loadState();

const store = configureStore(history, persistedState);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  component(Provider, {store},
    component(ConnectedRouter, {history},
      component(App)
    )
  ),
  document.getElementById('root')
);
