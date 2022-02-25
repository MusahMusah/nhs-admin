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

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png"
import servicesIcon2 from "../../assets/images/services-icon/02.png"
import servicesIcon3 from "../../assets/images/services-icon/03.png"
import servicesIcon4 from "../../assets/images/services-icon/04.png"

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
  console.log(dashboardAnalytics)
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Dashboard | Veltrix - Responsive Bootstrap 5 Admin Dashboard
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

              <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle
                      color="primary"
                      className="btn btn-primary dropdown-toggle waves-effect waves-light"
                    >
                      <i className="mdi mdi-cog me-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a" href="#">
                        Action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Another action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Something else here
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">
                        Separated link
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>

            {loading == false && dashboardAnalytics.length > 0 ? (
              <Row>
                <Col md={4}>
                  <Card className="mini-stat bg-primary text-white">
                    <CardBody>
                      <div className="mb-4">
                        <div className="float-start mini-stat-img me-4">
                          <img src={servicesIcon1} alt="" />
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
                          <img src={servicesIcon1} alt="" />
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
                          <img src={servicesIcon1} alt="" />
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
