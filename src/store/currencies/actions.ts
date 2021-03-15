import { InferActionTypes } from "..";
import { GET_ASSETS,GET_ASSETS_SUCCESS,IS_ASSETS_FETCHING,GET_ASSETS_DATA_SUCCESS,GET_ASSETS_DATA } from "./actionTypes";
import { AssetType } from "./reducer";

export type CurrenciesActionType = InferActionTypes<typeof assets>

type AssetsDataType = {
price_close: number,
price_high: number,
price_low: number,
price_open: number,
time_close: string,
time_open: string,
time_period_end: string,
time_period_start: string,
trades_count: number,
volume_traded: number,
}


const assets = {
getAssets:()=>({
    type: GET_ASSETS
} as const),
getAssetsSuccess:(assets:Array<AssetType>)=>({
    type: GET_ASSETS_SUCCESS,
    payload: assets
} as const),
isAssetsFetching: (isFetching:boolean)=>({
    type:IS_ASSETS_FETCHING,
    payload: isFetching
} as const),
getAssetsData:(ticker:string)=>({
    type:GET_ASSETS_DATA,
    payload: ticker
} as const),
getAssetsDataSuccess: (data:Array<AssetsDataType>)=>({
    type:GET_ASSETS_DATA_SUCCESS,
    payload:data
} as const)

}

export const {getAssets, getAssetsSuccess, isAssetsFetching, getAssetsData,getAssetsDataSuccess} = assets