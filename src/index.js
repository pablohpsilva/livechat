import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/reset.scss';
import './static/styles/main.scss';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
