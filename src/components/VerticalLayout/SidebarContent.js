import React, { useEffect } from "react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n

const SidebarContent = props => {
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

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/" className="waves-effect">
              <i className="icon-Category"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/trade" className="waves-effect">
              <i className="icon-Chart"></i>
              <span>Trade</span>
            </Link>
          </li>

          <li>
            <Link to="/transactions" className="waves-effect">
              <i className="icon-Swap"></i>
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/wallets" className="waves-effect">
              <i className="icon-Icon-Wallet"></i>
              <span>Wallets</span>
            </Link>
          </li>
          <li>
            <Link to="/cards" className="waves-effect">
              <i className="icon-Bank-Card"></i>
              <span>Cards</span>
            </Link>
          </li>
          <li>
            <Link to="/rewards" className="waves-effect">
              <i className="icon-Ticket-Star"></i>
              <span>Rewards</span>
            </Link>
          </li>
          <li>
            <Link to="/referrals" className="waves-effect">
              <i className="icon-Bulk-3-User"></i>
              <span>Referrals</span>
            </Link>
          </li>
          <li>
            <Link to="/pioneermemberships" className="waves-effect">
              <i className="icon-Bulk-User"></i>
              <span>Pioneer Memberships</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="icon-Color"></i>
              <span>Change theme</span>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default withRouter(SidebarContent)
