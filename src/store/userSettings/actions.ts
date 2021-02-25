import { InferActionTypes } from './../index';
import { SET_STATUS_OPTIONS, SET_TARIFF_OPTIONS,SET_TYPE_OPTIONS,SET_STATUS_OPTIONS_SUCCESS, SET_TARIFF_OPTIONS_SUCCESS,SET_TYPE_OPTIONS_SUCCESS } from "./actionTypes";



 export type OptionsActionType = InferActionTypes<typeof actions>

 const actions =
   {setStatusOptions :() => ({
        type: SET_STATUS_OPTIONS
    } as const) ,
     setStatusOptionsSuccess : (statusOptions:Array<string>) => ({
        type: SET_STATUS_OPTIONS_SUCCESS,
        payload:statusOptions
    } as const) ,
    setTariffOptions : ()=> ({
        type: SET_TARIFF_OPTIONS
    } as const),
    setTariffOptionsSuccess :(tariffOptions:Array<string>) => ({
        type: SET_TARIFF_OPTIONS_SUCCESS,
        payload:tariffOptions
    } as const),

     setTypeOptions : () => ({
        type: SET_TYPE_OPTIONS
    } as const) ,

    setTypeOptionsSuccess : (typeOptions:Array<string>) => ({
        type: SET_TYPE_OPTIONS_SUCCESS,
        payload:typeOptions
    } as const),

}

export const {setStatusOptions,setStatusOptionsSuccess,setTypeOptions,setTypeOptionsSuccess,setTariffOptions,setTariffOptionsSuccess}= actions

