import React, { useState, useMemo, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

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
      <table className=" table dataTable ">
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
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map(item => (
            <tr key={uuidv4()}>
              <td>
                <input type="checkbox" name="rowCheckBox" />
              </td>
              {Object.keys(item).map(x => (
                <td key={uuidv4()}>{item[x]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
