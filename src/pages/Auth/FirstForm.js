import React, { Component } from "react"
import {
  makeid,
  makeFetch,
  END_POINTS,
} from "../../components/Common/functions"
import { isMobile } from "react-device-detect"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import send from "../../assets/images/sumra/send.svg"
import user from "../../assets/images/sumra/user.svg"
import benefits from "../../assets/images/sumra/Benefits_draft.svg"
import Telegram from "../../assets/images/sumra/Telegram.svg"
import Viber from "../../assets/images/sumra/Viber.svg"
import Messanger from "../../assets/images/sumra/Messanger.svg"
import WhatsApp from "../../assets/images/sumra/WhatsApp.svg"
import Signal from "../../assets/images/sumra/Signal.svg"
import { Link } from "react-router-dom"
import { withAuthMain } from "../../components/hoc/withAuthMain"
class FirstForm extends Component {
  static defaultProps = {
    targetBlank: "_blank",
    socialLinkWidth: 46,
    socialLinks: [
      {
        image: Telegram,
        href: "https://t.me/sumrabot",
        hrefMobile: "tg://resolve?domain=SumraBot",
      },
      {
        image: Viber,
        href: "viber://pa?ChatURI=SumraBot",
        hrefMobile: "viber://pa?ChatURI=SumraBot",
      },
      {
        image: Messanger,
        href: "https://m.me/SumraBot",
        hrefMobile: "https://m.me/SumraBot",
      },
      {
        image: WhatsApp,
        href: "https://wa.me/SumraBot",
        hrefMobile: "https://wa.me/SumraBot",
      },
      {
        image: Signal,
        href: "#",
        hrefMobile: "#",
      },
    ],
  }

  constructor(props) {
    super(props)

    this.state = {
      phone: "",
    }
  }

  render() {
    const { className, socialLinks, socialLinkWidth, targetBlank } = this.props

    const links = socialLinks.map((v, index) => {
      let href = ""
      if (isMobile) {
        href = v.hrefMobile
      } else {
        href = v.href
      }

      return (
        <li key={index} onClick={this._goToVeryfycationCodePage}>
          <a href={href} target={targetBlank}>
            <img src={v.image} width={socialLinkWidth} alt="social links" />
          </a>
        </li>
      )
    })

    return (
      <div className={className}>
        <h1 className="h1-title">Wellcome to Sumra Chat</h1>
        <h2 className="h2-subtitle">Please Login or Sign Up</h2>
        <section>
          <h3 className="h3-label">Sign up with:</h3>

          <ul className="sumra-social-links">{links}</ul>
        </section>
        <div className="sumra-line"></div>
        <section>
          <h3 className="h3-label">Sign up with:</h3>
          <form>
            <fieldset className="sumra-phone-fieldset">
              <legend>Your mobile phone number</legend>

              <PhoneInput
                flags={flags}
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={this._changePhoneNumber}
              />

              <div
                className="sumra-phone-send"
                onClick={this._submitPhoneNumber}
              >
                <img src={send} alt="send" />
              </div>
            </fieldset>
          </form>
        </section>
        <div className="sumra-line"></div>
        <Link to="/login">
          <div className="sumra-Button">
            <img src={user} width="14" height="17" alt="user" />
            <span>Login with Sumra ID</span>
          </div>
        </Link>

        {/* <section class = 'sumra-Benefits'>
                    <div className = 'sumra-Benefit-text'>
                        <b>Earn Unlimited</b> DIVITS for your time and activities on <b>Sumra Chat</b> 
                    </div>
                    <div className = 'sumra-Benefit-text'>
                        <b>Exchange & Redeem</b> DIVITS.
                    </div>
                </section> */}
        <img className="sumra-Benefits-draft" src={benefits} alt="benefits" />
      </div>
    )
  }

  _changePhoneNumber = phone => {
    this.setState({ phone })
  }

  /**
   * _goToLoginPage
   */
  _goToLoginPage = () => {
    this.props.onStep(4)
  }

  /**
   * _goToVeryfycationCodePage
   */
  _goToVeryfycationCodePage = () => {
    this.props.onStep(2)
  }

  _submitPhoneNumber = event => {
    event.preventDefault()

    let { phone } = this.state

    if (!phone) {
      return
    }

    phone = phone.replace("+", "")

    makeFetch(END_POINTS.SEND_CODE, {
      phone_number: phone,
      device_id: makeid(20),
    }).then(
      response => console.log,
      error => console.error
    )
    window.location.href = "/confirm"
  }
}

export default withAuthMain(FirstForm)
