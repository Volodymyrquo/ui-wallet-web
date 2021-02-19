import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from "./actionTypes"

import { UsersPageActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;


const INIT_STATE = {
  users: [],
  userProfile: {},
  error: {},
}

const usersPage = (state = INIT_STATE, action:UsersPageActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }

    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      }

    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default usersPage
