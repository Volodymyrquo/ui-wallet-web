import { InferActionTypes } from "..";
import {
  GET_CARDS,
  SET_CARD,
  GET_CARDS_SUCCESS,
 IS_CARDS_FETCHING,
 GET_CARDS_FIELDS_SUCCESS
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
  setCard :(card:CardsType) => ({
    type: SET_CARD,
    payload: card
  } as const ),
  
  getCardsFieldsSuccess :(fields:Array<FieldsType>) => ({
    type: GET_CARDS_FIELDS_SUCCESS,
    payload: fields,
  } as const ),
  toggleIsCardsFetcing :(isFetchig:boolean) => ({
    type: IS_CARDS_FETCHING,
    payload: isFetchig,
  } as const )
  

}

export const {getCards, getCardsSuccess, getCardsFieldsSuccess,toggleIsCardsFetcing, setCard} = actions
