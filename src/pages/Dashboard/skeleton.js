import React from "react"
import { Col, Row, Dropdown, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Cards = () => {
  return (
    <Col md={4}>
      <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
        <Card className="mini-stat text-white">
          <CardBody>
            <div className="mb-4">
              <div className="float-start mini-stat-img me-4">
                <Skeleton height={70} width={60} />
              </div>
              <span>
                <h5 className="font-size-16 text-uppercase text-white-50">
                  <Skeleton height={20} width={130} />
                </h5>
                <h4 className="fw-medium font-size-24">
                  <Skeleton height={20} width={70} count={1} />
                </h4>
              </span>
            </div>
            <div className="pt-2">
              <div className="float-end">
                <Link to="/users" className="text-white-50">
                  <Skeleton height={20} width={30} />
                </Link>
              </div>
              <p className="text-white-50 mb-0 mt-1">
                <Skeleton height={20} width={150} />
              </p>
            </div>
          </CardBody>
        </Card>
      </SkeletonTheme>
    </Col>
  )
}

export const SkeletonCard = () => {
  return (
    <div className="">
      <Row className="align-items-center">
        <Col md={8}>
          <h6 className="page-title">
            <Skeleton height={30} width={80} />
          </h6>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item active">
              <Skeleton height={15} width={250} />
            </li>
          </ol>
        </Col>

        <Col md="4">
          <div className="float-end d-none d-md-block">
            <Dropdown>
              <div
                color="primary"
                className="dropdown-toggle waves-effect waves-light"
              >
                <Skeleton height={40} width={130} />
              </div>
            </Dropdown>
          </div>
        </Col>
        <Cards />
        <Cards />
        <Cards />
      </Row>
    </div>
  )
}
