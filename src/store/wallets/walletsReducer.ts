import {
  WalletsState,
  WalletAction,
} from './typeScript';

import {
  NEW_WALLET,
  FILTER_FIAT,
  FILTER_CRYPTO,
  MEANS_OF_PAYMENT,
  ACTIVE_ALL,
  ACTIVE_CRYPTO,
  ACTIVE_FIAT,
  FILTER_ALL,
  FIAT,
  CRYPTO,
  GET_WALLET
} from './actionTypes';

const initialState: WalletsState = {
  newWallet: [],
  wallets: [],
  filterWallets: [],
  meansOfPayment: false,
  activeAll: true,
  activeFiat: false,
  activeCrypto: false,
  fiat: true,
  crypto: false
}

const walletsReducer = (state = initialState, action: WalletAction): WalletsState => {
  switch (action.type) {
    case NEW_WALLET:
      return {
        ...state,
        newWallet: [...action.newWallet]
      }
    case GET_WALLET:
      return {
        ...state,
        wallets: action.wallets.map(wallet => wallet),
        filterWallets: [...action.wallets]
    }
    case FILTER_ALL:
      return {
        ...state,
        filterWallets: action.wallets.map(wallet => wallet)
      }
    case FILTER_FIAT:
      return {
        ...state,
        filterWallets: action.wallets.filter(wallet => wallet.crypto.length === 0)
      }
    case FILTER_CRYPTO:
      return {
        ...state,
        filterWallets: action.wallets.filter(wallet => wallet.crypto.length !== 0)
      }
    case MEANS_OF_PAYMENT:
      return {
        ...state,
        meansOfPayment: action.meansOfPayment
      }
    case ACTIVE_ALL:
      return {
        ...state,
        activeAll: action.activeAll
      }
    case ACTIVE_FIAT:
      return {
        ...state,
        activeFiat: action.activeFiat
      }
    case ACTIVE_CRYPTO:
      return {
        ...state,
        activeCrypto: action.activeCrypto
      }
    case FIAT:
      return {
        ...state,
        fiat: action.fiat
      }
    case CRYPTO:
      return {
        ...state,
        crypto: action.crypto
      }
    default:
      return state
  }
};

export default walletsReducer;
