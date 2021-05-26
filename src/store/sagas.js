import { all, fork } from "redux-saga/effects"

//public
//import AuthSaga from "./auth/login/saga"
import AuthSaga from "./auth/saga"
import LayoutSaga from "./layout/saga"
import transactionsSaga from "./transactions/saga"
import { walletsWatcher } from "./wallets/saga"

export default function* rootSaga() {
  yield all([
    //public
    //fork(AuthSaga),
    fork(AuthSaga),
    LayoutSaga(),
    fork(transactionsSaga),
    fork(walletsWatcher),
  ])
}
