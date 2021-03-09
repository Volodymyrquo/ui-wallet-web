import axios from "axios"

const instance = axios.create({
  baseURL: `https://rest-sandbox.coinapi.io/`,
  headers: {
    "X-CoinAPI-Key": "34C78562-8B50-440F-B123-370B626B5385",
    "Content-Type": "application/json",
    Accept: 'aplication/json'
  },
})

const instanceReal = axios.create({
  baseURL: `https://rest.coinapi.io/`,
  headers: {
    "X-CoinAPI-Key": "34C78562-8B50-440F-B123-370B626B5385",
    "Content-Type": "application/json",
    Accept: 'aplication/json'
  },
})

const array = ['BITSTAMP','GEMINI']

const assetsIds = ['BTC','ETH','EOS','BCH','LTC','LINK']

export const getOHLCVData = async()=>{

  const response = await instance.get(`v1/ohlcv/BINANCE_SPOT_BCHSV_BTC/latest?period_id=1DAY`)
   
  return await response.data
}
export const fetchAssets = async()=>{

  const response = await instance.get(`v1/assets?filter_asset_id=${assetsIds}`)
   
  return await response.data


}
export const getExchanges = async()=>{

  const response = await instance.get(`v1/exchanges?filter_exchange_id=${array}`)
   
  return await response.data
}
export const getSymbols = async()=>{

  const response = await instance.get(`v1/symbols/BINANCE`)
   
  return await response.data
}
export const fetchAssetsIcons = async()=>{

  const response = await instance.get(`v1/assets/icons/32`)
   
  return await response.data
}

export const fetchHistoricalData = async()=>{

  const response = await instanceReal.get(`/v1/ohlcv/BTC/USD/history?period_id=1MIN&time_start=2021-03-08T14:57:00&time_end=2021-03-08T16:57:00`)
   
  return await response.data
}