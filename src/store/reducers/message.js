// import { propOr, identity } from 'ramda'
import {
  MESSAGE_SAVE
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
    default:
      return state;
  }
}
