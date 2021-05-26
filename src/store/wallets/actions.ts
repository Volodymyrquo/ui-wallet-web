import {
  Wallet,
  FuncActiveAllBtn,
  FuncFilterWallets,
  FuncActiveFiatBtn,
  FuncActiveCryptoBtn,
  FuncNewWallet,
  FuncGetWallet,
  FuncFetchWallets,
  FuncPostWallets,
  FuncBtnFormFiatActive,
  FuncBtnFormCryptoActive
} from './typeScript'

import { newWallet } from '../../pages/Wallets/FormAddCard/FormAddCard'

import {
  MEANS_OF_PAYMENT,
  ACTIVE_ALL,
  ACTIVE_FIAT,
  ACTIVE_CRYPTO,
  NEW_WALLET,
  FILTER_ALL,
  FILTER_FIAT,
  FILTER_CRYPTO,
  FIAT,
  CRYPTO,
  GET_WALLET
} from './actionTypes';

export const actions = {
  filterWallets: (meansOfPayment: boolean): FuncFilterWallets => ({
    type: MEANS_OF_PAYMENT,
    meansOfPayment
  }),

  activeAllBtn: (activeAll: boolean): FuncActiveAllBtn => ({
    type: ACTIVE_ALL,
    activeAll,
  }),

  activeFiatBtn: (activeFiat: boolean): FuncActiveFiatBtn => ({
    type: ACTIVE_FIAT,
    activeFiat,
  }),

  activeCryptoBtn: (activeCrypto: boolean): FuncActiveCryptoBtn => ({
    type: ACTIVE_CRYPTO,
    activeCrypto,
  }),

  newWallet: (newWallet: Wallet): FuncNewWallet => ({
    type: NEW_WALLET,
    newWallet,
  }),

  getWallet: (wallets: Wallet): FuncGetWallet => ({
    type: GET_WALLET,
    wallets,
  }),

  filterAll: (wallets: Wallet): FuncGetWallet => ({
    type: FILTER_ALL,
    wallets,
  }),

  fatchWallets: (): FuncFetchWallets => ({
    type: 'SET_WALLETS'
  }),

  postWallets: (wallet: newWallet): FuncPostWallets => ({
    type: 'POST_WALLETS',
    options: {
      namewallet: wallet.walletName,
      crypto: wallet.currency,
      firsName: wallet.firsName,
      lastName: wallet.lastName,
      numberwallet: wallet.namberCard,
      expiryDate: wallet.expiryDate,
      securityCode: wallet.securityCode
    }
  }),

  filterFiat: (wallets: Wallet): FuncGetWallet => ({
    type: FILTER_FIAT,
    wallets,
  }),

  filterCrypto: (wallets: Wallet): FuncGetWallet => ({
    type: FILTER_CRYPTO,
    wallets,
  }),

  btnFormFiatActive: (fiat: boolean): FuncBtnFormFiatActive => ({
    type: FIAT,
    fiat,
  }),

  btnFormCryptoActive: (crypto: boolean): FuncBtnFormCryptoActive => ({
    type: CRYPTO,
    crypto,
  }),
}
