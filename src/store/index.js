import { createStore, applyMiddleware } from 'redux';
import saveLocalStorage from './middlewares'
import { Reducers } from './reducers';

export const Store = createStore(
  Reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveLocalStorage),
);
