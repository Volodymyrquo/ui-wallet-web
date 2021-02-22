import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CARDS_TYPES } from "./actionTypes"
import { getCardsTypesSuccess, getCardsTypesFail } from "./actions"

//Include Both Helper File with needed methods
import { getCardsTypes } from "../../common/data"

//worker

type GetCardsTypesTypes = ReturnType<typeof getCardsTypes>

function* fetchCardsTypes() {
  try {
    const response:GetCardsTypesTypes = yield call(getCardsTypes)
    yield put(getCardsTypesSuccess(response))
  } catch (error) {
    yield put(getCardsTypesFail(error))
  }
}

//watcher

function* getCardsTypesSaga() {

  yield takeEvery(GET_CARDS_TYPES, fetchCardsTypes)
}

export default getCardsTypesSaga
