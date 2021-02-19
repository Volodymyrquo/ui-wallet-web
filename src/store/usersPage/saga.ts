import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_USERS} from "./actionTypes"
import {
  getUsersSuccess,
  getUsersFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getUsers} from "../../common/data"

type GetUserType = ReturnType<typeof getUsers>

function* fetchUsers() {
  try {
    const response:GetUserType = yield call(getUsers)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

//watcher
function* contactsSaga() {
  yield takeEvery(GET_USERS, fetchUsers)
}

export default contactsSaga
