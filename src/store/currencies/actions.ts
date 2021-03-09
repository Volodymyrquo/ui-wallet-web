import { InferActionTypes } from "..";
import { GET_ASSETS,GET_ASSETS_SUCCESS } from "./actionTypes";


export type CurrenciesActionType = InferActionTypes<typeof assets>

const assets = {
getAssets:()=>({
    type: GET_ASSETS
} as const),
getAssetsSuccess:(assets)=>({
    type: GET_ASSETS_SUCCESS,
    payload: assets
} as const),


}

export const {getAssets, getAssetsSuccess} = assets