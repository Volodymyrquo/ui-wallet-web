import axios from "axios"

const instance = axios.create({
  baseURL: `https://rest.coinapi.io/`,
  headers: {
    "X-CoinAPI-Key": "34C78562-8B50-440F-B123-370B626B5385",
    "Content-Type": "application/json",
    Accept: 'aplication/json'
  },
})

export const getOHLCVData = async()=>{

  const response = await instance.get(`v1/ohlcv/BINANCE_SPOT_BCHSV_BTC/latest?period_id=1DAY`)
   
  return await response.data
}
export const getAssets = async()=>{

  const response = await instance.get(`v1/assets/BTC`)
   
  return await response.data
}
export const getExchanges = async()=>{

  const response = await instance.get(`v1/exchanges`)
   
  return await response.data
}
export const getSymbols = async()=>{

  const response = await instance.get(`v1/symbols/BINANCE`)
   
  return await response.data
}

