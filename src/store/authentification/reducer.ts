import { SET_VERIFICATION_CODE } from "./actionType";
import {AuthenticationActionType} from "./actions";


type INIT_STATE_TYPE = typeof INIT_STATE

const INIT_STATE = {
verificationCode: ''
}

const authentificationReducer = (state = INIT_STATE, action:AuthenticationActionType):INIT_STATE_TYPE=>{
    switch(action.type) {
        case SET_VERIFICATION_CODE:
            return {
                ...state,
                verificationCode: action.payload.toUpperCase()
            }
        default:
            return state
    }
}

export default authentificationReducer