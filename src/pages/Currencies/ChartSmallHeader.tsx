import React, { FC } from "react"
import { Col, Media, Row } from "reactstrap"
import { AssetType } from "../../store/currencies/reducer"

type PropsType =  AssetType & {
  changeInPercent: number
}

const ChartSmallHeader:FC<PropsType> = ({ asset_id,price_usd, changeInPercent }) => {

  return (
      <>
    <Row >
      <Col xl="7" sm="7">
            <div>
                <span>
                {asset_id}
                </span>
            	&nbsp;
                <i className="icon-Trade"></i>
            	&nbsp;
                <span>
                    USD
                </span>
            </div>
            <p>{(Math.round(price_usd * 100) / 100).toLocaleString()}</p>
      </Col>

      <Col xl="5" sm="5">
          <p>
            {changeInPercent} % {changeInPercent >= 0 ?<i className="mdi mdi-arrow-up text-success" />:<i className="mdi mdi-arrow-down text-danger" />}
          </p>
      </Col>

    </Row>
    </>
  )
}

export default ChartSmallHeader
