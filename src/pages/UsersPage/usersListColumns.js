import React from "react"
import { Link } from "react-router-dom"
import images from "../../assets/images"

const usersListColumns = () => [
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
    dataField: "description",
    text: "Description",
    sort: true,
  },
  {
    text: "Type of user",
    dataField: "typeOfUser",
    sort: true,
  },
  {
    dataField: "tariff",
    text: "Tariff",
    sort: true,
  },
  {
    dataField: "country",
    sort: true,
    text: "Country",
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
  },
]

export default usersListColumns
