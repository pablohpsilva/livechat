import {
  SETTING_UPDATE_INTERFACE_VALUE,
  SETTING_UPDATE_CLOCK_VALUE,
  SETTING_UPDATE_CTRL_ENTER_VALUE,
  SETTING_RESET
} from '../actions/actionTypes'

export const saveLocalStorage = store => next => action => {
  const settingsActions = [
    SETTING_UPDATE_INTERFACE_VALUE,
    SETTING_UPDATE_CLOCK_VALUE,
    SETTING_UPDATE_CTRL_ENTER_VALUE,
    SETTING_RESET
  ]

  const result = next(action)
  if (settingsActions.find(el => el === action.type)) {
    window.localStorage.setItem('settingsState', JSON.stringify(store.getState().settingsState))
    // console.group(action.type)
    // console.info('dispatching', action)
    // // let result = next(action)
    // console.log('next state', store.getState())
    // console.groupEnd()
  }
  return result
}
