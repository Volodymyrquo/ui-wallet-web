import { GET_CARDS_TYPES_SUCCESS, GET_CARDS_TYPES_FAIL } from "./actionTypes"
import { ActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;



const INIT_STATE = {
  types: [],
  error: {} 
}

const cardTypes = (state = INIT_STATE, action:ActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case GET_CARDS_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload,
      }

    case GET_CARDS_TYPES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default cardTypes
