import React, { Component, useState } from "react"
import {
  END_POINTS,
  fetchValidateName,
  makeFetch,
} from "../../components/Common/functions"
import iconEnter from "../../assets/images/sumra/icon-enter.svg"
import personIcon from "../../assets/images/sumra/icon-person.svg"
import personOrange from "../../assets/images/sumra/icon-person-orange.svg"
import iconBlock from "../../assets/images/sumra/icon-block.svg"
import checkGreen from "../../assets/images/sumra/icon-check-green.svg"
import { withAuthMain } from "../../components/hoc/withAuthMain"
import { useSelector } from "react-redux"
import { AppStateType } from "../../store/reducers";

const UserForm = ({className}) => {

const state = useSelector((state:AppStateType)=> state.authReducer)
const [username, setUsername] = useState(state.username)
const [invalidUserName, setInvalidUserName] = useState(state.invalidUserName)
let timerID = null
const verificationCode = state.verificationCode

  const changeInput = event => {

    const value = event.target.value

    setUsername(value)

    if (timerID) {
      clearTimeout(timerID)
    }

   timerID = setTimeout(() => {
      fetchValidateName(value)
        .then(response => {
          if (response.status === 200) {
            setInvalidUserName(false)
          } else {
            setInvalidUserName(true)
          }
        })
        .catch(console.error)
    }, 300)
  }

  const submitUserForm = async event => {
    event.preventDefault()

    if (invalidUserName) {
      return
    }

const  response = await makeFetch(END_POINTS.REGISTRATION, {
      code: verificationCode,
      username: username,
    })

    if (response.ok) {
      console.log(response)
      const json = await response.json()
      alert(json)
      console.log(json)
    }
  }

     className += " user-signup-form"

    let message, personIconSrc, validIconSrc, filedsetClassName

    if (!username) {
      filedsetClassName = "sumra-input-fieldset"
      personIconSrc = personIcon
      validIconSrc = personOrange
      message = null
    } else {
      filedsetClassName = "sumra-input-fieldset available"
      personIconSrc = personOrange
      if (invalidUserName) {
        validIconSrc = iconBlock
        message = (
          <div className="sumra-input-message error">
            This username is already taken.
          </div>
        )
      } else {
        validIconSrc = checkGreen
        message = (
          <div className="sumra-input-message success">
            This username is available.
          </div>
        )
      }
    }

    return (
      <div className={className}>
        <h1 className="h1-title">Enter username</h1>

        <form>
          <fieldset className={filedsetClassName}>
            <legend>User name</legend>

            <img
              className="sumra-input-fieldset-icon"
              src={personIconSrc}
              width="22"
              alt="person icon"
            />

            <input
              type="text"
              placeholder="Enter username"
              onChange={changeInput}
            />

            <img
              className="sumra-input-fieldset-icon-right"
              src={validIconSrc}
              width="22"
              alt="valid icon"
            />
          </fieldset>

          {message}

          <button className="sumra-Button" onClick={submitUserForm}>
            <img
              className="sumra-Button-icon-left"
              src={iconEnter}
              width="18"
              alt="icon enter"
            />

            <span>Submit</span>
          </button>
        </form>
      </div>
    )
  }



export default withAuthMain(UserForm)
