import React,{FC, useEffect} from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { AppStateType } from "../../store/reducers";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useDispatch, useSelector } from "react-redux"
import ChartHeader from "./ChartHeader";
import CurrenciesList from "./CurrenciesList";
import { getAssets } from "../../store/currencies/actions";
import Preloader from "../../components/Common/Preloader";



const Currencies:FC = () => {
 const state = useSelector((state:AppStateType) => state.currencies)
 const isFetching = useSelector((state:AppStateType)=> state.currencies.isAssetsFetching)
 const dispatch = useDispatch()

 useEffect(() => {
  
     dispatch(getAssets())
   
 }, [getAssets])

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
              {isFetching? <Preloader /> : <CurrenciesList assets={state.assets}/>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Currencies
