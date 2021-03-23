import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,SET_VERIFICATION_CODE
} from "./actionTypes"

import { AuthActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;


const INIT_STATE = {
  accessToken: null as null | string,
  username: "",
  invalidUserName: false,
  isAuth: false,
  verificationCode: ''
}

const authReducer = (state = INIT_STATE, action:AuthActionType):INIT_STATE_TYPE => {
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
      case SET_VERIFICATION_CODE:
        return {
            ...state,
            verificationCode: action.payload.toUpperCase(),
            isAuth: true
        }

    default:
      return state
  }
}

export default authReducer
