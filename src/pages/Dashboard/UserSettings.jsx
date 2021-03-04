import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

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
import {
  setStatusOptions,
  setTariffOptions,
  setTypeOptions,
} from "../../store/userSettings/actions"
import { setUserSettings } from "../../store/contactsList/actions"
const UserSettings = ({
  statusOptions,
  tariffOptions,
  typeOptions,
  setStatusOptions,
  setTariffOptions,
  setTypeOptions,
  setUserSettings,
}) => {
  const [form, setForm] = useState({})

  useEffect(() => {
    setStatusOptions()
    setTariffOptions()
    setTypeOptions()
  }, [setStatusOptions, setTariffOptions, setTypeOptions])

  const handleOnClick = event => {
    event.preventDefault()
    const newForm = { ...form, id: Date.now().toString }
    setUserSettings(newForm)
    setForm({
      id: "",
      userName: "",
      name: "",
      description: "",
      staffRemark: "",
    })
  }

  const handleOnChange = e => {
    setForm({ ...form, ...{ [e.target.name]: e.target.value } })
  }
  /*   const handleOnClick = () => {
    setUserSettings()
  }
 */ return (
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
                  name="userName"
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
                  name="name"
                  value={form.name}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputStatus">Status</Label>
                <select
                  id="formrow-InputStatus"
                  className="form-control"
                  onChange={handleOnChange}
                  name="status"
                >
                  {statusOptions.map((item, idx) => (
                    <option key={idx}>{item}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputTariff">Tariff</Label>
                <select
                  id="formrow-InputTariff"
                  className="form-control"
                  onChange={handleOnChange}
                  name="tariff"
                >
                  {tariffOptions.map((item, idx) => (
                    <option key={idx}>{item}</option>
                  ))}
                </select>
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup>
                <Label for="formrow-InputType">Type</Label>
                <select
                  id="formrow-InputType"
                  className="form-control"
                  onChange={handleOnChange}
                  name="type"
                >
                  {typeOptions.map((item, idx) => (
                    <option key={idx}>{item}</option>
                  ))}
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
                  name="description"
                  onChange={handleOnChange}
                  value={form.description}
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
                  name="staffRemark"
                  onChange={handleOnChange}
                  value={form.staffRemark}
                />
              </FormGroup>
            </Col>
          </Row>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-md"
              onClick={handleOnClick}
            >
              Save settings
            </button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = state => ({
  statusOptions: state.userSettings.statusOptions,
  tariffOptions: state.userSettings.tariffOptions,
  typeOptions: state.userSettings.typeOptions,
})

export default connect(mapStateToProps, {
  setStatusOptions,
  setTariffOptions,
  setTypeOptions,
  setUserSettings,
})(UserSettings)
