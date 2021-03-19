import { SET_VERIFICATION_CODE } from "./actionType";

export type SetVerificationCodeType = {type: typeof SET_VERIFICATION_CODE; payload: string}

export type ActionTypeAuthentification = SetVerificationCodeType

export const setVerificationCode = (code:string):SetVerificationCodeType =>({
    type:SET_VERIFICATION_CODE,
    payload: code
})

