import { put, takeEvery } from 'redux-saga/effects';
import {  SET_VERIFICATION_CODE} from "./actionType";
import { SetVerificationCodeType ,setVerificationCode} from "./actions";
//worker

function* setVerificationCodeSaga({payload:code}: SetVerificationCodeType){
    yield put(setVerificationCode(code))
}

//watcher

function* authentificationSaga(){
yield takeEvery(SET_VERIFICATION_CODE, setVerificationCodeSaga)
}

export default authentificationSaga