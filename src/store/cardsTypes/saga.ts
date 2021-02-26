import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CARDS_TYPES } from "./actionTypes"
import { getCardsTypesSuccess, getFieldsSuccess  } from "./actions"

//Include Both Helper File with needed methods
import { fetchListCardTypes } from "../../helpers/api_helper_sumra"

//worker



function* fetchCardsTypes() {
  try {
    const response = yield call(fetchListCardTypes)
    yield put(getCardsTypesSuccess(response.data))
    yield put(getFieldsSuccess(response.fields))
  } catch (error) {
    console.log(error)
  }
}

//watcher

function* getCardsTypesSaga() {

  yield takeEvery(GET_CARDS_TYPES, fetchCardsTypes)
}

export default getCardsTypesSaga
