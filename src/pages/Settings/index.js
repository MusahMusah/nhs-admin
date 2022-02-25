import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
} from "reactstrap"

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

import { getAllSettings } from "../../store/slices/settingsSlice"
import settingsService from "../../services/settings.service"
import { useDispatch, useSelector } from "react-redux"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/user-1.jpg"
const Settings = props => {
  const [directoryFee, setdirectoryFee] = useState("")
  const [directoryVerificationFee, setdirectoryVerificationFee] = useState("")
  const [directoryOnTopFee, setdirectoryOnTopFee] = useState("")
  const [maxDirectoryImages, setmaxDirectoryImages] = useState("")
  const [goldSaleAmount, setgoldSaleAmount] = useState("")
  const [goldBuyAmount, setgoldBuyAmount] = useState("")
  const [minWalletDeposit, setminWalletDeposit] = useState("")
  const [maxWalletDeposit, setmaxWalletDeposit] = useState("")
  const [paystack_pk, setpaystack_pk] = useState("")
  const [apple_merchant_key, setapple_merchant_key] = useState("")
  const [pushNotificationOnChat, setpushNotificationOnChat] = useState(false)
  const [pushNotificationOnMessage, setpushNotificationOnMessage] =
    useState(false)
  const [pushNotificationOnComment, setpushNotificationOnComment] =
    useState(false)
  const [sendSms, setsendSms] = useState(false)
  const [enable2fa, setenable2fa] = useState(false)
  const [success_msg, setsuccess_msg] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSettings())
      .unwrap()
      .then(res => {
        setdirectoryFee(res.directory.amount)
        setdirectoryVerificationFee(res.directoryVerification.amount)
        setdirectoryOnTopFee(res.directoryOnTop.amount)
        setmaxDirectoryImages(res.directoryImages)
        setgoldSaleAmount(res.gold.sale)
        setgoldBuyAmount(res.gold.buy)
        setminWalletDeposit(res.minWalletDeposit)
        setmaxWalletDeposit(res.maxWalletDeposit)
        setpaystack_pk(res.paystack_pk)
        setapple_merchant_key(res.apple_merchant_key)
        setpushNotificationOnChat(res.pushNotification.onChat)
        setpushNotificationOnMessage(res.pushNotification.onNewPost)
        setpushNotificationOnComment(res.pushNotification.onNewComment)
        setsendSms(res.sendSms)
        setenable2fa(res.enable2fa)
      })
  }, [])

  function handleValidSubmit(event, values) {
    settingsService.updateSettings(values).then(res => {
      setsuccess_msg(true)
    })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Profile | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        {success_msg ? (
          <SweetAlert
            title="Settings Successfully saved!"
            success
            confirmBtnBsStyle="success"
            onConfirm={() => {
              setsuccess_msg(false)
            }}
            onCancel={() => {
              setsuccess_msg(false)
            }}
          >
          </SweetAlert>
        ) : null}
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
                <Row>
                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="directoryFee"
                        label="Directory Fee"
                        value={directoryFee || ""}
                        className="form-control"
                        placeholder="Enter Directory Fee"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="directoryVerificationFee"
                        label="Directory Verification Fee"
                        value={directoryVerificationFee || ""}
                        className="form-control"
                        placeholder="Enter Directory Verification Fee"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="directoryOnTopFee"
                        label="Directory OnTop Fee"
                        value={directoryOnTopFee || ""}
                        className="form-control"
                        placeholder="Enter Directory OnTop Fee"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="maxDirectoryImages"
                        label="Max Directory Images"
                        value={maxDirectoryImages || ""}
                        className="form-control"
                        placeholder="Enter Max Directory Images"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="goldSaleAmount"
                        label="Gold Sale Amount"
                        value={goldSaleAmount || ""}
                        className="form-control"
                        placeholder="Enter Gold Sale Amount"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="goldBuyAmount"
                        label="Gold Buy Amount"
                        value={goldBuyAmount || ""}
                        className="form-control"
                        placeholder="Gold Buy Amount"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="minWalletDeposit"
                        label="Min Wallet Deposit"
                        value={minWalletDeposit || ""}
                        className="form-control"
                        placeholder="Enter Min Wallet Deposit"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="maxWalletDeposit"
                        label="Max Wallet Deposit"
                        value={maxWalletDeposit || ""}
                        className="form-control"
                        placeholder="Enter Max Wallet Deposit"
                        type="number"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="paystack_pk"
                        label="Paystack Primary Key"
                        value={paystack_pk || ""}
                        className="form-control"
                        placeholder="Enter Paystack Primary Key"
                        type="text"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="apple_merchant_key"
                        label="Apple  Merchant Key"
                        value={apple_merchant_key || ""}
                        className="form-control"
                        placeholder="Enter Apple  Merchant Key"
                        type="text"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="pushNotificationOnChat"
                        label="Push Notification OnChat"
                        value={pushNotificationOnChat}
                        checked={pushNotificationOnChat}
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="pushNotificationOnMessage"
                        label="Push Notification OnMessage"
                        value={pushNotificationOnMessage}
                        checked={pushNotificationOnMessage}
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="pushNotificationOnComment"
                        label="Push Notification OnComment"
                        value={pushNotificationOnComment}
                        checked={pushNotificationOnComment}
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="sendSms"
                        label="Send SMS"
                        value={sendSms}
                        checked={sendSms}
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col md="6">
                    <div className="mb-3">
                      <AvField
                        name="enable2fa"
                        label="Enable 2FA"
                        value={enable2fa}
                        checked={enable2fa}
                        type="checkbox"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Button type="submit" color="primary">
                    Save Settings
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
