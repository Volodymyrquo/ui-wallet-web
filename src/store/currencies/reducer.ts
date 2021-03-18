import { GET_ASSETS_SUCCESS, IS_ASSETS_FETCHING,GET_ASSETS_DATA_SUCCESS, GET_ASSETS_DATA_ARRAY_SUCCESS} from "./actionTypes";
import { CurrenciesActionType } from "./actions";

export type AssetType = {
  asset_id: string,
  data_end: string,
  data_orderbook_end: string,
  data_orderbook_start: string,
  data_quote_end:string,
  data_quote_start: string,
  data_start: string,
  data_symbols_count: number,
  data_trade_end: string,
  data_trade_start: string,
  id_icon: string,
  name: string,
  price_usd: number,
  type_is_crypto: number,
  volume_1day_usd: number,
  volume_1hrs_usd: number,
  volume_1mth_usd: number,
}

export type SeriesType = {x:string,y:Array<number>}
export type SeriesAssetsDataType = {
  name:string,
  data: number[]
}


type INIT_STATE_TYPE = typeof INIT_STATE

const INIT_STATE = {
    series:[{data: null as null| SeriesType[]
    }],
    options: {
      chart: { toolbar: !1, zoom: { enabled: !0 } },
      plotOptions: {
        candlestick: { colors: { upward: "#34c38f", downward: "#f46a6a" } },
      },
      xaxis: { type: 'datetime' },
      yaxis: { tooltip: { enabled: !0 } },
    },

    assets: null as null | AssetType[],
  
    seriesAssetsData: [] as [] | SeriesAssetsDataType[],
    

    optionsAssestData: {
      chart: { toolbar: !1, zoom: { enabled: !0 } },
    stroke: {
      width: 4,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [ '#5AFF5C'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [10, 40, 60, 100]
      },
    },
    yaxis:{
      show:false,
  },
  xaxis: {
          floating: true,
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          },
    }},

    isAssetsFetching: false

  }


const currencies = (state=INIT_STATE, action:CurrenciesActionType):INIT_STATE_TYPE => {
    switch (action.type){
      case GET_ASSETS_SUCCESS:
        return {
          ...state,
          assets: action.payload
        }
        case IS_ASSETS_FETCHING:
          return {
            ...state,
            isAssetsFetching: action.payload
          }
          case GET_ASSETS_DATA_SUCCESS:
           
            return {
              ...state,
              series:[{
                data: action.payload.map(item=>{return{x:item.time_period_end, y:[item.price_open,item.price_high,item.price_low,item.price_close]}})
              }]
            }
          case GET_ASSETS_DATA_ARRAY_SUCCESS:
             
                       return {
                        
              ...state,
              seriesAssetsData:[...state.seriesAssetsData,{
                name: action.payload[0].asset_id,
                data: action.payload.map(item=>item.price_close)
              }]
            }
        default:
            return state
    }
}

export default currencies