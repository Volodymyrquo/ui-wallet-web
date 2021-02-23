import React from "react"

import {
  Card,
  Col,
  Row,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap"

const UserSettings = props => {
  return (
    <Card className="flex-fill">
      <CardBody>
        <Form>
          <CardTitle className="mb-4">User settings</CardTitle>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="formrow-username-Input">User name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="formrow-username-Input"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="formrow-name-Input">Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="formrow-name-Input"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputStatus">Status</Label>
                <select id="formrow-InputStatus" className="form-control">
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputTariff">Tariff</Label>
                <select id="formrow-InputTariff" className="form-control">
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputType">Type</Label>
                <select id="formrow-InputType" className="form-control">
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="formdescription">Description on client</Label>
                <Input
                  type="textarea"
                  id="formdescription"
                  className="form-control"
                  rows="3"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="formstaffsremark">
                  Staff&apos;s remark about client
                </Label>
                <Input
                  type="textarea"
                  id="formstaffsremark"
                  className="form-control"
                  rows="3"
                />
              </FormGroup>
            </Col>
          </Row>

          <div>
            <button type="submit" className="btn btn-primary w-md">
              Save settings
            </button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default UserSettings
