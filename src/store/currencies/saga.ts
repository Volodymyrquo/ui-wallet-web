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

function* getAssetsDataArraySaga(){

  const responseBTC = yield call(fetchLatestDataArray, "BTC")
  const dataExtendsBTC = yield responseBTC.map(item => ({
    ...item,
    asset_id: "BTC",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsBTC))
  
  const responseLTC = yield call(fetchLatestDataArray, "LTC")
  const dataExtendsLTC = yield responseLTC.map(item => ({
    ...item,
    asset_id: "LTC",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsLTC))

  const responseETH = yield call(fetchLatestDataArray, "ETH")
  const dataExtendsETH = yield responseETH.map(item => ({
    ...item,
    asset_id: "ETH",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsETH))

  const responseEOS = yield call(fetchLatestDataArray, "EOS")
  const dataExtendsEOS = yield responseEOS.map(item => ({
    ...item,
    asset_id: "EOS",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsEOS))

  const responseBCH = yield call(fetchLatestDataArray, "BCH")
  const dataExtendsBCH = yield responseBCH.map(item => ({
    ...item,
    asset_id: "BCH",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsBCH))

  const responseLINK = yield call(fetchLatestDataArray, "LINK")
  const dataExtendsLINK = yield responseLINK.map(item => ({
    ...item,
    asset_id: "LINK",
  }))
  yield put(getAssetsDataArraySuccess(dataExtendsLINK))

}

//watcher

function* currenciesSaga() {
  yield takeEvery(GET_ASSETS, getAssetsSaga)
  yield takeEvery(GET_ASSETS_DATA, getAssetsDataSaga)
  yield takeEvery(GET_ASSETS, getAssetsDataArraySaga)

}

export default currenciesSaga
