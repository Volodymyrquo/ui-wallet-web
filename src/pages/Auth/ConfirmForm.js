import React, { useState } from "react"
import { connect } from "react-redux"
import ReactCodeInput from "react-verification-code-input"
import logout from "../../assets/images/sumra/icon-logout.svg"
import { withAuthMain } from "../../components/hoc/withAuthMain"
import { getVerificationCode } from "../../store/authentification/actions"
const ConfirmForm = ({
  autoFocus = true,
  fieldWidth = 38,
  fieldHeight = 44,
  type = "text",
  fields = 6,
  className,
}) => {
  const [code, setCode] = useState("")

  className += " verification-code-form"

  const submitVerificationCode = event => {
    event.preventDefault()

    const isComplete = code.length === fields

    if (isComplete) {
      debugger
      getVerificationCode(code)
      window.location.href = "/userform"
    }
  }
  const handleChange = vals => {
    setCode(vals)
  }
  const handleComplete = val => {
    setCode(val)
  }

  return (
    <div className={className}>
      <h1 className="h1-title">Confirmation Access</h1>

      <form>
        <h2 className="h2-label">Enter the six-digit verification code.</h2>

        <ReactCodeInput
          autoFocus={autoFocus}
          className="sumra-react-code-input"
          type={type}
          fieldWidth={fieldWidth}
          fieldHeight={fieldHeight}
          onChange={handleChange}
          onComplete={handleComplete}
          values={code.split("")}
        />

        <button className="sumra-Button" onClick={submitVerificationCode}>
          <img
            className="sumra-Button-icon-left"
            src={logout}
            width="18"
            alt="logout"
          />

          <span>Continue</span>
        </button>
      </form>
    </div>
  )
}

export default connect(null, { getVerificationCode })(withAuthMain(ConfirmForm))
