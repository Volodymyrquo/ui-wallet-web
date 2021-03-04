import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { getCardsTypes } from "../../store/cardsTypes/actions"
import { setCard } from "../../store/cards/actions"
import { useForm } from "react-hook-form"

const CardOrder = () => {
  const dispatch = useDispatch()
  const cardTypes = useSelector(state => state.cardsTypes.types)
  const { register, handleSubmit, errors } = useForm() // initialize the hook

  const [form, setForm] = useState({})
  useEffect(() => {
    dispatch(getCardsTypes())
  }, [getCardsTypes])

  const handleOnChange = event => {
    setForm({ ...form, ...{ [event.target.name]: event.target.value } })
  }
  const onSubmit = data => {
    setForm({ ...form, ...data })
    dispatch(setCard(form))
    setForm({})
  }

  return (
    <div className="page-content">
      <Container fluid={true}>
        <Breadcrumbs title="Cards" breadcrumbItem="Card Order" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                        type="text"
                        id="example-number-input"
                        name="number"
                        onChange={handleOnChange}
                        value={form.number || ""}
                        ref={register({ required: true, pattern: /\d+/ })}
                      />
                      {errors.number && "Please enter number for card number"}
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
                        name="check_code"
                        value={form.check_code || ""}
                        onChange={handleOnChange}
                        ref={register({ required: true })}
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
                        id="example-number-input"
                        ref={register({ required: true })}
                        value={form.activation_code || ""}
                        name="activation_code"
                        onChange={handleOnChange}
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
                        id="example-datetime-local-input"
                        name="activate_before"
                        onChange={handleOnChange}
                        ref={register({ required: true })}
                        value={form.activate_before || ""}
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
                        id="example-date-input"
                        name="activated_at"
                        value={form.activated_at || ""}
                        onChange={handleOnChange}
                        ref={register({ required: true })}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-2 col-form-label">Status</label>
                    <div className="col-md-10">
                      <select
                        className="form-control"
                        name="status"
                        onChange={handleOnChange}
                        value={form.status || ""}
                        ref={register({
                          required: true,
                        })}
                      >
                        <option>Select</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row ">
                    <label className="col-md-2 col-form-label">Card Type</label>
                    <div className="col-md-10">
                      <select
                        className="custom-select"
                        onChange={handleOnChange}
                        value={form.type_value || ""}
                        name="type_value"
                        ref={register({ required: true })}
                      >
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
                        name="creator_value"
                        value={form.creator_value || ""}
                        onChange={handleOnChange}
                        ref={register({ required: true })}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Owner
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        name="owner_value"
                        value={form.owner_value || ""}
                        onChange={handleOnChange}
                        ref={register({ required: true })}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <Button
                      type="submit"
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      //onClick={handleOnClick}
                    >
                      Add card
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardOrder
