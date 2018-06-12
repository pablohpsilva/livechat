import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_UPDATE_LANGUAGE_VALUE,
  SETTING_RESET
} from '../actions/actionTypes'

export const saveLocalStorage = store => next => action => {
  const settingsActions = [
    SETTING_UPDATE_INTERFACE_VALUE,
    SETTING_UPDATE_CLOCK_VALUE,
    SETTING_UPDATE_CTRL_ENTER_VALUE,
    SETTING_UPDATE_LANGUAGE_VALUE,
    SETTING_RESET
  ]

  const result = next(action)
  if (settingsActions.find(el => el === action.type)) {
    window.localStorage.setItem('settingsState', JSON.stringify(store.getState().settingsState))
  }
  return result
}
