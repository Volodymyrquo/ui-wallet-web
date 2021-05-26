import { all, fork } from "redux-saga/effects"

//public
//import AuthSaga from "./auth/login/saga"
import AuthSaga from "./auth/saga"
import LayoutSaga from "./layout/saga"
<<<<<<< HEAD
import transactionsSaga from "./transactions/saga"
=======
import usersSaga from "./usersPage/saga"
import cardsTypesSaga from "./cardsTypes/saga"
import setDocumentsSaga from "./uploadDocuments/saga"
import getOptionsSaga from "./userSettings/saga"
import contactsListSaga from "./contactsList/saga"
import cardsSaga from "./cards/saga"
import currenciesSaga from "./currencies/saga"
import { walletsWatcher } from "./wallets/saga"
>>>>>>> 7c4c21d2bfcbcd07a711bdb01dad8cc33c6c54b9

export default function* rootSaga() {
  yield all([
    //public
    //fork(AuthSaga),
    fork(AuthSaga),
    LayoutSaga(),
<<<<<<< HEAD
    fork(transactionsSaga),
=======
    fork(usersSaga),
    fork(cardsTypesSaga),
    fork(setDocumentsSaga),
    fork(getOptionsSaga),
    fork(contactsListSaga),
    fork(cardsSaga),
    fork(currenciesSaga),
    fork(walletsWatcher)
>>>>>>> 7c4c21d2bfcbcd07a711bdb01dad8cc33c6c54b9
  ])
}
