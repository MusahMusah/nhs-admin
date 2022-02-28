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

const Dashboard = () => {
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
          <title>
            Dashboard | Northern Herbiscus
          </title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to Northern Herbiscus Dashboard
                  </li>
                </ol>
              </Col>
            </Row>

            {loading == false && dashboardAnalytics.length > 0 ? (
              <Row>
                <Col md={4}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <div className="float-start mini-stat-img me-4">
                          {/* <img src={servicesIcon1} alt="" /> */}
                          <i className="fas fa-users"></i>
                        </div>
                        <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                          Users
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].users.totalUsers}
                          <i className="mdi mdi-arrow-up text-success ms-2"></i>
                        </h4>
                      </div>
                      <div className="pt-2">
                        <div className="float-end">
                          <Link to="/users" className="text-white-50">
                            <i className="mdi mdi-arrow-right h5"></i>
                          </Link>
                        </div>
                        <p className="text-white-50 mb-0 mt-1">
                          Since last month
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <div className="float-start mini-stat-img me-4">
                          <i className="fab fa-rocketchat"></i>
                        </div>
                        <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                          Posts
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].posts.totalPosts}
                          <i className="mdi mdi-arrow-up text-success ms-2"></i>
                        </h4>
                      </div>
                      <div className="pt-2">
                        <div className="float-end">
                          <Link to="/users" className="text-white-50">
                            <i className="mdi mdi-arrow-right h5"></i>
                          </Link>
                        </div>
                        <p className="text-white-50 mb-0 mt-1">
                          Since last month
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <div className="float-start mini-stat-img me-4">
                          <i className="fas fa-list-ul"></i>
                        </div>
                        <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                          Directory
                        </h5>
                        <h4 className="fw-medium font-size-24">
                          {dashboardAnalytics[0].directory.totalDirectory}
                          <i className="mdi mdi-arrow-up text-success ms-2"></i>
                        </h4>
                      </div>
                      <div className="pt-2">
                        <div className="float-end">
                          <Link to="/users" className="text-white-50">
                            <i className="mdi mdi-arrow-right h5"></i>
                          </Link>
                        </div>
                        <p className="text-white-50 mb-0 mt-1">
                          Since last month
                        </p>
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

export default Dashboard
