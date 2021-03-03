import { GET_CARDS_TYPES_SUCCESS, GET_FIELDS_SUCCESS,IS_FETCHING } from "./actionTypes"
import { CardsTypesActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;

export type TypesType = {
currency_id: number
currency_value: string
description: string
id:number
months: number
name: string
price_finish: string //should make number ???
price_start: string //should make number ???
series_id: number
series_value: string
}

export type FieldsType = {
  key: string
label: string
}


const INIT_STATE = {
  types: [] as [] | Array<TypesType>,
  fields: [] as [] | Array<FieldsType>,
  isFetching: true
}

const cardTypes = (state = INIT_STATE, action:CardsTypesActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case GET_CARDS_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload,
      }
       case GET_FIELDS_SUCCESS:
      return {
        ...state,
        fields: action.payload,
      }
       case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }

    default:
      return state
  }
}

export default cardTypes
