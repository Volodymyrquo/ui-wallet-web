import React from "react"
import { Link } from "react-router-dom"

const contactsListColumns = () => [
  {
    text: "User name",
    dataField: "userName",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        <h5 className="font-size-14 mb-1">
          <Link to="#" className="text-dark">
            {user.userName}
          </Link>
        </h5>
      </>
    ),
  },
  {
    text: "Name",
    dataField: "name",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        <h5 className="font-size-14 mb-1">
          <Link to="#" className="text-dark">
            {user.name}
          </Link>
        </h5>
      </>
    ),
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
  },
  {
    text: "Tariff",
    dataField: "tariff",
    sort: true,
  },
  {
    dataField: "type",
    text: "Type",
    sort: true,
  },
  {
    dataField: "description",
    sort: true,
    text: "Description",
  },
  {
    dataField: "staffRemark",
    text: "Staff's remark",
    sort: true,
  },
]

export default contactsListColumns
