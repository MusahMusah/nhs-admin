import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
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

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

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
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("User Management")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                <span className="badge rounded-pill bg-primary float-end">
                  2
                </span>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/users" className=" waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("Users")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Post Management")}</li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-package"></i>
                <span>{props.t("Posts")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/posts">{props.t("All Posts")}</Link>
                </li>
                <li>
                  <Link to="/posts/sponsored">{props.t("Sponsored Post")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{props.t("Directories")}</li>
            <li>
              <Link to="/directories">
                <i className="ti-user"></i>
                <span>
                  {props.t("Directories")}
                </span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Golds Management")}</li>
            <li>
              <Link to="/golds">
                <i className="ti-user"></i>
                <span>
                  {props.t("Golds")}
                </span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Wallet Management")}</li>
            <li>
              <Link to="/wallets">
                <i className="ti-user"></i>
                <span>
                  {props.t("Wallets")}
                </span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Settings")}</li>
            <li>
              <Link to="/" className=" waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("General Settings")}</span>
              </Link>
            </li>

            {/* <li className="menu-title">{props.t("Reports")}</li>
            <li>
              <Link to="/" className=" waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("All Reports")}</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
