import { SET_USER_SETTINGS_SUCCESS } from "./actionTypes";
import { ContactsListActionType } from "./actions";

export type UserSettingsType = {
     id:string
    userName: string
    name: string
    status: string
    tariff: string
    type: string
    description: string
    staffRemark: string
  
}

export type INIT_STATE_TYPE = typeof INIT_STATE

const INIT_STATE = {
contactsList: [] as [] | Array<UserSettingsType>
}

const contactsList = (state =INIT_STATE, action:ContactsListActionType):INIT_STATE_TYPE =>{
    switch (action.type) {
        case SET_USER_SETTINGS_SUCCESS:
      debugger
            return { 
                ...state,
                contactsList: [...state.contactsList, action.payload]
            }
    
        default:
            return state;
    }
}


export default contactsList