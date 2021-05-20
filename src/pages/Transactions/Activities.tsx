import React, {useEffect, FC} from 'react'
import { Card, CardBody } from 'reactstrap'
import transactionsColumns from './transactionsColumns'
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../store/transactions/actions";
import { AppStateType } from '../../store/reducers'
import Table from "../../components/Common/Table";

const Activities:FC = () => {
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
              <Table data={data} />
      </Card>
  
    )
}

export default Activities
