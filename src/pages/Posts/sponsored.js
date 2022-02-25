import React from "react"
import { Link, useParams } from "react-router-dom"
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
import { post } from "helpers/api_helper"

const SponsoredPosts = () => {
  const [postLoading, setPostLoading] = useState(false)
  const [postsForRender, setPostsForRender] = useState([])
  const { postId } = useParams()
  const [posts, setposts] = useState([])
  useLayoutEffect(() => {
    getAllposts()
  }, [])

  const getAllposts = () => {
    setPostLoading(true)
    postService.fetchAllSponsoredPosts(postId).then(res => {
      setPostLoading(false)
      setposts([res.data.success.data])
    })
  }

  console.log(posts)

  // useLayoutEffect(() => {
  //   let postsData = []
  //   postLoading
  //     ? // add edit single posts for posts datatable
  //       posts.map((post, index) => {
  //         // post.user = (
  //         //   <Row xs="auto">
  //         //     <Col className="mx-auto">
  //         //       <img
  //         //         className="rounded-circle header-profile-user"
  //         //         src={post.user.image}
  //         //         alt="Header Avatar"
  //         //       />
  //         //       <CardText className="mt-1 mb-lg-0">
  //         //         <a href="#">{post.user.name}</a>
  //         //       </CardText>
  //         //     </Col>
  //         //   </Row>
  //         // )
  //         postsData.push(post)
  //       })
  //     : null
  //   setPostsForRender(postsData)
  // }, [posts])

  const data = {
    columns: [
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
    rows: posts,
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Posts"
            title="All Posts"
            breadcrumbItem="Posts"
          />

          {postLoading === false && posts.length > 0 ? (
            <Row>
              <Col md={6}>
                <Card className="mini-stat bg-primary text-white">
                  <CardBody>
                    <div className="mb-4">
                      <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                        Total Reach Out
                      </h5>
                      <h4 className="fw-medium font-size-24">
                        {posts[0].info.reachOut}
                      </h4>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="mini-stat bg-primary text-white">
                  <CardBody>
                    <div className="mb-4">
                      <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                        Total Views
                      </h5>
                      <h4 className="fw-medium font-size-24">
                        {posts[0].info.views}
                      </h4>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : null}

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
