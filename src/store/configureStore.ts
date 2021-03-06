import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { History } from 'history';
import { reducerRoot, sagaRoot } from './index';

const configureStore = (history: History) => {

  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducerRoot(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )

  sagaMiddleware.run(sagaRoot);

  return store;
}

export default configureStore;
