import {
  SET_STATUS_OPTIONS_SUCCESS,
  SET_TARIFF_OPTIONS_SUCCESS,
  SET_TYPE_OPTIONS_SUCCESS,
} from "./actionTypes"
import {OptionsActionType} from './actions'

export type INIT_STATE_TYPE = typeof INIT_STATE

const INIT_STATE = {
  statusOptions: [],
  typeOptions: [],
  tariffOptions: [],
}

const userSettings = (state = INIT_STATE, action:OptionsActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case SET_STATUS_OPTIONS_SUCCESS:
      return {
        ...state,
        statusOptions: action.payload,
      }
    case SET_TARIFF_OPTIONS_SUCCESS:
      return {
        ...state,
        tariffOptions: action.payload,
      }
    case SET_TYPE_OPTIONS_SUCCESS:
      return {
        ...state,
        typeOptions: action.payload,
      }

    default:
      return state
  }
}

export default userSettings
