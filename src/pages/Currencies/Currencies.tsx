import React,{FC, useEffect, useState} from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { AppStateType } from "../../store/reducers";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useDispatch, useSelector } from "react-redux"
import ChartHeader from './ChartHeader'
import CurrenciesList from "./CurrenciesList";
import { getAssets, getAssetsData } from "../../store/currencies/actions";
import Preloader from "../../components/Common/Preloader";
import { AssetType } from "../../store/currencies/reducer"
import ChartSmallHeader from "./ChartSmallHeader";



const Currencies:FC = () => {
  const [ticker, setTicker] = useState('BTC')


 const state = useSelector((state:AppStateType) => state.currencies)
 const dispatch = useDispatch()

 useEffect(() => {
  
     dispatch(getAssets())
     dispatch(getAssetsData(ticker))
    
   
 }, [getAssets, getAssetsData])

 let chageInPercent = 0
 const [obj] = state.series

 if(obj.data !== null) {

const lastPrice = obj.data[obj.data.length-1].y[obj.data[obj.data.length-1].y.length-1] 
const previousPrice = obj.data[obj.data.length-25].y[obj.data[obj.data.length-25].y.length-1]
 chageInPercent = Math.round((lastPrice - previousPrice)/lastPrice*100*100)/100 }


let currentAssets:AssetType

if(state.assets !== null){
  [currentAssets] = state.assets.filter((item)=>{
    if(item.asset_id === ticker) {
     
      return  item
   }
  })
}

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
  { state.assets === null? <Preloader />:<ChartHeader {...currentAssets} changeInPercent={chageInPercent} />}

  <div className="mt-4">
    <div
      id="candlestick-chart"
      className="apex-charts"
      dir="ltr"
    >
     {obj.data === null? <Preloader /> : <ReactApexChart
        series={state.series}
        options={state.options}
        type="candlestick"
        height={410}
      />}
    </div>
  </div>
</CardBody>
</Card>

            </Col>
            <Col xl="4">

            {state.assets === null? <Preloader /> : <CurrenciesList 
            getAssetsData={getAssetsData} 
            assets={state.assets}
            setTicker={setTicker}
            />}
            </Col>
          </Row>
          <Row>

          {obj.data === null || state.seriesAssetsData.length === 0 || state.assets === null   ? <Preloader /> : state.assets.map((item,idx)=>{
           const series = state.seriesAssetsData.find(el => el['name']===item.asset_id)
            return <Col xl='2'key={idx}><Card>
            <CardBody>
            <ChartSmallHeader {...item} changeInPercent={chageInPercent} />
            <ReactApexChart
            options={state.optionsAssestData}
            series={[series]}
            type='line'
            height={60}
            />
          </CardBody>
          </Card>
          </Col>}
          )}
 
</Row>

        </Container>
      </div>
    </>
  )
}

export default Currencies
