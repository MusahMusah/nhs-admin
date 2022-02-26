import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <div className="col-12">
              <p>
                © {new Date().getFullYear()} Crafted with{" "}
                <i className="mdi mdi-heart text-danger" /> by Payluk
                Technologies
              </p>
            </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
