import { InferActionTypes } from "..";
import { GET_ASSETS,GET_ASSETS_SUCCESS,IS_ASSETS_FETCHING } from "./actionTypes";
import { AssetType } from "./reducer";

export type CurrenciesActionType = InferActionTypes<typeof assets>

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
} as const)


}

export const {getAssets, getAssetsSuccess, isAssetsFetching} = assets