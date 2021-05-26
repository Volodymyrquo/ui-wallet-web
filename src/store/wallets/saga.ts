import { put, takeEvery, call} from "redux-saga/effects";

const fetchWalletsFromApi = () => fetch('https://60a910b520a6410017306a84.mockapi.io/data/wallet');

import { actions } from './actions';
 
  //worker

  function* fetchWalletsWorker() {
    const data = yield call(fetchWalletsFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(actions.getWallet(json))
  }

  function* PostFetchWalletsWorker(params) {
    const { options } = params
    yield fetch('https://60a910b520a6410017306a84.mockapi.io/data/wallet', {
      method: 'POST',
      body: options
    })

    const newData = yield call(fetchWalletsFromApi)
    const json = yield call(() => new Promise(res => res(newData.json())))
    console.log(json)
    yield put(actions.newWallet(json))
  }

  export function* walletsWatcher() {
    yield takeEvery('SET_WALLETS', fetchWalletsWorker),
    yield takeEvery('POST_WALLETS', PostFetchWalletsWorker)
  }
