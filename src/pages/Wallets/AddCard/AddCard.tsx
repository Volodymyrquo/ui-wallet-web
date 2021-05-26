import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../../../assets/scss/wallets/addCard.scss';

export const AddCard: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <section className="add-card">
        <Link
          className="add-card__first"
          to={{pathname: match.url, search: '?form-add=true'}}
        >
          <div className="add-card__title">Create Wallet</div>
        </Link>
        <div className="add-card__second"></div>
        <div className="add-card__third"></div>
      </section>
    </>
  );
};
