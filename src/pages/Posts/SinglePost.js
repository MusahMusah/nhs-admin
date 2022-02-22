import React from "react";
import MetaTags from 'react-meta-tags';
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import postService
import postService from '../../services/post.service';

// import images
import user2 from "../../assets/images/users/user-2.jpg";
 
const SinglePost = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Directory | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="Directory" />
          <Row>
            <Col md={12}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user2}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Jerome A. Hebert
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Jerome@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SinglePost;
