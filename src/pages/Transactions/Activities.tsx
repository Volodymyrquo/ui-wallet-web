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
        <CardBody>
          <h4 className="card-title mb-4">Activities</h4>
          <ul className="nav nav-tabs nav-tabs-custom">
          </ul>
  
          <div className="mt-4">
              <Table data={data} />
          </div>
        </CardBody>
      </Card>
  
    )
}

export default Activities
