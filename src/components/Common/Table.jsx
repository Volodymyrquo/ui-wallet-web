import React, { useState, useMemo, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { imagesList } from "../../pages/Transactions/imagesList"

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null)
  const [checked, setChecked] = useState(false)

  const requestSort = field => {
    let direction = "ascending"

    if (sortConfig !== null && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ field, direction })
  }
  useMemo(() => {
    if (sortConfig !== null) {
      if (sortConfig.field === "date") {
        data.rows.sort((a, b) => {
          if (
            a[Date.parse(sortConfig.field)] < b[Date.parse(sortConfig.field)]
          ) {
            return sortConfig.direction === "ascending" ? -1 : 1
          }
          if (
            a[Date.parse(sortConfig.field)] > b[Date.parse(sortConfig.field)]
          ) {
            return sortConfig.direction === "ascending" ? 1 : -1
          }
          return 0
        })
      }

      data.rows.sort((a, b) => {
        if (a[sortConfig.field] < b[sortConfig.field]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.field] > b[sortConfig.field]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return data.rows
  }, [data.rows, sortConfig])

  const handleToggleCheck = () => {
    setChecked(!checked)
  }
  useEffect(() => {
    toggleCheck()
  }, [checked])

  const toggleCheck = () => {
    let checkboxes = document.getElementsByName("rowCheckBox")
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checked
    }
  }
  return (
    <>
      <table className="table dataTable">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="headerCheckBox"
                onClick={handleToggleCheck}
              />
            </th>

            {data.columns.map(item => (
              <th
                scope="col"
                key={uuidv4()}
                onClick={() => requestSort(item.field)}
                className="sorting"
              >
                <span className="table-th-txt">{item.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map(row => (
            <tr key={uuidv4()}>
              <td>
                <input type="checkbox" name="rowCheckBox" />
              </td>

              {data.columns.map(col => {
                if (col.field == "amount") {
                  let direction = ["Buy", "Sell", "Receiv", "Sent"].find(el =>
                    row.description.includes(el)
                  )

                  let image = imagesList.find(el => el.title == direction)
                  if (image) {
                    return (
                      <td key={uuidv4()}>
                        <img
                          src={image.img}
                          alt="receive"
                          className="table-td-img"
                        />
                        <span
                          ml-2
                          className="table-txt"
                          style={{ display: "inline-block" }}
                        >
                          {row[col.field]}
                        </span>
                      </td>
                    )
                  }
                }

                let image = imagesList.find(el => el.title == row[col.field])
                if (image) {
                  return (
                    <td key={uuidv4()}>
                      <img
                        src={image.img}
                        alt="receive"
                        className="table-td-img"
                      />
                      <span
                        ml-2
                        className="table-txt"
                        style={{ display: "inline-block" }}
                      >
                        {row[col.field]}
                      </span>
                    </td>
                  )
                }
                return (
                  <td key={uuidv4()}>
                    <span ml-1 className="table-txt">
                      {row[col.field]}
                    </span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
