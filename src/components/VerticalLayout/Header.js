import PropTypes from "prop-types"
import React from "react"

import { connect } from "react-redux"

import { Link } from "react-router-dom"

import logo from "../../assets/images/UltainfinityLogoLight.svg"
import logoLightPng from "../../assets/images/UltainfinityLogoDark.svg"
import logoLightSvg from "../../assets/images/UltainfinityLogoDark.svg"
import logoDark from "../../assets/images/UltainfinityLogoLight.svg"

// import images
import user from "../../assets/images/users/avatar-5.jpg"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/BreadcrumbSumra"

const Header = props => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu)
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", isMobile)
    }
  }

  const onPageChange = e => {
    switch (e) {
      case "/dashboard":
        return "Dashboard"
      case "/trade":
        return "Trade"
      case "/transactions":
        return "Transactions"
      case "/wallets":
        return "Wallets"
      case "/cards":
        return "Cards"
      case "/rewards":
        return "Rewards"
      case "/referrals":
        return "Referrals"
      case "/pioneermemberships":
        return "Pioneer memberships"
      default:
        return "Dashboard"
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="24" width="50" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="26" width="54" />
                </span>
                <div style={{ display: "inline-block" }}>
                  <div className="header-brand-name">ultainfinity</div>
                  <div className="header-product-name ">wallet</div>
                </div>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="24" width="50" />
                </span>
                <span className="logo-lg">
                  <img src={logoLightPng} alt="" height="26" width="54" />
                </span>
                <div style={{ display: "inline-block" }}>
                  <div className="header-brand-name-dark">ultainfinity</div>
                  <div className="header-product-name-dark ">wallet</div>
                </div>
              </Link>
            </div>
            <div style={{ position: "relative", left: "10px", top: "15px" }}>
              <h2>{onPageChange(location.pathname)}</h2>
            </div>
          </div>

          <div className="d-flex">
            <div style={{ paddingTop: "20px" }}>
              <Breadcrumbs
                title={props.t("Dashboards")}
                breadcrumbItem={props.t(onPageChange(location.pathname))}
              />
            </div>

            <div
              className=" header-item "
              style={{ paddingTop: "10px", marginLeft: "50px" }}
            >
              <button className="header-btn">
                <i className="icon-Notification-Empty " />
                <span header-btn-txt>15</span>
              </button>
            </div>
            <div
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              tag="button"
            >
              <img
                className="rounded-circle header-profile-user"
                src={user}
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ml-2 mr-1">
                John Snow
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
