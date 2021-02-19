import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Breadcrumb

import { withTranslation } from "react-i18next"

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}

          <Row>
            <Col xl="3">
              <Card>
                <CardBody>First card body</CardBody>
              </Card>
            </Col>
            <Col xl="3">
              <Card>
                <CardBody>Second card body</CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>Third card body</CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col xl="6">
              <Card>
                <CardBody>First card body</CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>Second card body</CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col xl="12">
              <Card>
                <CardBody>Second card body</CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
