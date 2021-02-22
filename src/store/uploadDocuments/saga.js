import { call, put, takeEvery } from "redux-saga/effects"

import { SET_DOCUMENTS } from "./actionTypes"
import { setDocuments, setDocumentsSuccess } from "./actions"

//worker

function* uploadDocuments() {
  yield console.log("Hello from Saga")
}

//watcher

function* setDocumentsSaga() {
  yield takeEvery(SET_DOCUMENTS, uploadDocuments)
}

export default setDocumentsSaga
