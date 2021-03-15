import React, { FC } from "react"
import { Col, Media, Row } from "reactstrap"
import { AssetType } from "../../store/currencies/reducer"


const ChartHeader:FC<AssetType> = ({ asset_id, id_icon, name, price_usd }) => {

  return (
    <Row>
      <Col xl="3" sm="4">
        <Media>
          <div className="avatar-xs mr-3">
            <span className="avatar-title rounded-circle bg-soft-primary">
              <img
                src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${id_icon.replace(
                  /-/g,
                  ""
                )}.png`}
                alt={name}
                id={asset_id}
              />
            </span>
          </div>

          <Media body>
            <p className="text-muted mb-2">{name}</p>

            <h5> 1 {asset_id}</h5>
          </Media>
        </Media>
      </Col>

      <Col xl="3" sm="4">
        <div className="mt-4 mt-sm-0">
          <p className="text-muted mb-2">In USD</p>
          <h5>{Math.round(price_usd * 100) / 100}</h5>
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
