import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Breadcrumb

import { withTranslation } from "react-i18next"
import UserPhoto from "./UserPhoto"

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}

          <Row>
            <Col xl="3">
              <UserPhoto />
            </Col>
            <Col xl="3">
              <Card>
                <CardBody>
                  <h1>upload documents</h1>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h1>user settings</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col xl="6">
              <Card>
                <CardBody>
                  <h1>contact settings</h1>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h1>requisites</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col xl="12">
              <Card>
                <CardBody>
                  <h1>contacts table</h1>
                </CardBody>
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
