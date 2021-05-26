import React, {useEffect, FC} from 'react'
import { Card, TabContent, TabPane} from 'reactstrap'
import transactionsColumns from './transactionsColumns'
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../store/transactions/actions";
import { AppStateType } from '../../store/reducers'
import Table from "../../components/Common/Table";
import  {DateRangeType} from "./index"

type PropsType ={
  activeTab:string
  statusChoosen: string
  searchItem:string
dateRange: DateRangeType[]
}

const Activities:FC<PropsType> = ({activeTab, statusChoosen, searchItem, dateRange}) => {
    const dispatch = useDispatch();
    const {transactions} = useSelector((state:AppStateType) => state.transactions)

useEffect(()=>{
dispatch(getTransactions())
},[])


    const data = {
        columns: transactionsColumns,
        rows: transactions,
      }
    
    return (
        <Card>
                      <TabContent activeTab={activeTab} >
              <TabPane tabId={activeTab} >

              <Table data={data} tabId={activeTab} statusChoosen={statusChoosen} searchItem={searchItem} dateRange={dateRange}/>
              </TabPane>
              </TabContent>
      </Card>
  
    )
}

export default Activities
