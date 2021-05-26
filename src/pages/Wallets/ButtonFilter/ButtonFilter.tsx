import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../../../assets/scss/wallets/buttonFilter.scss';
import { Button, ButtonGroup } from 'react-bootstrap';
import classNames from 'classnames';
import { actions } from '../../../store/wallets/actions';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

export const ButtonFilter: FC = () => {
  const dispatch = useDispatch();
  const activeAll = useSelector((state: RootStateOrAny) => state.wallets.activeAll)
  const activeFiat = useSelector((state: RootStateOrAny) => state.wallets.activeFiat)
  const activeCrypto = useSelector((state: RootStateOrAny) => state.wallets.activeCrypto)
  const wallets = useSelector((state: RootStateOrAny) => state.wallets.wallets)
  const match = useRouteMatch();
  
  return (
    <div className="btn-filter">
      <ButtonGroup className="btn-filter__block" size="sm" aria-label="Basic example">
        <Button
          className={classNames(`btn-filter__all`,{
            active: activeAll
          })}
          style={{borderRadius: "4px"}}
          variant="outline-primary"
          onClick={(e)=>{
            dispatch(actions.activeAllBtn(true))
            dispatch(actions.activeFiatBtn(false))
            dispatch(actions.activeCryptoBtn(false))
            dispatch(actions.filterAll(wallets))
          }}
        >
          All
        </Button>
        <Button
          className={classNames(`btn-filter__all`,{
            active: activeFiat
          })}
          variant="outline-primary"
          style={{borderRadius: "4px"}}
          onClick={(e)=>{
            dispatch(actions.activeFiatBtn(true))
            dispatch(actions.activeAllBtn(false))
            dispatch(actions.activeCryptoBtn(false))
            dispatch(actions.filterFiat(wallets))
          }}
        >
          Fiat
        </Button>
        <Button
          className={classNames(`btn-filter__all`,{
            active: activeCrypto
          })}
          variant="outline-primary"
          style={{borderRadius: "4px"}}
          onClick={(e)=>{
            dispatch(actions.activeCryptoBtn(true))
            dispatch(actions.activeAllBtn(false))
            dispatch(actions.activeFiatBtn(false))
            dispatch(actions.filterCrypto(wallets))
          }}
        >
          Crypto
        </Button>
      </ButtonGroup>
      <Link
        to={{pathname: match.url, search: '?form-add=true'}}
      >
        <Button
          className="btn-filter__create "
          style={{borderRadius: "4px"}}
          variant="outline-primary"
          active
        >
          Create wallet
        </Button>
      </Link>
    </div>

  )
}