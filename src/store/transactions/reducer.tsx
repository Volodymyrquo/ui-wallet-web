import {GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAIL} from './actionTypes'
import {TransactionsActionType} from "./actions"

export type INIT_STATE_TYPE = typeof INIT_STATE;

 type ImgType ={
        description: string
        card: string
        amount: string
 }
export type TransactionType = {
    
        id: string
        date: string
        type: string
        currency: string
       amount: string
        amountinUSD: string
        status: string
        img:ImgType
       
}

const INIT_STATE = {
    transactions: [] as Array<TransactionType>,
    error: '' as string
}


const transactions = (state=INIT_STATE, action:TransactionsActionType):INIT_STATE_TYPE => {
    switch (action.type) {
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: action.payload
            }
            case GET_TRANSACTIONS_FAIL:
                return {
                    ...state,
                    error: action.payload
                }
                default:
                    return state
    }
}

export default  transactions

