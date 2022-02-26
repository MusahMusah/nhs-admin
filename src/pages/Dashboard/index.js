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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png"
import servicesIcon2 from "../../assets/images/services-icon/02.png"
import servicesIcon3 from "../../assets/images/services-icon/03.png"
import servicesIcon4 from "../../assets/images/services-icon/04.png"
import { SkeletonCard } from "./skeleton"

const CardComp = ({ figure, title, totalNumber, lastUpdate }) => {
  return (
    <Col md={4}>
      <Card className="mini-stat bg-primary text-white">
        <CardBody>
          <div className="mb-4">
            <div className="float-start mini-stat-img me-4">
              <img src={figure} alt="" />
            </div>
            <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
              {title}
            </h5>
            <h4 className="fw-medium font-size-24">
              {totalNumber}
              <i className="mdi mdi-arrow-up text-success ms-2"></i>
            </h4>
          </div>
          <div className="pt-2">
            <div className="float-end">
              <Link to="/users" className="text-white-50">
                <i className="mdi mdi-arrow-right h5"></i>
              </Link>
            </div>
            <p className="text-white-50 mb-0 mt-1">{lastUpdate}</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

const Headers = ({
  title,
  subTitle,
  sideAction,
  dropdownOption1,
  dropdownOption2,
  dropdownOption3,
  dropdownOption4,
  opt1Url,
  opt2Url,
  opt3Url,
  opt4Url,
}) => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <>
      <Col md={8}>
        <h6 className="page-title">{title}</h6>
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item active">{subTitle}</li>
        </ol>
      </Col>

      <Col md="4">
        <div className="float-end d-none d-md-block">
          <Dropdown isOpen={menu} toggle={toggle}>
            <DropdownToggle
              color="primary"
              className="btn btn-primary dropdown-toggle waves-effect waves-light"
            >
              <i className="mdi mdi-cog me-2"></i>
              {sideAction}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag="a" href={opt1Url}>
                {dropdownOption1}
              </DropdownItem>
              <DropdownItem tag="a" href={opt2Url}>
                {dropdownOption2}
              </DropdownItem>
              <DropdownItem tag="a" href={opt3Url}>
                {dropdownOption3}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag="a" href={opt4Url}>
                {dropdownOption4}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Col>
    </>
  )
}

const Dashboard = () => {
  const dispatch = useDispatch()
  const { dashboardAnalytics, loading } = useSelector(state => state.setting)

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
        {loading == false && dashboardAnalytics.length > 0 ? (
          <Container fluid>
            <div className="page-title-box">
              <Row className="align-items-center">
                <Headers
                  title={"Dashboard"}
                  subTitle={"Welcome to Northern Herbiscus Dashboard"}
                  // RHS ACTIONS(SETTING...)
                  sideAction={"Settings"}
                  dropdownOption1={"Action"}
                  dropdownOption2={"Another Action"}
                  dropdownOption3={"Something else here"}
                  dropdownOption4={"separated links"}
                  opt1Url={"#"}
                  opt2Url={"#"}
                  opt3Url={"#"}
                  opt4Url={"#"}
                />
              </Row>
              <Row>
                <CardComp
                  figure={servicesIcon1}
                  title={"Users"}
                  totalNumber={dashboardAnalytics[0].users.totalUsers}
                  lastUpdate={"Since last month"}
                />
                <CardComp
                  figure={servicesIcon2}
                  title={"Post"}
                  totalNumber={dashboardAnalytics[0].posts.totalPosts}
                  lastUpdate={"Since last month"}
                />
                <CardComp
                  figure={servicesIcon3}
                  title={"Directory"}
                  totalNumber={dashboardAnalytics[0].directory.totalDirectory}
                  lastUpdate={"Since last month"}
                />
              </Row>
            </div>
          </Container>
        ) : (
          <Row>
            <SkeletonCard />
          </Row>
        )}
      </div>
    </React.Fragment>
  )
}

export default Dashboard
