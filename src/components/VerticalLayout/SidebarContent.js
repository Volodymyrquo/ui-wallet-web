import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import {
  changeSidebarTheme,
  toggleLeftmenu,
  changeSidebarType,
  changeTopbarTheme,
  changeReferralClass,
} from "../../store/actions"
import referrals from "../../assets/images/sumra/referrals.svg"
import { set } from "lodash"

//i18n

const SidebarContent = props => {
  const dispatch = useDispatch()
  const {
    leftSideBarTheme,
    leftMenu,
    leftSideBarType,
    referralClass,
  } = useSelector(state => state.Layout)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      return false
    }
    return false
  }
  const onClickHandler = () => {
    if (leftSideBarTheme === "dark") {
      dispatch(changeReferralClass("sidebar-referrals"))

      dispatch(changeSidebarTheme("light"))
      dispatch(changeTopbarTheme("light"))
    } else if (leftSideBarTheme === "light") {
      dispatch(changeReferralClass("sidebar-referrals-dark"))
      dispatch(changeSidebarTheme("dark"))
      dispatch(changeTopbarTheme("dark"))
    }
  }

  function tToggle() {
    dispatch(toggleLeftmenu(!leftMenu))
    if (leftSideBarType === "default") {
      dispatch(changeSidebarType("condensed", isMobile))
    } else if (leftSideBarType === "condensed") {
      dispatch(changeSidebarType("default", isMobile))
    }
  }

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/dashboard" className="waves-effect">
              <div>
                <i className="icon-Category" />
              </div>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/trade" className="waves-effect">
              <div>
                <i className="icon-Chart" />
              </div>
              <span>Trade</span>
            </Link>
          </li>

          <li>
            <Link to="/transactions" className="waves-effect">
              <div>
                <i className="icon-Swap" />
              </div>
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/wallets" className="waves-effect">
              <div>
                <i className="icon-Icon-Wallet" />
              </div>
              <span>Wallets</span>
            </Link>
          </li>
          <li>
            <Link to="/cards" className="waves-effect">
              <div>
                <i className="icon-Bank-Card" />
              </div>
              <span>Cards</span>
            </Link>
          </li>
          <li>
            <Link to="/rewards" className="waves-effect">
              <div>
                <i className="icon-Ticket-Star" />
              </div>
              <span>Rewards</span>
            </Link>
          </li>
          <li>
            <Link to="/referrals" className="waves-effect">
              <div>
                <i className="icon-Bulk-3-User" />
              </div>
              <span>Referrals</span>
            </Link>
          </li>
          <li>
            <Link to="/pioneermemberships" className="waves-effect">
              <div>
                <i className="icon-Bulk-User" />
              </div>
              <span>Pioneer Memberships</span>
            </Link>
          </li>
<<<<<<< HEAD
=======
          <li>
            {/* <Link>
              <i className="icon-Color"></i>
              <span>Change theme</span>
            </Link> */}
          </li>
>>>>>>> 7c4c21d2bfcbcd07a711bdb01dad8cc33c6c54b9
        </ul>
        {leftSideBarType === "default" ? (
          <div className={referralClass}>
            <div>
              <img src={referrals} alt="referrals" />
            </div>
            <div className="sidebar-ref-txt">
              <span>
                Get <em>$8</em>, Give <em>$5</em>. Earn Unlimited.
              </span>
            </div>
            <button>
              <span>Learn more</span>
            </button>
          </div>
        ) : (
          <div
            style={{
              height: "200px",
              margin: "40px auto",
              position: "relative",
              display: "block",
            }}
          ></div>
        )}
        <div className="sidbar-box">
          <div
            className="btn-collapse "
            onClick={() => {
              tToggle()
            }}
          >
            {leftSideBarType === "default" ? (
              <i className="icon-Close-Menu" />
            ) : (
              <i className="icon-Open-Menu" />
            )}
          </div>
          <div className="btn-chg-theme" onClick={onClickHandler}>
            <i className="icon-Color" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(SidebarContent)
