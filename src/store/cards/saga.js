import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CARDS, SET_CARD } from "./actionTypes"
import {
  getCardsSuccess,
  getCardsFieldsSuccess,
  toggleIsCardsFetcing,
} from "./actions"

//Include Both Helper File with needed methods
import {
  fetchListAllCards,
  fetchListAllCardsFake,
  uploadCardData,
} from "../../helpers/api_helper_sumra"

//worker

function* fetchCards() {
  try {
    const response = yield call(fetchListAllCardsFake)
    yield put(getCardsFieldsSuccess(response.fields))
    yield put(getCardsSuccess(response.data))
    yield put(toggleIsCardsFetcing(false))
  } catch (error) {
    console.log(error)
  }
}
function* uploadCard({ payload: card }) {
  try {
    yield call(uploadCardData, card)
  } catch (error) {
    console.log(error)
  }
}

//watcher

function* getCardsSaga() {
  yield takeEvery(GET_CARDS, fetchCards)
  yield takeEvery(SET_CARD, uploadCard)
}

export default getCardsSaga
