import React from 'react'
import { Col, Media, Row } from 'reactstrap'

const ChartHeader = () => {
    return (
        <Row>
        <Col xl="3" sm="4">
          <Media>
            <div className="avatar-sm mr-3">
              <span className="avatar-title rounded-circle bg-soft-warning text-warning font-size-22">
                <i className="mdi mdi-bitcoin" />
              </span>
            </div>

            <Media body>
              <p className="text-muted mb-2">Bitcoin</p>
              <h5>1.02356 BTC</h5>
            </Media>
          </Media>
        </Col>

        <Col xl="3" sm="4">
          <div className="mt-4 mt-sm-0">
            <p className="text-muted mb-2">In USD</p>
            <h5>6310.22 USD</h5>
          </div>
        </Col>

        <Col xl="3" sm="4">
          <div className="mt-4 mt-sm-0">
            <p className="text-muted mb-2">Last 24 hrs</p>
            <h5>
              0.24 % <i className="mdi mdi-arrow-up text-success" />
            </h5>
          </div>
        </Col>
      </Row>


    )
}

export default ChartHeader
