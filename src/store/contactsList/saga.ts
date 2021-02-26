import { call, put, takeEvery } from "redux-saga/effects"


import { SET_USER_SETTINGS} from "./actionTypes"
import {setUserSettingsSuccess,setUserSettings
} from "./actions"
import { UserSettingsType } from "./reducer";
import { getUserSettings } from "../../common/data";
type GetContactsListType = ReturnType<typeof getUserSettings>


function* fetchContactsList() {debugger
  try {
    const response:GetContactsListType = yield call(getUserSettings)

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
