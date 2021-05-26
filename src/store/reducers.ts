import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./auth/reducer"

// Transactions

import transactions from "./transactions/reducer"

//wallets
import wallets from "./wallets/walletsReducer"
//referrals
import referrals from "./referrals/buttonReducer"

const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  transactions,
  wallets,
  referrals
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
