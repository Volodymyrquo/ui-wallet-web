import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./authSumra/reducer"

//users
import usersPage from "./usersPage/reducer"

//cards types
import cardsTypes from "./cardsTypes/reducer"
//upload documents
import uploadDocuments from "./uploadDocuments/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  usersPage,
  cardsTypes,
  uploadDocuments,

})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
