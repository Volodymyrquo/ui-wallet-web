import React,{FC, useState} from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";

import { Card, CardBody, CardTitle } from "reactstrap"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import { setUserPhoto } from "../../store/userPhoto/actions";

type PropsType = any

const UserPhoto:FC<PropsType> = ({userPhoto,setUserPhoto}) => {
  const [isChanging, setChange] = useState(false)
  const [photo, setPhoto]= useState(userPhoto)


const onChangeHandler =(event)=>{
  const photoFile = event.target.files[0]
  Object.assign(photoFile,{preview: URL.createObjectURL(photoFile) })
  setPhoto(photoFile.preview)

}

const handleOnClick = ()=> {
  if(isChanging===false)
  {setChange(true)} else {
    setUserPhoto(photo)
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
            src={userPhoto}
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
const mapStateToProps = (state)=> ({
userPhoto: state.userPhoto.userPhoto
})
export default connect(mapStateToProps,{setUserPhoto}) (UserPhoto)
