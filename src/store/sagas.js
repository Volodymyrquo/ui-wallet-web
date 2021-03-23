import { all, fork } from "redux-saga/effects"

//public
//import AuthSaga from "./auth/login/saga"
import AuthSaga from "./auth/saga"
import LayoutSaga from "./layout/saga"
import usersSaga from "./usersPage/saga"
import cardsTypesSaga from "./cardsTypes/saga"
import setDocumentsSaga from "./uploadDocuments/saga"
import getOptionsSaga from "./userSettings/saga"
import contactsListSaga from "./contactsList/saga"
import cardsSaga from "./cards/saga"
import currenciesSaga from "./currencies/saga"

export default function* rootSaga() {
  yield all([
    //public
    //fork(AuthSaga),
    fork(AuthSaga),
    LayoutSaga(),
    fork(usersSaga),
    fork(cardsTypesSaga),
    fork(setDocumentsSaga),
    fork(getOptionsSaga),
    fork(contactsListSaga),
    fork(cardsSaga),
    fork(currenciesSaga),
  ])
}
