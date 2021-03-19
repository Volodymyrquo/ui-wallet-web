import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
} from "./actionTypes"

type SetUserAccessTokenActionType = {
  type: typeof SET_USER_ACCESS_TOKEN
  payload: string
}
type SetUserNameActionType = {type: typeof SET_USER_NAME; payload: string}
export type GetUserAccessTokenType = {username:string;password:string}
type GetUserAccessTokenActionType = {type: typeof GET_USER_ACCESS_TOKEN;  payload: GetUserAccessTokenType}
type GetUserNameActionType = { type: typeof GET_USER_NAME }

export type ActionType = SetUserAccessTokenActionType | SetUserNameActionType | GetUserAccessTokenActionType | GetUserNameActionType

export const setUserAccessToken = (accessToken:string):SetUserAccessTokenActionType => ({
  type: SET_USER_ACCESS_TOKEN,
  payload: accessToken,
})
export const setUserName = (username:string):SetUserNameActionType => ({
  type: SET_USER_NAME,
  payload: username,
})


export const getUserAccessToken = ({ username, password}:GetUserAccessTokenType):GetUserAccessTokenActionType => ({
    type: GET_USER_ACCESS_TOKEN,
    payload: { username, password },
  })

export const getUserName = ():GetUserNameActionType => ({
  type: GET_USER_NAME,
})
