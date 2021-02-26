import React from "react"
import { Link } from "react-router-dom"

const cardsTypesListColumns = () => [
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

const 

export default cardsTypesListColumns
