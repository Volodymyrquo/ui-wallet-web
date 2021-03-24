import { InferActionTypes } from "..";
import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
  SET_VERIFICATION_CODE,
  SEND_CODE,
  GET_VERIFICATION_CODE,
  GET_VALIDATE_NAME,
  SET_VALIDATE_NAME
} from "./actionTypes"
export type SendCodeType = {
  phone_number: string
  device_id: string
}


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
getUserAccessToken:({username, password})=> ({
    type: GET_USER_ACCESS_TOKEN,
    payload: { username, password },
  } as const),
getUserName:() => ({
  type: GET_USER_NAME,
} as const),
setVerificationCode: (code:string) =>({
  type:SET_VERIFICATION_CODE,
  payload: code
} as const),
getVerificationCode: (code:string) =>({
  type:GET_VERIFICATION_CODE,
  payload: code
} as const),
sendCode : (code:SendCodeType) => ({
  type:SEND_CODE,
  payload: code
} as const),
getValidateName : (value:string) => ({
  type:GET_VALIDATE_NAME,
  payload: value
} as const),

setValidateName : (value:boolean) => ({
  type:SET_VALIDATE_NAME,
  payload: value
} as const)

}

export const {
  setUserAccessToken,
   setUserName,
   getUserAccessToken,
   getUserName,
   setVerificationCode,
   sendCode,
   getVerificationCode,
   getValidateName,
   setValidateName} = actions