import React, {FC} from 'react';
import '../../../assets/scss/wallets/wallet.scss';
import '../../../assets/scss/custom/fonts/_fonts.scss';
import Up from '../../../assets/images/wallets/Up.svg';
import Down from '../../../assets/images/wallets/Down.svg';
import Points from '../../../assets/images/wallets/points.svg';
import { AddCard } from '../AddCard';
import { useSelector, RootStateOrAny } from 'react-redux';
import { colorWallets } from '../wallets'


export const Card: FC = () =>  {
  const filterWallets = useSelector((state: RootStateOrAny) => state.wallets.filterWallets)

  return (
    <section className="page-content__block-card block-card">
      <div className="block-card__card-inner">
          {filterWallets.map((wallet: any, index: number) => (
            <div
              key={wallet.id}
              className="block-card__card"
              style={{
                background: `URL(${colorWallets[index]})`
              }}
            >
              <div className="block-card__inner">
                <p className="block-card__currency">{wallet.namewallet}</p>
                <p className="block-card__number-card">
                  {wallet.numberwallet}
                </p>
                <img className="block-card__img" src={wallet.image} alt="BTC"/>
              </div>
              <div className="block-card__block-balance">
                <p className="block-card__total">Total balance</p>
                <p className="block-card__hold">Hold balance</p>
                <p className="block-card__total-number">
                  {wallet.totalBalance}
                  <span className="block-card__total-btc">{wallet.crypto}</span>
                </p>
                <p className="block-card__hold-number">{wallet.holdBalance}</p>
              </div>
              <div>
                <p className="block-card__text-since">Since last month</p>
                <div className="block-card__last-month">
                  <p className="block-card__last-balance">{wallet.sinceLastMonth}</p>
                  <img
                    className="block-card__img-arow"
                    src={wallet.arrow}
                    alt="arrow"
                  />
                  <p className="block-card__percent">{wallet.percent}</p>
                </div>
              </div>

              <div className="block-card__btn-inner">
                <div>
                  <button className="block-card__btn-withdraw">
                    Withdraw
                    <img
                      className="block-card__btn-arrow"
                      src={Up}
                      alt="Up arrow"
                    />
                  </button>
                  <button className="block-card__btn-deposit">
                    Deposit
                    <img
                      className="block-card__btn-arrow"
                      src={Down}
                      alt="Arrow down"
                    />
                  </button>
                </div>
                <button className="block-card__point-btn">
                  <img
                    src={Points}
                    alt="Points"
                  />
                </button>
              </div>
            </div>
          ))}
          <AddCard />
        </div>
    </section>
  )
}
