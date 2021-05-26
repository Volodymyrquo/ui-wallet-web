import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import authReducer from "./auth/reducer"

// Transactions

import transactions from "./transactions/reducer"

<<<<<<< HEAD
=======
import userPhoto from "./userPhoto/reducer"
//user settings
import userSettings from "./userSettings/reducer"
//contacts list
import contactsList from "./contactsList/reducer"
//cards list
import cardsList from "./cards/reducer"
//currencies
import currencies from "./currencies/reducer"
//wallets
import wallets from "./wallets/walletsReducer"
//referrals
import referrals from "./referrals/buttonReducer"
>>>>>>> 7c4c21d2bfcbcd07a711bdb01dad8cc33c6c54b9



const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
<<<<<<< HEAD
  transactions
=======
  usersPage,
  cardsTypes,
  uploadDocuments,
  userPhoto,
  userSettings,
  contactsList,
  cardsList,
  currencies,
  wallets,
  referrals
>>>>>>> 7c4c21d2bfcbcd07a711bdb01dad8cc33c6c54b9
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
