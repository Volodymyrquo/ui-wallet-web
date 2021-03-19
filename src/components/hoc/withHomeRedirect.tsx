import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import {  AppStateType} from "../../store/reducers";

export const withHomeRedirect = (Component) => {
    return (props)=>{
        const isAuth = useSelector((state:AppStateType) => state.authReducer.isAuth)
 if(isAuth) return <Redirect to={"/"} />
   return  <Component {...props} />
    }

}

