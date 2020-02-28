import * as React from "react";
import Routes from './router/router'
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux'
import { Provider } from 'react-redux';
import { History } from 'history';

import { stateObject } from './store/index'
// 入口文件

interface MainStore {
  store: Store<stateObject>,
  history: History
}

const App: React.FC<MainStore> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
