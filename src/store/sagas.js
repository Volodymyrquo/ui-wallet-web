import { all, fork } from "redux-saga/effects"

//public
//import AuthSaga from "./auth/login/saga"
import AuthSumraSaga from "./authSumra/saga"
import LayoutSaga from "./layout/saga"
import usersSaga from "./usersPage/saga"
import cardsTypesSaga from "./cardsTypes/saga"

export default function* rootSaga() {
  yield all([
    //public
    //fork(AuthSaga),
    fork(AuthSumraSaga),
    LayoutSaga(),
    fork(usersSaga),
    fork(cardsTypesSaga),
  ])
}
