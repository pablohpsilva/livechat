// import { propOr, identity } from 'ramda'
import {
  MESSAGE_SAVE,
  MESSAGE_UPDATE_USERNAME
} from '../actions/actionTypes'

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SAVE:
      const messages = [...state.messages]
      messages.push(action.value)
      return {
        ...state,
        messages
      }
    case MESSAGE_UPDATE_USERNAME:
      const {
        oldUser,
        user
      } = action.value
      const updatedMessages = [...state.messages]
        .map(message => {
          if (message.user === oldUser) {
            message.user = user
          }
          return message
        })
      return {
        ...state,
        messages: updatedMessages
      }
    default:
      return state;
  }
}
