import { SET_USER_PHOTO } from "./actionTypes";
import { SetUserPhotoActionType} from "./actions";
import userPoto from "../../assets/images/users/avatar-1.jpg"


type INIT_STATE_TYPE = typeof INIT_STATE

const INIT_STATE = {
   userPhoto: userPoto
}

 const userPhoto = (state=INIT_STATE, action:SetUserPhotoActionType):INIT_STATE_TYPE=>{
    switch (action.type) {
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.payload
            }
        default:
          return state
    }

}

export default userPhoto
