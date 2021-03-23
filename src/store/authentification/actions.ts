import { InferActionTypes } from "..";
import { SET_VERIFICATION_CODE,SEND_CODE,GET_VERIFICATION_CODE } from "./actionType";

export type SendCodeType = {
    phone_number: string
    device_id: string
  }

export type AuthenticationActionType = InferActionTypes<typeof actions>

const actions = {
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
    } as const)
}

export const {setVerificationCode, sendCode,getVerificationCode} =  actions