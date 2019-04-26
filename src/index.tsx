import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import storeConfig from 'store';
import { App } from 'components';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactGA.initialize('UA-139131237-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={storeConfig.store}>
    <PersistGate persistor={storeConfig.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
