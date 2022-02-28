import React, { useState, useLayoutEffect } from "react"
import MetaTags from "react-meta-tags"
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
} from "reactstrap"

import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getAllDashboardAnalytics } from "../../store/slices/settingsSlice"

const PostReport = () => {
  const dispatch = useDispatch()
  const { dashboardAnalytics, loading } = useSelector(state => state.setting)
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }

  useLayoutEffect(() => {
    dispatch(getAllDashboardAnalytics())
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Northern Herbiscus</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            {loading == false && dashboardAnalytics.length > 0 ? (
              <Row>
                <Col md={3}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <h5 className="font-size-13 text-uppercase mt-0 text-white-50">
                          Today Subscriptions
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].directoryOnTop.todaySubscriptions}
                        </h4>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <h5 className="font-size-13 text-uppercase mt-0 text-white-50">
                          Today Earnings
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          NGN{dashboardAnalytics[0].directoryOnTop.todayEarnings}
                        </h4>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <h5 className="font-size-13 text-uppercase mt-0 text-white-50">
                          Total Earnings
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          NGN{dashboardAnalytics[0].directoryOnTop.totalEarnings}
                        </h4>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <h5 className="font-size-13 text-uppercase mt-0 text-white-50">
                          Total Subscriptions
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].directoryOnTop.totalSubscriptions}
                        </h4>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

              </Row>
            ) : null}
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PostReport
