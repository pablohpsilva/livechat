import { localStorageOr } from '../../utils/util'
import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET
} from '../actions/actionTypes';

const initialState = localStorageOr({
  interfaceColor: 'light',
  clockDisplay: 'MMM DD hh:mm A',
  ctrlEnter: 'on',
  defaultConfig: {
    interfaceColor: 'light',
    clockDisplay: 'MMM DD hh:mm A',
    ctrlEnter: 'on'
  }
}, 'settingsState');

console.log(initialState)

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
