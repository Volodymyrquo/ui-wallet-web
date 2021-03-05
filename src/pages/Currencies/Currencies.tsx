import React from "react"
import { Card, CardBody, Col, Container, Media, Row, Table } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { AppStateType } from "../../store/reducers";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useSelector } from "react-redux"
import ChartHeader from "./ChartHeader";

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
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">My Assets</h4>

                  <div className="table-responsive">
                    <Table className="table-nowrap table-centered mb-0">
                      <thead>
                        <tr>
                          <th>Token</th>
                          <th>Price</th>
                          <th>Invest</th>
                          <th>Loans</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.assets.map((asset, key) => (
                          <tr key={key}>
                            <th scope="row">
                              <div className="d-flex align-items-center">
                                <div className="avatar-xs mr-3">
                                  <span
                                    className={
                                      "avatar-title rounded-circle bg-soft-" +
                                      asset.color +
                                      " text-" +
                                      asset.color +
                                      " font-size-18"
                                    }
                                  >
                                    <i className={asset.icon} />
                                  </span>
                                </div>
                                <span>{asset.title}</span>
                              </div>
                            </th>
                            <td>
                              <div className="text-muted">$ {asset.price}</div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                {asset.investRate}
                              </h5>
                              <div className="text-muted">
                                ${asset.investPrice}
                              </div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                {asset.loansRate}
                              </h5>
                              <div className="text-muted">
                                ${asset.loansPrice}
                              </div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                {asset.totalRate}
                              </h5>
                              <div className="text-muted">
                                ${asset.totalPrice}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Currencies
