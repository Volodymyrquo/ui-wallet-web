import React from "react"
import { Link } from "react-router-dom"

import { Card, CardBody, CardTitle } from "reactstrap"
import avatar4 from "../../assets/images/users/avatar-4.jpg"

const UserPhoto = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>User Photo</CardTitle>
        <div className="m-4  align-items-center d-flex justify-content-center">
          <img
            className="rounded-circle avatar-xl"
            alt="User Photo"
            src={avatar4}
          />
        </div>
        <div className="m-4  align-items-center d-flex justify-content-center">
          <Link to="#" className="btn btn-primary">
            Change
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default UserPhoto
