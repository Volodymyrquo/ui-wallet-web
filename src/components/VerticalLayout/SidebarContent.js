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
              <i className="icon-Dashboard"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/cardtypes" className="waves-effect">
              <i className="icon-card"></i>
              <span>Cards Types</span>
            </Link>
          </li>

          <li>
            <Link to="/cards" className="waves-effect">
              <i className="icon-card"></i>
              <span>Cards</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="waves-effect">
              <i className="icon-People"></i>
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/currencies" className="waves-effect">
              <i className="bx bx-money"></i>
              <span>Currencies</span>
            </Link>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="icon-Trade"></i>
              <span>Operations</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/#">Types</Link>
              </li>
              <li>
                <Link to="/#">For Users</Link>
              </li>
              <li>
                <Link to="/#">For Cards</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/requisites" className="waves-effect">
              <i className="icon-List"></i>
              <span>Requisites</span>
            </Link>
          </li>
          <li>
            <Link to="/tariffs" className="waves-effect">
              <i className="icon-Clipboard"></i>
              <span>Tariffs</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="waves-effect">
              <i className="icon-Man"></i>
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default withRouter(SidebarContent)
