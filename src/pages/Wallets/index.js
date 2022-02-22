import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardText, CardImg, Button } from "reactstrap"

// import use layer effect
import { useLayoutEffect, useState } from "react"

import walletService from "services/wallets.service"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/datatables.scss"

const wallets = () => {
  const [walletsForRender, setwalletsForRender] = useState([])
  const [wallets, setwallets] = useState([])
  useLayoutEffect(() => {
    getAllwallets()
  }, [])

  const getAllwallets = () => {
    walletService.fetchAllWallets().then(res => {
      setwallets(res.data.success.data)
    })
  }

  useLayoutEffect(() => {
    let walletsData = []
    // add edit single wallets for wallets datatable
    wallets.map((post, index) => {
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
          {/* <a href={`/wallets/edit/${wallets.id}`} className="mr-2">
              <i className="fa fa-edit text-info" />
            </a>
            <a href={`/wallets/delete/${wallets.id}`} className="mr-2">
              <i className="fa fa-trash text-danger" />
            </a> */}
          <Button
            onClick={() => walletstatusToggle(wallets[index].id)}
            color="primary"
            className="btn btn-primary waves-effect"
          >
            View
          </Button>{" "}
        </div>
      )
      walletsData.push(post)
    })
    setwalletsForRender(walletsData)
  }, [wallets])

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
        label: "Channel",
        field: "channel",
        sort: "asc",
        width: 150,
      },
      {
        label: "Reference",
        field: "reference",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
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
    rows: walletsForRender,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Data Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags> */}
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="wallets"
            title="All wallets"
            breadcrumbItem="wallets"
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

export default wallets
