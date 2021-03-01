import { InferActionTypes } from "..";
import {
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_FIELDS_SUCCESS,
  IS_FETCHING
} from "./actionTypes"
import { CardsType, FieldsType } from "./reducer";

export type CardsActionType = InferActionTypes<typeof actions>


const actions = {
  getCards :() => ({
    type: GET_CARDS
  } as const),
  
  getCardsSuccess :(cards:Array<CardsType>) => ({
    type: GET_CARDS_SUCCESS,
    payload: cards
  } as const ),
  
  getFieldsSuccess :(fields:Array<FieldsType>) => ({
    type: GET_FIELDS_SUCCESS,
    payload: fields,
  } as const ),
  toggleIsFetcing :(isFetchig:boolean) => ({
    type: IS_FETCHING,
    payload: isFetchig,
  } as const )
  

}

export const {getCards, getCardsSuccess, getFieldsSuccess,toggleIsFetcing} = actions
