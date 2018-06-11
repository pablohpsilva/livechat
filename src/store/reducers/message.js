// import { propOr, identity } from 'ramda'
import {
  MESSAGE_SAVE,
  MESSAGE_UPDATE_USERNAME
} from '../actions/actionTypes';

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SAVE:
      const messages = [...state.messages]
      messages.push(action.newValue)
      return {
        ...state,
        messages
      }
    case MESSAGE_UPDATE_USERNAME:
      const {
        oldUsername,
        username
      } = action.newValue
      const updatedMessages = [...state.messages]
        .map(message => {
          if (message.author === oldUsername) {
            message.author = username
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
