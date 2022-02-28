import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { withRouter, Link, useHistory, Redirect } from "react-router-dom"

// slice
import { loginUser } from "../../store/slices/authSlice"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// import images
import logoSm from "../../assets/images/logo-sm.png"

const Login = props => {
  // initialise the dispatcher
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth);
  const history = useHistory()
  const [errors, setErrors] = useState("")
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    const payload = {
      ...values,
      deviceInfo: {
        deviceType: "android",
        firebaseId: "wertyfugihojk",
      },
      isAdmin: 1,
    }
    dispatch(loginUser(payload))
    .unwrap()
    .then(() => {
      // props.history.push("/dashboard");
      // history.push("/dashboard")
      // window.location.reload();
      window.location.href = "/dashboard"
    })
    .catch((e) => {
      setErrors(e.message)
    })
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Northern Herbiscus</title>
      </MetaTags>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50">
                      Sign in to continue to Northern Herbiscus Admin Portal.
                    </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} style={{ height: "60px" }} alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {errors ? (
                        <Alert color="danger">{errors}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="text-center">
                {/* <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p> */}
                <p>
                  © {new Date().getFullYear()} Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Payluk
                  Technologies
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  // const { error } = state.Login
  // return { error }
  return {}
}

// export default withRouter(
//   connect(mapStateToProps, { loginUser, apiError })(Login)
// )
export default withRouter(connect(mapStateToProps)(Login))

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
}
