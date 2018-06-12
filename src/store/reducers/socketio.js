// import { propOr, identity } from 'ramda'
import {
  SOCKETIO_SAVE
} from '../actions/actionTypes'

const initialState = {
  socketio: null
}

export const socketioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKETIO_SAVE:
      return {
        ...state,
        socketio: action.value
      }
    default:
      return state;
  }
}
