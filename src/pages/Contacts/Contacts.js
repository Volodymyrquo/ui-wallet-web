import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const Contacts = () => {
  return (
    <div className="page-content">
      <h1>Hello from Contacts...</h1>
    </div>
  )
}

export default connect()(withRouter(Contacts))
