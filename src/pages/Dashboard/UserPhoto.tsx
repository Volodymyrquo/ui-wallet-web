import React,{FC, useState} from "react"
import { Link } from "react-router-dom"

import { Card, CardBody, CardTitle } from "reactstrap"
import avatar4 from "../../assets/images/users/avatar-4.jpg"

type PropsType = any

const UserPhoto:FC<PropsType> = () => {
  const [isChanging, setChange] = useState(false)


const onChangeHandler =(event)=>{
  console.log(event.target.files[0])
}

const handleOnClick = ()=> {
  if(isChanging===false)
  {setChange(true)} else {
    alert("Images was changed on site")
    setChange(false)
  }
}

  return (
    <Card>
      <CardBody>
        <CardTitle>User Photo</CardTitle>
        <div className="m-4  text-center">
          <img
            className="rounded-circle avatar-xl"
            alt="User Photo"
            src={avatar4}
          />
        </div>
      <div className="m-4 text-center">
          <Link to="#" className="btn btn-primary"onClick={handleOnClick} >
            Change
          </Link>
          </div>
          {isChanging && <div className="m-4 text-center">
        <input type="file" name="file" onChange={onChangeHandler}/>
        </div>}
       
      </CardBody>
    </Card>
  )
}

export default UserPhoto
