import { InferActionTypes } from './../index';
import { SET_STATUS_OPTIONS, SET_TARIFF_OPTIONS,SET_TYPE_OPTIONS,SET_STATUS_OPTIONS_SUCCESS, SET_TARIFF_OPTIONS_SUCCESS,SET_TYPE_OPTIONS_SUCCESS } from "./actionTypes";



 export type OptionsActionType = InferActionTypes<typeof actions>

 const actions =
   {setStatusOptions :() => ({
        type: SET_STATUS_OPTIONS
    } as const) ,
     setStatusOptionsSuccess : (status:Array<string>) => ({
        type: SET_STATUS_OPTIONS_SUCCESS,
        payload:status
    } as const) ,
    setTariffOptions : ()=> ({
        type: SET_TARIFF_OPTIONS
    } as const),
    setTariffOptionsSuccess :(tariff:Array<string>) => ({
        type: SET_TARIFF_OPTIONS_SUCCESS,
        payload:tariff
    } as const),

     setTypeOptions : () => ({
        type: SET_TYPE_OPTIONS
    } as const) ,

    setTypeOptionsSuccess : (type:Array<string>) => ({
        type: SET_TYPE_OPTIONS_SUCCESS,
        payload:type
    } as const),

}

export const {setStatusOptions,setStatusOptionsSuccess,setTypeOptions,setTypeOptionsSuccess,setTariffOptions,setTariffOptionsSuccess}= actions

