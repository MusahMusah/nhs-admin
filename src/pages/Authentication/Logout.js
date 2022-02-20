import PropTypes from "prop-types"
import React, { useEffect } from "react"
import {useHistory,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { logoutUser } from "../../store/slices/authSlice"

const Logout = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   props.logoutUser(props.history)
  // })
  useEffect(() => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        localStorage.clear()
        history.push("/login")
      })
      .catch(() => {
        history.push("/login")
      })
  }, [dispatch])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(connect(null)(Logout))
