import { call, put, takeEvery } from "redux-saga/effects"


import { SET_USER_SETTINGS} from "./actionTypes"
import {setUserSettingsSuccess,setUserSettings
} from "./actions"
import { UserSettingsType } from "./reducer";
type GetContactsListType = ReturnType<typeof setUserSettings>


function* fetchContactsList({payload:contactsList}:GetContactsListType) {
  try {
    const response:UserSettingsType = yield call(setUserSettings,contactsList)

   yield put(setUserSettingsSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

//watcher
function* contactsListSaga() {
  yield takeEvery(SET_USER_SETTINGS, fetchContactsList)
}

export default contactsListSaga
