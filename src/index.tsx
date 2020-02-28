import * as React from "react";
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './main';
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
