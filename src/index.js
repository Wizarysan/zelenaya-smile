import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configStore from './store/configStore';
import {Provider} from 'react-redux';

const store = configStore();
// window.globalSmileAppMethods = {
//   '1': '1'
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
