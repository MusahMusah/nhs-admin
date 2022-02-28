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
                          Today Signup
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].users.todaySignUp}
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
                          Total Users
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].users.totalUsers}
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
                          Verified Users
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].users.verified}
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
                          Unverified Users
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].users.unverified}
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
