import React, { Component } from "react"
import { FirstForm } from "./FirstForm"
import { ConfirmForm } from "./ConfirmForm"
import { UserForm } from "./UserForm"
import LoginForm from "./LoginForm"
import "./AuthPage.scss"

export default class AuthPage extends Component {
  static defaultProps = {
    className: "authentification-form",
  }

  constructor(props) {
    super(props)

    this.state = {
      ...this.state,

      currentStep: 1,
      verificationCode: "",
    }

    this._goToStep = this._goToStep.bind(this)
    this._onSetVerificationCode = this._onSetVerificationCode.bind(this)
  }

  render() {
    const className = "authentification-form"

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
    const step = getForm()

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

  _goToStep(value) {
    this.setState({ currentStep: value })
  }

  _onSetVerificationCode(code) {
    this.setState({ verificationCode: code.toUpperCase() })
  }
}
