import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET,
  MESSAGE_SAVE_INCOMING,
  MESSAGE_SAVE_OUTGOING,
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

export const saveIncomingMessage = value => ({
  type: MESSAGE_SAVE_INCOMING,
  newValue: value
});

export const saveOutgoingMessage = value => ({
  type: MESSAGE_SAVE_OUTGOING,
  newValue: value
});

export const saveUsername = value => ({
  type: USER_SAVE_USERNAME,
  newValue: value
});
