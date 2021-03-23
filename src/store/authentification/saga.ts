import { put, takeEvery,call } from 'redux-saga/effects';
import {  GET_VERIFICATION_CODE, SEND_CODE} from "./actionType";
import { sendCode ,setVerificationCode} from "./actions";
import { sendCodeApi } from "../../helpers/api_helper_auth";
//worker

function* setVerificationCodeSaga({payload:code}:ReturnType<typeof setVerificationCode> ){
    yield put(setVerificationCode(code))
}

function* sendCodeSaga({payload:code}:ReturnType<typeof sendCode> ){
    try {
         const response = yield call(sendCodeApi,code)
         console.log(response)

    } catch (error) {
        console.log(error)
    }

}

//watcher

function* authentificationSaga(){
yield takeEvery(GET_VERIFICATION_CODE, setVerificationCodeSaga)
yield takeEvery(SEND_CODE, sendCodeSaga)
}

export default authentificationSaga