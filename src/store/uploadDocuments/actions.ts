import {
  SET_DOCUMENTS,
  SET_DOCUMENTS_SUCCESS,
  SET_DOCUMENTS_FAIL,
} from "./actionTypes"


export type SetDocumentsActionType = { type: typeof SET_DOCUMENTS, payload: Array<File>};
export type SetDocumentsSuccessActionType = { type: typeof SET_DOCUMENTS_SUCCESS, payload: Array<File>};
export type SetDocumentsFailActionType = { type: typeof SET_DOCUMENTS_FAIL; payload:any};


export type UploadDocumentsActionType = SetDocumentsActionType |SetDocumentsSuccessActionType|SetDocumentsFailActionType

export const setDocuments = (documents:Array<File>):SetDocumentsActionType => {

  return {
    type: SET_DOCUMENTS,
    payload:documents
  }
  
}

export const setDocumentsSuccess = (documents:Array<File>):SetDocumentsSuccessActionType => ({
  type: SET_DOCUMENTS_SUCCESS,
  payload: documents

})

export const setDocumentsFail = (error:any):SetDocumentsFailActionType => ({
  type: SET_DOCUMENTS_FAIL,
  payload: error,
})
