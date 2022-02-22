import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardText, CardImg, Button } from "reactstrap"

// import use layer effect
import { useLayoutEffect, useState } from "react"

import postService from "services/post.service"

// dispatch actions
import { useDispatch, useSelector } from "react-redux"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/datatables.scss"

const SponsoredPosts = () => {
  const [postsForRender, setPostsForRender] = useState([])
  const [posts, setposts] = useState([])
  useLayoutEffect(() => {
    getAllposts()
  }, [])

  const getAllposts = () => {
    postService.fetchAllSponsoredPosts().then(res => {
      setposts(res.data.success.data)
    })
  }

  useLayoutEffect(() => {
    let postsData = []
    // add edit single posts for posts datatable
    posts.map((post, index) => {
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
      postsData.push(post)
    })
    setPostsForRender(postsData)
  }, [posts])

  const data = {
    columns: [
      // {
      //   label: "User",
      //   field: "user",
      //   sort: "asc",
      //   width: 150,
      // },
      {
        label: "Price",
        field: "price",
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
        label: "Start Date",
        field: "startDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "Expired Date",
        field: "expiredDate",
        sort: "asc",
        width: 150,
      },
    ],
    rows: postsForRender,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Data Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags> */}
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Posts"
            title="All Posts"
            breadcrumbItem="Posts"
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

export default SponsoredPosts
