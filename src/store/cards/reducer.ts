import {GET_CARDS_SUCCESS,GET_CARDS_FIELDS_SUCCESS,IS_CARDS_FETCHING } from "./actionTypes"
import { CardsActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;

export type CardsType = {
  activate_before: string
  activated_at: string
  activation_code: string
  check_code: string
  creator_id: number
  creator_value: string
  id: number
  number: string
  numberFormatted: string
  owner_id: null | number
  owner_value: string
  status: boolean
  type_id: number
  type_value: string
}

export type FieldsType = {
  key: string
label: string
}


const INIT_STATE = {
  cards: [] as [] | Array<CardsType>,
  fields: [] as [] | Array<FieldsType>,
  isFetching: true
}

const cards = (state = INIT_STATE, action:CardsActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
      }
       case GET_CARDS_FIELDS_SUCCESS:
      return {
        ...state,
        fields: action.payload,
      }
       case IS_CARDS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }   

    default:
      return state
  }
}

export default cards
