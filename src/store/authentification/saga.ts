import { put, takeEvery,call } from 'redux-saga/effects';
import {  GET_VERIFICATION_CODE, SEND_CODE} from "./actionType";
import { sendCode ,getVerificationCode,setVerificationCode} from "./actions";
import { sendCodeApi } from "../../helpers/api_helper_auth";
//worker

function* setVerificationCodeSaga({payload:code}:ReturnType<typeof getVerificationCode> ){debugger
const verificationCode = yield call(getVerificationCode, code)
    yield put(setVerificationCode(verificationCode(verificationCode)))
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

function* authentificationSaga(){debugger
yield takeEvery(GET_VERIFICATION_CODE, setVerificationCodeSaga)
yield takeEvery(SEND_CODE, sendCodeSaga)
}

export default authentificationSaga