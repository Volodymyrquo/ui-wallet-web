import React from "react"
import { Link } from "react-router-dom"
import images from "../../../assets/images"

const contactsListColumns = () => [
  {
    dataField: "img",
    text: "#",
    formatter: (cellContent, user) => (
      <>
        {!user.img ? (
          <div className="avatar-xs">
            <span className="avatar-title rounded-circle">
              {user.name.charAt(0)}
            </span>
          </div>
        ) : (
          <div>
            <img
              className="rounded-circle avatar-xs"
              src={images[user.img]}
              alt=""
            />
          </div>
        )}
        Some User
      </>
    ),
  },
  {
    text: "User name",
    dataField: "userName",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        <h5 className="font-size-14 mb-1">
          <Link to="#" className="text-dark">
            {user.name}
          </Link>
        </h5>
        <p className="text-muted mb-0">{user.designation}</p>
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
        <p className="text-muted mb-0">{user.designation}</p>
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
