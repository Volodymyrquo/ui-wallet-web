import { takeEvery, call, put } from "@redux-saga/core/effects"
import { GET_ASSETS } from "./actionTypes"
import { fetchAssets } from "../../helpers/api_helper_coinapi"
import { getAssetsSuccess, isAssetsFetching } from "./actions"

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

//watcher

function* currenciesSaga() {
  yield takeEvery(GET_ASSETS, getAssetsSaga)
}

export default currenciesSaga
