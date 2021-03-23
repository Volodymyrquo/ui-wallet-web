import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Auth/LoginForm"
import Confirm from "../pages/Auth/ConfirmForm"
import UserForm from "../pages/Auth/UserForm"
import FirstForm from "../pages/Auth/FirstForm"
// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Pages
import Cards from "../pages/Cards/Cards"
import Contacts from "../pages/Contacts/Contacts"
import Currencies from "../pages/Currencies/Currencies"
import Requisites from "../pages/Requisites/Requisites"
import Tariffs from "../pages/Tariffs/Tariffs"
import Users from "../pages/UsersPage/UsersPage"
import CardTypes from "../pages/CardsTypes/CardsTypes"
import CardOrder from "../pages/Cards/CardOrder"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  //Pages
  { path: "/cards", component: Cards },
  { path: "/contacts", component: Contacts },
  { path: "/currencies", component: Currencies },
  { path: "/requisites", component: Requisites },
  { path: "/tariffs", component: Tariffs },
  { path: "/users", component: Users },
  { path: "/cardtypes", component: CardTypes },
  { path: "/cardorder", component: CardOrder },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/auth", component: FirstForm },
  { path: "/login", component: Login },
  { path: "/confirm", component: Confirm },
  { path: "/userform", component: UserForm },
]

export { userRoutes, authRoutes }
