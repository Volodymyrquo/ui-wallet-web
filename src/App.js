import PropTypes from "prop-types"
import React from "react"

import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

//wallets
import { FormAddCard } from './pages/Wallets/FormAddCard'

// Import scss
import "./assets/scss/theme.scss"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

const App = props => {
  function getLayout() {
    let layoutCls = VerticalLayout

    switch (props.layout.layoutType) {
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Switch>
        {authRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
          />
        ))}

        {userRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
            // exact
          />
        ))}
      </Switch>
      <Route path="/" component={FormAddCard} />
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
