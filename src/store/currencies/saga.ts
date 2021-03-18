import { takeEvery, call, put } from "@redux-saga/core/effects"
import { GET_ASSETS, GET_ASSETS_DATA } from "./actionTypes"
import {
  fetchAssets,
  fetchHistoricalData,
  fetchLatestDataArray,
} from "../../helpers/api_helper_coinapi"
import {
  getAssetsSuccess,
  isAssetsFetching,
  getAssetsDataSuccess,
  getAssetsDataArraySuccess,
  getAssetsData
} from "./actions"

//worker
function* getAssetsSaga() {
  try {
    yield put(isAssetsFetching(true))
    const response = yield call(fetchAssets)
    yield put(getAssetsSuccess(response))
    const responseBTC = yield call(fetchLatestDataArray, "BTC")
    const dataExtended = yield responseBTC.map(item => ({
      ...item,
      asset_id: "BTC",
    }))
    yield put(getAssetsDataArraySuccess(dataExtended))
    const responseLTC = yield call(fetchLatestDataArray, "BTC")
    const dataExtends = yield responseLTC.map(item => ({
      ...item,
      asset_id: "LTC",
    }))
    yield put(getAssetsDataArraySuccess(dataExtends))

    yield put(isAssetsFetching(false))
  } catch (error) {
    console.log(error)
  }
}
function* getAssetsDataSaga({ payload: ticker }:ReturnType<typeof getAssetsData>) {
  try {
    yield put(isAssetsFetching(true))
    const response = yield call(fetchHistoricalData, ticker)
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
