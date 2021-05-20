import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {GET_TRANSACTIONS} from "./actionTypes"
import {
 getTransactionsSuccess, getTransactionsFail
} from "./actions"

//Include Both Helper File with needed methods
import { transactionsHistory } from "../../common/data/transactions"


function* fetchTrasactions() {
  try {
    const response = yield call(transactionsHistory)
    yield put(getTransactionsSuccess(response))
  } catch (error) {
    yield put(getTransactionsFail(error))
  }
}


function* transactionsSaga() {
  yield takeEvery(GET_TRANSACTIONS, fetchTrasactions)
}

export default transactionsSaga