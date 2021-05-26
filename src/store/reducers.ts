import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./auth/reducer"

// Transactions

import transactions from "./transactions/reducer"




const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  transactions
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
