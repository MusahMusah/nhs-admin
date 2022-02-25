import React from "react"
import { useLayoutEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody } from "reactstrap"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { fetchAllPosts } from "../../store/slices/postSlice"
import postService from "services/post.service"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Import images
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"

const PagesTimeline = () => {
  const [singlePost, setSinglePost] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { uuid } = useParams()

  useLayoutEffect(() => {
    setLoading(true)
    postService.fetchAllPosts().then(res => {
      setLoading(false)
      res.data.success.data.filter(post => {
        if (post._id === uuid) {
          setSinglePost(post.postComments)
        }
      })
    })
  }, [])

  console.log(singlePost)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Timeline | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <div className="container-fluid">
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            maintitle="Veltrix"
            title="Extra Pages"
            breadcrumbItem="Timeline"
          />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div id="cd-timeline">
                    <ul className="timeline list-unstyled">
                      {!loading
                        ? singlePost.map((post, index) => (
                            <li key={index} className="timeline-list">
                              <div className="cd-timeline-content p-4">
                                <h5 className="mt-0 mb-3">
                                  { post.commentType }
                                </h5>
                                <p className="mb-2">
                                 { post.content }
                                </p>
                                <div className="date bg-primary">
                                  <h4 className="mt-0">22</h4>
                                  <p className="mb-0 text-white-50">Jan</p>
                                </div>
                              </div>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PagesTimeline
