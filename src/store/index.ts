import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

debugger
sagaMiddleware.run(rootSaga)

type PropertiesTypes<T> = T extends {[key:string]:infer U}? U: never

export type InferActionTypes<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertiesTypes<T>>



export default store
