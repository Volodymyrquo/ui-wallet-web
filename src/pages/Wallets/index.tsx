import React, { FC } from 'react';
import '../../assets/scss/wallets/wallet.scss';
import { ButtonFilter } from './ButtonFilter';
import { Card } from './Card';

const Wallets: FC = () => {
  return (
    <div className="page-content" >
      <h2 className="card-title">Your wallets</h2>
        <ButtonFilter />
        <Card />
    </div>
  )
}

export default Wallets
