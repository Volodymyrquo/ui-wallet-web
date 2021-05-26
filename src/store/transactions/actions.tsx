import {InferActionTypes} from '..'
import {GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS,GET_TRANSACTIONS_FAIL} from './actionTypes'

export type TransactionsActionType = InferActionTypes<typeof actions>

const actions = {
    getTransactions: ()=>({
        type:GET_TRANSACTIONS
    } as const),
    getTransactionsSuccess: (transactions)=>({
        type:GET_TRANSACTIONS_SUCCESS,
        payload: transactions
    } as const),
    getTransactionsFail: (error) => ({
        type:GET_TRANSACTIONS_FAIL,
        payload:error
    } as const)
}

export const {getTransactions, getTransactionsSuccess, getTransactionsFail} = actions