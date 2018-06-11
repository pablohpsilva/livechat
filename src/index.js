import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/reset.scss';
import './static/styles/main.scss';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <Provider
    store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
