import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

// import use layer effect
import { useLayoutEffect, useState } from "react"

import userService from "services/user.service"

// dispatch actions
import { useDispatch, useSelector } from "react-redux"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/datatables.scss"

const Users = () => {
  const [usersForRender, setUsersForRender] = useState([])
  const [users, setUsers] = useState([])
  useLayoutEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    userService.fetchAllUsers().then(res => {
      setUsers(res.data.success.data)
    })
  }

  const userStatusToggle = (userId) => {
    userService.toggleUserStatus(userId).then((res) => {
      getAllUsers()
    })
  }

  useLayoutEffect(() => {
    let userData = []
    // add edit single user for users datatable
    users.map((user, index) => {
      user.action = (
        <div className="d-flex justify-content-between">
          {/* <a href={`/users/edit/${user.id}`} className="mr-2">
              <i className="fa fa-edit text-info" />
            </a>
            <a href={`/users/delete/${user.id}`} className="mr-2">
              <i className="fa fa-trash text-danger" />
            </a> */}
          <Button color={ user.status == "active" ? 'danger' : 'primary' } onClick={() => userStatusToggle(users[index].id)} className="btn btn-primary waves-effect">
            { user.status == "active" ? "Suspend" : "Active" }
          </Button>{" "}
        </div>
      )
      userData.push(user)
    })
    setUsersForRender(userData)
  }, [users])

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 150,
      },
      // {
      //   label: "Following",
      //   field: "following",
      //   sort: "asc",
      //   width: 150,
      // },
      // {
      //   label: "Followers",
      //   field: "followers",
      //   sort: "asc",
      //   width: 150,
      // },
      {
        label: "Gold",
        field: "gold",
        sort: "asc",
        width: 150,
      },
      {
        label: "Sponsored Wallet",
        field: "sponsoredWallet",
        sort: "asc",
        width: 150,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 150,
      },
      {
        label: "Account Status",
        field: "status",
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
    rows: usersForRender,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Data Tables | Northern Herbiscus</title>
        </MetaTags> */}
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Users"
            title="All Users"
            breadcrumbItem="Users"
          />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Stripped example </CardTitle>
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

export default Users
