import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./authSumra/reducer"

//users
import usersPage from "./usersPage/reducer"

//cards types
import cardsTypes from "./cardsTypes/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  usersPage,
  cardsTypes,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
