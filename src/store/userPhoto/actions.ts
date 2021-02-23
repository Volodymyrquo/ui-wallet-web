import { SET_USER_PHOTO } from "./actionTypes";

export type SetUserPhotoActionType = {
    type: typeof SET_USER_PHOTO,
    payload: string
}

export const setUserPhoto = (photo:string):SetUserPhotoActionType => ({
    type: SET_USER_PHOTO,
    payload: photo
})
