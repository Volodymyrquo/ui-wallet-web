import React, { useState } from "react"
import { FirstForm } from "./FirstForm"
import { ConfirmForm } from "./ConfirmForm"
import { UserForm } from "./UserForm"
import LoginForm from "./LoginForm"

const AuthPage1 = () => {
  const [step, setStep] = useState(1)
  const [verificationCode, setVerificationCode] = useState("")

  const goToStep = value => {
    setStep(value)
  }

  const onSetVerificationCode = code => {
    setVerificationCode(code.toUpperCase())
  }

  return (
    <>
      <header className="sumra-header">
        <div className="logotype"></div>
      </header>
      <main className="sumra-main">{step}</main>
      <footer className="sumra-footer"></footer>
    </>
  )
}

export default AuthPage1

/* export default class AuthPage extends Component {
  static defaultProps = {
    className: "authentification-form",
  }


  render() {
    const { className } = this.props
    const getForm = () => {
      switch (this.state.currentStep) {
        case 1:
          return <FirstForm className={className} onStep={this._goToStep} />
        case 2:
          return (
            <ConfirmForm
              className={className}
              onStep={this._goToStep}
              onSetCode={this._onSetVerificationCode}
            />
          )
        case 3:
          return <UserForm className={className} state={this.state} />
        case 4:
          return <LoginForm className={className} onStep={this._goToStep} />
        default:
          break
      }
    }


 */
