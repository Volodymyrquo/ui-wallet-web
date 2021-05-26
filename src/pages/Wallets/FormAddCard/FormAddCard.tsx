import React, { FC, useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import walletImg from '../../../assets/images/wallets/walletImg.svg';
import Close from '../../../assets/images/wallets/close.png';
import '../../../assets/scss/wallets/formAddCard.scss';
import Modal, {IProps} from '../modal';
import { useHistory } from 'react-router';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { actions } from '../../../store/wallets/actions';
import { carrencyFiat, carrencyCrypto } from '../currency';
import classNames from 'classnames';

export type newWallet = {
  walletName: string,
  currency: string,
  firsName: string,
  lastName: string;
  namberCard: any;
  expiryDate: any;
  securityCode: any;
}

export const FormAddCard: FC<IProps> = ({onClick}) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const selector = useSelector((state: RootStateOrAny) => state.wallets.meansOfPayment);
  const dispatch = useDispatch();
  const activeFiat = useSelector((state: RootStateOrAny) => state.wallets.fiat);
  const activeCrypto = useSelector((state: RootStateOrAny) => state.wallets.crypto);
  const [wallet, setWallet] = useState({
    walletName: '',
    currency: '',
    firsName: '',
    lastName: '',
    namberCard: 0,
    expiryDate: null || undefined,
    securityCode: null || undefined
  })
  const [startFetch, setStartFetch] = useState(true)

  const {
    walletName,
    currency,
    firsName,
    lastName,
    namberCard,
    expiryDate,
    securityCode
  } = wallet

  const addNewWallet = ({ target }: any) => {

    const {value, name} = target
    setWallet({...wallet, [name]: value})
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(wallet)
    
    dispatch(actions.postWallets(wallet))

    let close = true;
    for (const key in wallet) {
      if (wallet[key] === undefined || wallet[key].length === 0 ) {
        return close = false;
      }
    }
    if (close) {
      history.push(location.pathname);
    }
    setWallet({
      walletName: '',
      currency: '',
      firsName: '',
      lastName: '',
      namberCard: null || undefined,
      expiryDate: null || undefined,
      securityCode: null || undefined
    })

    console.log(startFetch)

    setStartFetch(!startFetch)
  }

  useEffect(() => {
    dispatch(actions.fatchWallets())
  },[startFetch])

  return params.get('form-add') ? (
    <Modal onClick={onClick}>
      <section className="form-card">
        <div className="form-card__wrapper">
          <div className="form-card__inner-img">
            <img
              className="form-card__title"
              src={walletImg}
              alt="Wallet"
            />
            <img
              className="form-card__close-img"
              src={Close}
              alt="Close"
              onClick={() => {
                history.push(location.pathname);
              }}
            />
          </div>
          <div className="form-card__card-selection">
            <button
              className={classNames(`form-card__fiat`,{
                "form-card__fiat-active": activeFiat
              })}
              onClick={() => {
                dispatch(actions.filterWallets(false))
                dispatch(actions.btnFormFiatActive(true))
                dispatch(actions.btnFormCryptoActive(false))
              }}
            >
              Fiat
            </button>
            <button
              onClick={() => {
                dispatch(actions.filterWallets(true))
                dispatch(actions.btnFormCryptoActive(true))
                dispatch(actions.btnFormFiatActive(false))
              }}
              className={classNames(`form-card__crypto`,{
                "form-card__crypto-active": activeCrypto
              })}
            >
              Crypto
            </button>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              controlId="formBasicEmail"
              className="form-card__block-placeholder"
            >
              <Form.Label className="form-card__label-name">Wallet name</Form.Label>
              <Form.Control
                className="form-card__input-placeholder"
                type="text"
                placeholder="Enter wallet name"
                required
                name="walletName"
                value={walletName}
                onChange={addNewWallet}
              />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="form-card__select-block"
            >
              <Form.Label className="form-card__label-name">Currency</Form.Label>
              { selector ? (
                <Form.Control
                  className="form-card__select"
                  as="select"
                  custom
                  name="currency"
                  value={currency}
                  onChange={addNewWallet}
                >
                  <option
                    value=""
                    disabled
                  >
                    Please select a crypto
                  </option>
                  {carrencyCrypto.map(crypto => (
                    <option
                      value={crypto}
                      key={crypto}
                    >
                      {crypto}
                    </option>
                  ))}
                </Form.Control>
              ) : (
                <Form.Control
                  className="form-card__select"
                  as="select"
                  custom
                  name="currency"
                  value={currency}
                  onChange={addNewWallet}
                >
                  <option
                    value=""
                    disabled
                  >
                    Please select a fiat
                  </option>
                  {carrencyFiat.map(fiat => (
                    <option
                      value={fiat}
                      key={fiat}
                    >
                      {fiat}
                    </option>
                  ))}
                </Form.Control>
              )}
            </Form.Group>

            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="form-card__block-placeholder"
              >
                <Form.Label className="form-card__label-name">Frst name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  className="form-card__input-placeholder"
                  required
                  name="firsName"
                  value={firsName}
                  onChange={addNewWallet}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="form-card__block-placeholder"
              >
                <Form.Label className="form-card__label-name">Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  className="form-card__input-placeholder"
                  required
                  name="lastName"
                  value={lastName}
                  onChange={addNewWallet}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="form-card__input-number"
              >
                <Form.Label className="form-card__label-name">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="4154 8154 1255 1567"
                  className="form-card__label-number"
                  required
                  name="namberCard"
                  value={namberCard}
                  onChange={addNewWallet}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="form-card__label-name">Expiry date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM / YY"
                  className="form-card__input-placeholder"
                  required
                  name="expiryDate"
                  value={expiryDate}
                  onChange={addNewWallet}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="form-card__label-name">Security Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  className="form-card__input-placeholder"
                  required
                  name="securityCode"
                  value={securityCode}
                  onChange={addNewWallet}
                />
              </Form.Group>
            </Form.Row>

            <div className="form-card__block-btn">
              <Button
                className="form-card__first-btn"
                variant="outline-primary"
                type="submit"
                style={{border: "1px solid #DAE1ED"}}
              >
                Create
              </Button>
              <Button
                className="form-card__first-btn"
                variant="outline-primary"
                type="button"
                style={{border: "1px solid #DAE1ED"}}
                onClick={(e) => {
                  e.preventDefault()
                  history.push(location.pathname);
                }}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </Modal>
  ) : null;
};
