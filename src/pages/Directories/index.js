import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardText, CardImg, Button } from "reactstrap"

// import use layer effect
import { useLayoutEffect, useState } from "react"

import directoryService from "services/directory.service"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/datatables.scss"

const Directories = () => {
  const [directoriesForRender, setDirectoriesForRender] = useState([])
  const [directories, setDirectories] = useState([])
  useLayoutEffect(() => {
    getAlldirectories()
  }, [])

  const getAlldirectories = () => {
    directoryService.fetchAllDirectories().then(res => {
      setDirectories(res.data.success.data)
    })
  }

  useLayoutEffect(() => {
    let directoriesData = []
    // add edit single directories for directories datatable
    directories.map((post, index) => {
      post.user = (
        <Row xs="auto">
          <Col className="mx-auto">
            <img
              className="rounded-circle header-profile-user"
              src={post.user.image}
              alt="Header Avatar"
            />
            <CardText className="mt-1 mb-lg-0">
              <a href="#">{post.user.name}</a>
            </CardText>
          </Col>
        </Row>
      )
      post.action = (
        <div className="d-flex justify-content-between">
          {/* <a href={`/directories/edit/${directories.id}`} className="mr-2">
              <i className="fa fa-edit text-info" />
            </a>
            <a href={`/directories/delete/${directories.id}`} className="mr-2">
              <i className="fa fa-trash text-danger" />
            </a> */}
          <Button
            onClick={() => directoriestatusToggle(directories[index].id)}
            color="primary"
            className="btn btn-primary waves-effect"
          >
            View
          </Button>{" "}
        </div>
      )
      directoriesData.push(post)
    })
    setDirectoriesForRender(directoriesData)
  }, [directories])

  const data = {
    columns: [
      {
        label: "User",
        field: "user",
        sort: "asc",
        width: 150,
      },
      {
        label: "Business Name",
        field: "businessName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Business Category",
        field: "businessCategory",
        sort: "asc",
        width: 150,
      },
      {
        label: "Business Rating",
        field: "businessRating",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ],
    rows: directoriesForRender,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Data Tables | Northern Herbiscus</title>
        </MetaTags> */}
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="directories"
            title="All directories"
            breadcrumbItem="directories"
          />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <MDBDataTable
                    responsive
                    striped
                    bordered
                    data={data}
                    info={false}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Directories
