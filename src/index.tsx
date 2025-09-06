import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import storeConfig from 'store';
import { App } from 'components';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import 'redux-persist-transform-immutable';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={storeConfig.store}>
    <PersistGate persistor={storeConfig.persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
