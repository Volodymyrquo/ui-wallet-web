import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./auth/reducer"

// Transactions

import transactions from "./transactions/reducer"

// import userPhoto from "./userPhoto/reducer"
// //user settings
// import userSettings from "./userSettings/reducer"
// //contacts list
// import contactsList from "./contactsList/reducer"
// //cards list
// import cardsList from "./cards/reducer"
// //currencies
// import currencies from "./currencies/reducer"
//wallets
import wallets from "./wallets/walletsReducer"
//referrals
import referrals from "./referrals/buttonReducer"



const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  transactions,
  // usersPage,
  // cardsTypes,
  // uploadDocuments,
  // userPhoto,
  // userSettings,
  // contactsList,
  // cardsList,
  // currencies,
  wallets,
  referrals
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
