import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { SET_STATUS_OPTIONS, SET_TARIFF_OPTIONS,SET_TYPE_OPTIONS} from "./actionTypes"
import {setStatusOptionsSuccess,setTypeOptionsSuccess,setTariffOptionsSuccess} from "./actions"

//Include Both Helper File with needed methods
import { getStatusOptions,getTypefOptions,getTariffOptions} from "../../common/data"

//worker

type GetStatusOptionsType = ReturnType<typeof getStatusOptions>
type GetTariffOptionsType = ReturnType<typeof getTariffOptions>
type GetTypeOptionsType = ReturnType<typeof getTypefOptions>

function* fetchStatusOptions() {
  try {
    const response:GetStatusOptionsType = yield call(getStatusOptions)
    yield put(setStatusOptionsSuccess(response))
  } catch (error) {
    yield console.log(error)
  }
}
function* fetchTariffOptions() {
  try {
    const response:GetTariffOptionsType = yield call(getTariffOptions)
    yield put(setTariffOptionsSuccess(response))
  } catch (error) {
    yield console.log(error)
  }
}
function* fetchTypeOptions() {
  try {
    const response:GetTypeOptionsType = yield call(getTypefOptions)
    yield put(setTypeOptionsSuccess(response))
  } catch (error) {
    yield console.log(error)
  }
}


//watcher

function* getOptionsSaga() {

  yield takeEvery(SET_STATUS_OPTIONS, fetchStatusOptions)
  yield takeEvery(SET_TARIFF_OPTIONS, fetchTariffOptions)
  yield takeEvery(SET_TYPE_OPTIONS, fetchTypeOptions)
}

export default getOptionsSaga
