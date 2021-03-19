import React, { Component, createRef } from "react"
import { connect } from "react-redux"
import ReactCodeInput from "react-verification-code-input"
import logout from "../../assets/images/sumra/icon-logout.svg"
import { withAuthMain } from "../../components/hoc/withAuthMain"
import { setVerificationCode } from "../../store/authentification/actions"
class ConfirmForm extends Component {
  static defaultProps = {
    autoFocus: true,
    fieldWidth: 38,
    fieldHeight: 44,
    type: "text",
    fields: 6,
  }

  constructor(props) {
    super(props)

    this.state = {
      verificationCode: "",
    }

    this.input = createRef()
  }

  render() {
    const { type, fieldWidth, fieldHeight } = this.props

    let { className } = this.props

    className += " verification-code-form"

    return (
      <div className={className}>
        <h1 className="h1-title">Confirmation Access</h1>

        <form>
          <h2 className="h2-label">Enter the six-digit verification code.</h2>

          <ReactCodeInput
            className="sumra-react-code-input"
            ref={this.input}
            type={type}
            fieldWidth={fieldWidth}
            fieldHeight={fieldHeight}
            onChange={this._handleChange}
            onComplete={this._handleComplete}
          />

          <button
            className="sumra-Button"
            onClick={this._submitVerificationCode}
          >
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

  _submitVerificationCode = event => {
    event.preventDefault()

    const { verificationCode } = this.state
    const { fields } = this.props
    const isComplete = verificationCode.length === fields

    if (isComplete) {
      setVerificationCode(verificationCode)
      window.location.href = "/userform"
    }
  }

  /**
   * _handleChange
   */
  _handleChange = vals => {
    console.log("handleChange: " + vals)
  }

  /**
   * _handleComplete
   */
  _handleComplete = verificationCode => {
    this.setState({ verificationCode })
  }
}

export default connect(null, { setVerificationCode })(withAuthMain(ConfirmForm))
