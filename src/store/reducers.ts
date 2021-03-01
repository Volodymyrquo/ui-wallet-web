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
//user photo 

import userPhoto from "./userPhoto/reducer"
//user settings
import userSettings from "./userSettings/reducer"
//contacts list
import contactsList from "./contactsList/reducer"
//cards list
import cardsList from "./cards/reducer"


const rootReducer = combineReducers({
  // public
  Layout,
  authReducer,
  usersPage,
  cardsTypes,
  uploadDocuments,
  userPhoto,
  userSettings,
  contactsList,
  cardsList

})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


export default rootReducer
