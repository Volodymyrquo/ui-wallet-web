import React from "react"
import { connect } from "react-redux"
import { Col, Container, Row } from "reactstrap"
import ContactsList from "../Dashboard/contactsList/contactsList"
import { setUserSettings } from "../../store/contactsList/actions"
import { fetchListAllCards } from "../../helpers/api_helper_sumra"

const Requisites = () => {
  const handleOnClick = () => {
    fetchListAllCards()
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl="12">
              <ContactsList />
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
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect(null, { setUserSettings })(Requisites)
