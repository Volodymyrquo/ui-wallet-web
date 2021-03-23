import { takeEvery, put, call } from "redux-saga/effects"

// Calender Redux States
import {
  GET_USER_ACCESS_TOKEN,
  GET_VERIFICATION_CODE,
  SEND_CODE,
} from "./actionTypes"
import {
  setUserAccessToken,
  setUserName,
  sendCode,
  setVerificationCode,
  getUserAccessToken
} from "./actions"
//Include Both Helper File with needed methods
import { fetchAuth } from "../../helpers/api_helper"
import { sendCodeApi } from "../../helpers/api_helper_auth"

//wokers
function* signIn({ payload: { username, password } }:ReturnType<typeof getUserAccessToken>) {
  try {
    const { access_token } = yield call(fetchAuth, { username, password })
    /* const { access_token, expires_in, refresh_token, token_type } = response */
    yield put(setUserAccessToken(access_token))
    yield localStorage.setItem("token", access_token)
    yield put(setUserName(username))
  } catch (error) {
    console.log(error)
  }
}

function* setVerificationCodeSaga({
  payload: code,
}: ReturnType<typeof setVerificationCode>) {
  yield put(setVerificationCode(code))
}

function* sendCodeSaga({ payload: code }: ReturnType<typeof sendCode>) {
  try {
    const response = yield call(sendCodeApi, code)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

//watcher

function* authSumraSaga() {
  yield takeEvery(GET_USER_ACCESS_TOKEN, signIn)
  yield takeEvery(GET_VERIFICATION_CODE, setVerificationCodeSaga)
  yield takeEvery(SEND_CODE, sendCodeSaga)
}

export default authSumraSaga
