import React from "react"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Media,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import ReactApexChart from "react-apexcharts"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useSelector } from "react-redux"

const Currencies = () => {
  const state = useSelector(state => state.currencies)

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
                        height={310}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="4">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Buy / Sell</h4>

                  <div>
                    <p className="text-muted mb-2">
                      <i className="mdi mdi-wallet mr-1" /> Wallet Balance
                    </p>
                    <h5>$ 9148.23</h5>
                  </div>

                  <div className="mt-4">
                    <Nav pills className="bg-light rounded" role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: state.activeTab === "1",
                          })}
                          onClick={() => {
                            this.toggleTab("1")
                          }}
                        >
                          Buy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: state.activeTab === "2",
                          })}
                          onClick={() => {
                            this.toggleTab("2")
                          }}
                        >
                          Sell
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: state.activeTab === "3",
                          })}
                          onClick={() => {
                            this.toggleTab("3")
                          }}
                        >
                          Exchange Coin
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={state.activeTab} className="mt-4">
                      <TabPane tabId="1" id="buy-tab">
                        <h5 className="font-size-14 mb-4">Buy Coin</h5>

                        <div>
                          <div>
                            <Label>Add Amount :</Label>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                              </InputGroupAddon>
                              <select
                                className="custom-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Price
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                              <InputGroupAddon addonType="append">
                                <Label className="input-group-text">$</Label>
                              </InputGroupAddon>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Total
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="success"
                              className="w-md"
                            >
                              Buy Coin
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="sell-tab">
                        <h5 className="font-size-14 mb-4">Sell Coin</h5>

                        <div>
                          <div>
                            <Label>Add Amount :</Label>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                              </InputGroupAddon>
                              <select
                                className="custom-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Price
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                              <InputGroupAddon addonType="append">
                                <Label className="input-group-text">$</Label>
                              </InputGroupAddon>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Total
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="danger"
                              className="w-md"
                            >
                              Sell Coin
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3" id="exchange-tab" role="tabpanel">
                        <div className="float-right ml-2">
                          <h5 className="font-size-14">
                            <i className="bx bx-wallet text-primary font-size-16 align-middle mr-1" />{" "}
                            $4235.23
                          </h5>
                        </div>
                        <h5 className="font-size-14 mb-4">Exchange Coin</h5>

                        <div>
                          <div className="form-group mb-3">
                            <Label>Payment method :</Label>
                            <select className="custom-select">
                              <option>Credit / Debit Card</option>
                              <option>Paypal</option>
                            </select>
                          </div>

                          <div>
                            <Label>Add Amount :</Label>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                              </InputGroupAddon>
                              <select
                                className="custom-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Price
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                              <InputGroupAddon addonType="append">
                                <Label className="input-group-text">$</Label>
                              </InputGroupAddon>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <Label className="input-group-text">
                                  Total
                                </Label>
                              </InputGroupAddon>
                              <Input type="text" className="form-control" />
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="secondary"
                              className="w-md"
                            >
                              Exchange Coin
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
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
