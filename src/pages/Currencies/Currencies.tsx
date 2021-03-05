import React,{FC} from "react"
import { Card, CardBody, Col, Container, Media, Row, Table } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { AppStateType } from "../../store/reducers";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useSelector } from "react-redux"
import ChartHeader from "./ChartHeader";
import CurrenciesList from "./CurrenciesList";

const Currencies = () => {
 const state = useSelector((state:AppStateType) => state.currencies)

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Home" breadcrumbItem="Currencies" />
          <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Price</h4>
                              <ChartHeader />
                  <div className="mt-4">
                    <div
                      id="candlestick-chart"
                      className="apex-charts"
                      dir="ltr"
                    >
                      <ReactApexChart
                        series={state.series}
                        options={state.options}
                        type="candlestick"
                        height={410}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <CurrenciesList assets={state.assets}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Currencies
