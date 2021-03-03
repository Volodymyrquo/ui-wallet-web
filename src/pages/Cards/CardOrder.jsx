import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { getCardsTypes } from "../../store/cardsTypes/actions"
const CardOrder = () => {
  const dispatch = useDispatch()
  const cardTypes = useSelector(state => state.cardsTypes.types)

  const [form, setForm] = useState({})
  useEffect(() => {
    dispatch(getCardsTypes())
  }, [getCardsTypes])

  const handleOnChange = event => {
    setForm(event.target.value)
  }

  return (
    <div className="page-content">
      <Container fluid={true}>
        <Breadcrumbs title="Cards" breadcrumbItem="Card Order" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>Card Order</CardTitle>
                <div className="form-group row">
                  <label
                    htmlFor="example-number-input"
                    className="col-md-2 col-form-label"
                  >
                    Card Number
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="number"
                      defaultValue="1215524153253804"
                      id="example-number-input"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                    Check Code
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="tel"
                      defaultValue="32303534-3931-4373-8e4d-302e34383632"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-number-input"
                    className="col-md-2 col-form-label"
                  >
                    Activation Code
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="number"
                      defaultValue="636119"
                      id="example-number-input"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-datetime-local-input"
                    className="col-md-2 col-form-label"
                  >
                    Activation Before
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="datetime-local"
                      defaultValue="2019-08-19T13:45:00"
                      id="example-datetime-local-input"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-date-input"
                    className="col-md-2 col-form-label"
                  >
                    Activation Date
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="date"
                      defaultValue="2019-08-19"
                      id="example-date-input"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label">Status</label>
                  <div className="col-md-10">
                    <select className="form-control">
                      <option>Select</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row ">
                  <label className="col-md-2 col-form-label">Card Type</label>
                  <div className="col-md-10">
                    <select className="custom-select" onChange={handleOnChange}>
                      <option defaultValue>Open this select menu</option>
                      {cardTypes.map(item => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Creator
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Artisanal kale"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardOrder
