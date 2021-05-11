import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Auth/LoginForm"
import Confirm from "../pages/Auth/ConfirmForm"
import UserForm from "../pages/Auth/UserForm"
import FirstForm from "../pages/Auth/FirstForm"
// Dashboard
import Dashboard from "../pages/Dashboard"
import Trade from "../pages/Trade"
import Transactions from "../pages/Transactions"
import Wallets from "../pages/Wallets"
import Orders from "../pages/Orders"
import Cards from "../pages/Cards"
import Rewards from "../pages/Rewards"
import Referrals from "../pages/Referrals"

//Pages

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/trade", component: Trade },
  { path: "/transactions", component: Transactions },
  { path: "/wallets", component: Wallets },
  { path: "/orders", component: Orders },
  { path: "/cards", component: Cards },
  { path: "/rewards", component: Rewards },
  { path: "/referrals", component: Referrals },

  //Pages
  /*  { path: "/cards", component: Cards }, */

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
