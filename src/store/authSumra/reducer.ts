import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
} from "./actionTypes"

import { ActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;


const INIT_STATE = {
  accessToken: null as null | string,
  username: "",
  invalidUserName: false,
  isAuth: false
}

const authReducer = (state = INIT_STATE, action:ActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case SET_USER_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        isAuth: true
      }
    case GET_USER_ACCESS_TOKEN:
      return {
        ...state,
      }
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
