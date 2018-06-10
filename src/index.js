import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/main.scss';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
