import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET,
  MESSAGE_UPDATE_UNREAD,
  MESSAGE_CLEAN_UNREAD,
  MESSAGE_SAVE,
  MESSAGE_UPDATE_USERNAME,
  USER_SAVE_USERNAME,
  SOCKETIO_SAVE
} from './actionTypes';

export const updateInterface = value => ({
  type: SETTING_UPDATE_INTERFACE_VALUE,
  value
});

export const updateClockFormat = value => ({
  type: SETTING_UPDATE_CLOCK_VALUE,
  value
});

export const updateCtrlEnter = value => ({
  type: SETTING_UPDATE_CTRL_ENTER_VALUE,
  value
});

export const resetConfig = () => ({
  type: SETTING_RESET
});

export const saveMessage = value => ({
  type: MESSAGE_SAVE,
  value
});

export const updateUnreadMessage = value => ({
  type: MESSAGE_UPDATE_UNREAD,
  value
});

export const clearUnreadMessage = value => ({
  type: MESSAGE_CLEAN_UNREAD,
  value
});

export const updateUserMessage = value => ({
  type: MESSAGE_UPDATE_USERNAME,
  value
});

export const saveUsername = value => ({
  type: USER_SAVE_USERNAME,
  value
});

export const saveSocketio = value => ({
  type: SOCKETIO_SAVE,
  value
});

