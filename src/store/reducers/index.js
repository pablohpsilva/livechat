import { settingsReducer } from './settings';
import { messagesReducer } from './message';
import { userReducer } from './user';
import { socketioReducer } from './socketio';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  settingsState: settingsReducer,
  messagesState: messagesReducer,
  userState: userReducer,
  socketioState: socketioReducer
});
