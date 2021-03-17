import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { Card, CardBody, Table } from "reactstrap"
import { AssetType } from "../../store/currencies/reducer"

type PropsType = {
  assets: Array<AssetType>
  getAssetsData: (ticker:string)=>void
  setTicker:(ticker:string)=>void
}


const CurrenciesList:FC<PropsType> = ({assets,getAssetsData,setTicker}) => {

  
const dispatch = useDispatch()

 const handleOnClick = (e) => {
  dispatch(getAssetsData(e.target.id))
  setTicker(e.target.id)

 }

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">My Assets</h4>

        <div className="table-responsive">
          <Table className="table-nowrap table-centered mb-0">
            <thead>
              <tr>
                <th>Token</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, key) => (
                <tr key={key}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <div className="avatar-xs mr-3">
                        <span
                          className={
                            "avatar-title rounded-circle bg-soft-" +
                          'primary'+
                            " text-" +
                            'primary' +
                            " font-size-18 btn"
                          }
                          onClick={handleOnClick}
                        >
                          <img src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${asset.id_icon.replace(/-/g, "")}.png`} alt={asset.name} id={asset.asset_id} />
                        </span>
                      </div>
                      <span>{asset.asset_id}</span>
                    </div>
                  </th>
                  <td>
                    <h5 className="font-size-14 mb-1">{asset.name}</h5>
                  </td>

                  <td>
                    <div className="text-muted">$ {(Math.round(asset.price_usd*100)/100).toLocaleString()}</div>
                  </td>
                  <td>
                    <div className="text-muted">{asset.data_trade_end.split('T')[0]} {asset.data_trade_end.split('T')[1].slice(0,5)}</div>
                  </td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default CurrenciesList
