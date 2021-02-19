import {
  GET_CARDS_TYPES,
  GET_CARDS_TYPES_SUCCESS,
  GET_CARDS_TYPES_FAIL,
} from "./actionTypes"


export type GetCardsTypessActionType = { type: typeof GET_CARDS_TYPES};
export type GetCardsTypesSuccessActionType = { type: typeof GET_CARDS_TYPES_SUCCESS; payload:Array<any> };
export type GetCardsTypesFailActionType = { type: typeof GET_CARDS_TYPES_FAIL; payload:any};


export type CardsTypesActionType = GetCardsTypessActionType |GetCardsTypesSuccessActionType |GetCardsTypesFailActionType

export const getCardsTypes = ():GetCardsTypessActionType => ({
  type: GET_CARDS_TYPES
})

export const getCardsTypesSuccess = (cardTypes:Array<any>):GetCardsTypesSuccessActionType => ({
  type: GET_CARDS_TYPES_SUCCESS,
  payload: cardTypes
})

export const getCardsTypesFail = (error:any):GetCardsTypesFailActionType => ({
  type: GET_CARDS_TYPES_FAIL,
  payload: error,
})
