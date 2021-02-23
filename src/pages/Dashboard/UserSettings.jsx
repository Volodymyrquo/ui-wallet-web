import React, { useState } from "react"

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
  const [form, setForm] = useState({
    userName: "",
    name: "",
    description: "",
    staffRemark: "",
  })
  const handleOnChange = e => {
    const newForm = target => {
      switch (target.id) {
        case "formrow-username-Input":
          return {
            ...form,
            userName: target.value,
          }

        case "formrow-name-Input":
          return {
            ...form,
            name: target.value,
          }
        case "form-description":
          return {
            ...form,
            description: target.value,
          }
        case "form-staffs-remark":
          return {
            ...form,
            staffRemark: target.value,
          }

        default:
          return form
      }
    }
    setForm(newForm(e.currentTarget))
    console.log(form)
  }

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
                  onChange={handleOnChange}
                  value={form.userName}
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
                  onChange={handleOnChange}
                  value={form.name}
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
                <Label htmlFor="form-description">Description on client</Label>
                <Input
                  type="textarea"
                  id="form-description"
                  className="form-control"
                  rows="3"
                  onChange={handleOnChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="form-staffs-remark">
                  Staff&apos;s remark about client
                </Label>
                <Input
                  type="textarea"
                  id="form-staffs-remark"
                  className="form-control"
                  rows="3"
                  onChange={handleOnChange}
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
