import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET,
  MESSAGE_SAVE,
  MESSAGE_UPDATE_USERNAME,
  USER_SAVE_USERNAME
} from './actionTypes';

export const updateInterface = value => ({
  type: SETTING_UPDATE_INTERFACE_VALUE,
  newValue: value
});

export const updateClockFormat = value => ({
  type: SETTING_UPDATE_CLOCK_VALUE,
  newValue: value
});

export const updateCtrlEnter = value => ({
  type: SETTING_UPDATE_CTRL_ENTER_VALUE,
  newValue: value
});

export const resetConfig = () => ({
  type: SETTING_RESET
});

export const saveMessage = value => ({
  type: MESSAGE_SAVE,
  newValue: value
});

export const updateUserMessage = value => ({
  type: MESSAGE_UPDATE_USERNAME,
  newValue: value
});

export const saveUsername = value => ({
  type: USER_SAVE_USERNAME,
  newValue: value
});
