import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Media,
  Button,
} from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/user-1.jpg"
const Settings = props => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(obj.email)
        setidx(obj.uid)
      }
      setTimeout(() => {
        props.resetProfileFlag();
      }, 3000);
    }
  }, [props.success])

  function handleValidSubmit(event, values) {
    props.editProfile(values)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Veltrix" breadcrumbItem="Settings" />

          <h4 className="card-title mb-4">System Management Settings</h4>

          <Card>
            <CardBody>
              <AvForm
                className="form-horizontal"
                onValidSubmit={(e, v) => {
                  handleValidSubmit(e, v)
                }}
              >
                <div className="mb-3">
                  <AvField
                    name="username"
                    label="User Name"
                    value={name || ''}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <AvField name="idx" value={idx || ''} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Edit User Name
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

// UserProfile.propTypes = {
//   editProfile: PropTypes.func,
//   error: PropTypes.any,
//   success: PropTypes.any
// }

export default Settings
