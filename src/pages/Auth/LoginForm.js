import React, { Component } from "react"
import person from "../../assets/images/sumra/icon-person.svg"
import lock from "../../assets/images/sumra/icon-lock.svg"
import logout from "../../assets/images/sumra/icon-logout.svg"
import { connect } from "react-redux"
import { getUserAccessToken } from "../../store/authSumra/actions"
/* import { _signIn } from "../../redux/auth-reducer"
 */
class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "VOLODYMYRB",
      password: "vSi0PcykN5",
    }
  }

  render() {
    let { className } = this.props
    className += " login-form"
    return (
      <div className={className}>
        <h1 className="h1-title">Login with Sumra ID</h1>

        <form onSubmit={this._onFormSubmit}>
          <fieldset className="sumra-input-fieldset">
            <legend>User name</legend>

            <img
              className="sumra-input-fieldset-icon"
              src={person}
              alt="person"
            />

            <input
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this._changeUserName}
            />
          </fieldset>

          <fieldset className="sumra-input-fieldset">
            <legend>Password</legend>

            <img className="sumra-input-fieldset-icon" src={lock} alt="lock" />

            <input
              type="text"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this._changePassword}
            />
          </fieldset>

          <button className="sumra-Button" type="submit">
            <img
              className="sumra-Button-icon-left"
              src={logout}
              width="18"
              alt="logout"
            />
            <span>Sign up</span>
          </button>

          <div className="sumra-link-forgotPassword">Forgot password?</div>
          <div className="sumra-link-createUser">
            New user?
            <span onClick={this._goToRegistration}>Create a Sumra ID</span>
          </div>
        </form>
      </div>
    )
  }

  _changeUserName = event => {
    this.setState({ username: event.target.value })
  }

  _changePassword = event => {
    this.setState({ password: event.target.value })
  }

  _onFormSubmit = event => {
    event.preventDefault()

    if (this.state.username && this.state.password) {
      const { username, password } = this.state

      this.props.getUserAccessToken({ username, password })
    }
  }

  _signIn = () => {
    const { username, password } = this.state

    fetchAuth({ username, password })
      .then(response => response.json())
      .then(result => {
        const {
          access_token,
          meet_token,
          expires_in,
          refresh_token,
          token_type,
        } = result

        const { location, localStorage } = window

        localStorage.setItem("access_token", access_token)
        location.href = "http://localhost:3000/"
      })
  }

  _goToRegistration = () => {
    this.props.onStep(1)
  }
}

export default connect(null, { getUserAccessToken })(LoginForm)
