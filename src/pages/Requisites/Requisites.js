import React from "react"
import { connect } from "react-redux"
import { Col, Container, Row } from "reactstrap"
import ContactsList from "../Dashboard/contactsList/contactsList"
import { setUserSettings } from "../../store/contactsList/actions"
import {
  getAssets,
  getOHLCVData,
  getExchanges,
  getSymbols,
} from "../../helpers/api_helper_coinapi"
import Preloader from "../../components/Common/Preloader"

const Requisites = () => {
  const handleOnClick = () => {
    getOHLCVData()
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
          <Preloader />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect(null, { setUserSettings })(Requisites)
