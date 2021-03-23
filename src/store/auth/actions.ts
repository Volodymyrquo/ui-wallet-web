import { InferActionTypes } from "..";
import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
} from "./actionTypes"


export type AuthActionType = InferActionTypes<typeof actions>

const actions = {
 setUserAccessToken:(accessToken:string)=> ({
  type: SET_USER_ACCESS_TOKEN,
  payload: accessToken,
} as const),
setUserName:(username:string) => ({
  type: SET_USER_NAME,
  payload: username,
} as const),
getUserAccessToken:({ username, password})=> ({
    type: GET_USER_ACCESS_TOKEN,
    payload: { username, password },
  } as const),
getUserName:() => ({
  type: GET_USER_NAME,
} as const)
}

export const {setUserAccessToken, setUserName,getUserAccessToken,getUserName} = actions