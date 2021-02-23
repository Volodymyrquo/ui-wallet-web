import React, {FC} from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Breadcrumb

import UserPhoto from "./UserPhoto"
import UploadDocuments from "./UploadDocuments"
import UserSettings from "./UserSettings"
import s from './index.module.css'

type PropsType = any


const Dashboard:FC<PropsType> = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid >
          {/* Render Breadcrumb */}

          <Row >
            <Col xl="3" className='d-flex'>
              <UserPhoto />
            </Col>
            <Col xl="3" className='d-flex'  >
              <UploadDocuments />
            </Col>
            <Col xl="6" className='d-flex' >
              <UserSettings />
            </Col>
          </Row>

          <Row >
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

          <Row >
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

export default Dashboard
