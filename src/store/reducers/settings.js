// import { propOr, identity } from 'ramda'
import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET
} from '../actions/actionTypes';

const initialState = {
  interfaceColor: 'light',
  clockDisplay: '12',
  ctrlEnter: 'on',
  defaultConfig: {
    interfaceColor: 'light',
    clockDisplay: '12',
    ctrlEnter: 'on'
  }
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTING_UPDATE_INTERFACE_VALUE:
      return {
        ...state,
        interfaceColor: action.newValue
      }
    case SETTING_UPDATE_CLOCK_VALUE:
      return {
        ...state,
        clockDisplay: action.newValue
      }
    case SETTING_UPDATE_CTRL_ENTER_VALUE:
      return {
        ...state,
        ctrlEnter: action.newValue
      }
    case SETTING_RESET:
      return {
        ...state,
        ...state.defaultConfig
      }
    default:
      return state;
  }
}
