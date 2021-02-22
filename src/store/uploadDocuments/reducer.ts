import { SET_DOCUMENTS, SET_DOCUMENTS_FAIL } from "./actionTypes"
import { UploadDocumentsActionType } from "./actions";

export type INIT_STATE_TYPE = typeof INIT_STATE;



const INIT_STATE = {
  documents: [] as Array<File>,
  error: {}
}

const uploadDocuments = (state = INIT_STATE, action:UploadDocumentsActionType):INIT_STATE_TYPE => {
  switch (action.type) {
    case SET_DOCUMENTS:
      return {
        ...state,
        documents:[...action.payload],
      }

    case SET_DOCUMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default uploadDocuments
