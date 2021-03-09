import { takeEvery, call, put } from "@redux-saga/core/effects"
import { GET_ASSETS, GET_ASSETS_DATA } from "./actionTypes"
import {
  fetchAssets,
  fetchHistoricalData,
} from "../../helpers/api_helper_coinapi"
import {
  getAssetsSuccess,
  isAssetsFetching,
  getAssetsDataSuccess,
} from "./actions"

//worker
function* getAssetsSaga() {
  try {
    yield put(isAssetsFetching(true))
    const response = yield call(fetchAssets)
    yield put(getAssetsSuccess(response))
    yield put(isAssetsFetching(false))
  } catch (error) {
    console.log(error)
  }
}
function* getAssetsDataSaga() {
  try {
    yield put(isAssetsFetching(true))
    const response = yield call(fetchHistoricalData)
    yield put(getAssetsDataSuccess(response))
    yield put(isAssetsFetching(false))
  } catch (error) {
    console.log(error)
  }
}

//watcher

function* currenciesSaga() {
  yield takeEvery(GET_ASSETS, getAssetsSaga)
  yield takeEvery(GET_ASSETS_DATA, getAssetsDataSaga)
}

export default currenciesSaga
