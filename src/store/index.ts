import {
  applyMiddleware,
  compose,
  createStore,
  AnyAction,
  Reducer,
  Store,
  StoreEnhancer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import {
  persistCombineReducers,
  persistStore,
  Persistor,
  PersistConfig,
  PersistedState,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import queryString from 'query-string';
import { routesMap } from 'consts';
import reducers from 'reducers';
import rootSaga from 'sagas';
import i18n from './i18n';

const isProd: boolean = process.env.NODE_ENV === 'production';

const routerConfig: Record<string, any> = {
  initialDispatch: false,
  querySerializer: queryString,
};

const persistConfig: PersistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: ['i18n'],
};

const router: Record<string, any> = connectRoutes(routesMap, routerConfig);

const combinedReducer: Reducer<
  PersistedState,
  AnyAction
> = persistCombineReducers(persistConfig, {
  ...reducers,
  location: router.reducer,
});

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const middlewareEnhancer: StoreEnhancer = applyMiddleware(
  sagaMiddleware,
  router.middleware,
);
const composedEnhancers: StoreEnhancer = isProd
  ? compose(
      router.enhancer,
      middlewareEnhancer,
    )
  : composeWithDevTools(router.enhancer, middlewareEnhancer);

const store: Store = createStore(combinedReducer, composedEnhancers);

const persistor: Persistor = persistStore(
  store,
  undefined,
  (): void => {
    i18n(store);
    router.initialDispatch();
  },
);

sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor,
};
