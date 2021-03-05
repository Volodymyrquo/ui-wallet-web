import React, { FC } from "react"
import { Card, CardBody, Table } from "reactstrap"
import { AssetType } from "../../store/currencies/reducer"

type PropsType = {
  assets: Array<AssetType>
}


const CurrenciesList:FC<PropsType> = ({assets}) => {
 
  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">My Assets</h4>

        <div className="table-responsive">
          <Table className="table-nowrap table-centered mb-0">
            <thead>
              <tr>
                <th>Token</th>
                <th>Price</th>
                <th>Invest</th>
                <th>Loans</th>
                <th>Total</th>
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
                            asset.color +
                            " text-" +
                            asset.color +
                            " font-size-18"
                          }
                        >
                          <i className={asset.icon} />
                        </span>
                      </div>
                      <span>{asset.title}</span>
                    </div>
                  </th>
                  <td>
                    <div className="text-muted">$ {asset.price}</div>
                  </td>
                  <td>
                    <h5 className="font-size-14 mb-1">{asset.investRate}</h5>
                    <div className="text-muted">${asset.investPrice}</div>
                  </td>
                  <td>
                    <h5 className="font-size-14 mb-1">{asset.loansRate}</h5>
                    <div className="text-muted">${asset.loansPrice}</div>
                  </td>
                  <td>
                    <h5 className="font-size-14 mb-1">{asset.totalRate}</h5>
                    <div className="text-muted">${asset.totalRate}</div>
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
