import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardText, CardImg, Button } from "reactstrap"

// import use layer effect
import { useLayoutEffect, useState } from "react"

import goldService from "services/gold.service"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/datatables.scss"

const golds = () => {
  const [goldsForRender, setgoldsForRender] = useState([])
  const [golds, setgolds] = useState([])
  useLayoutEffect(() => {
    getAllGolds()
  }, [])

  const getAllGolds = () => {
    goldService.fetchAllGolds().then(res => {
      setgolds(res.data.success.data)
    })
  }

  useLayoutEffect(() => {
    let goldsData = []
    // add edit single golds for golds datatable
    golds.map((post, index) => {
      // post.user = (
      //   <Row xs="auto">
      //     <Col className="mx-auto">
      //       <img
      //         className="rounded-circle header-profile-user"
      //         src={post.user.image}
      //         alt="Header Avatar"
      //       />
      //       <CardText className="mt-1 mb-lg-0">
      //         <a href="#">{post.user.name}</a>
      //       </CardText>
      //     </Col>
      //   </Row>
      // )
      post.action = (
        <div className="d-flex justify-content-between">
          {/* <a href={`/golds/edit/${golds.id}`} className="mr-2">
              <i className="fa fa-edit text-info" />
            </a>
            <a href={`/golds/delete/${golds.id}`} className="mr-2">
              <i className="fa fa-trash text-danger" />
            </a> */}
          <Button
            onClick={() => goldstatusToggle(golds[index].id)}
            color="primary"
            className="btn btn-primary waves-effect"
          >
            View
          </Button>{" "}
        </div>
      )
      goldsData.push(post)
    })
    setgoldsForRender(goldsData)
  }, [golds])

  const data = {
    columns: [
      // {
      //   label: "User",
      //   field: "user",
      //   sort: "asc",
      //   width: 150,
      // },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
        width: 150,
      },
      {
        label: "Quantity",
        field: "quantity",
        sort: "asc",
        width: 150,
      },
      {
        label: "Transaction Type",
        field: "transactionType",
        sort: "asc",
        width: 150,
      },
      {
        label: "Payment Method",
        field: "paymentMethod",
        sort: "asc",
        width: 150,
      },
      {
        label: "Created At",
        field: "createdAt",
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
    rows: goldsForRender,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Data Tables | Northern Herbiscus</title>
        </MetaTags> */}
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="golds"
            title="All golds"
            breadcrumbItem="golds"
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

export default golds
