// import { propOr, identity } from 'ramda'
import {
  USER_SAVE_USERNAME
} from '../actions/actionTypes';

const initialState = {
  username: 'Guest-World-1'
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVE_USERNAME:
      return {
        ...state,
        username: action.newValue
      }
    default:
      return state;
  }
}
