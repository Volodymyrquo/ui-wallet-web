import { takeEvery, call, put } from "@redux-saga/core/effects"
import { GET_ASSETS } from "./actionTypes"
import { fetchAssets } from "../../helpers/api_helper_coinapi"
import { getAssetsSuccess } from "./actions"

//worker
function* getAssetsSaga() {
  try {
    const response = yield call(fetchAssets)
    yield put(getAssetsSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

//watcher

function* currenciesSaga() {
  yield takeEvery(GET_ASSETS, getAssetsSaga)
}

export default currenciesSaga
