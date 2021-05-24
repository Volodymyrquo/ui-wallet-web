export interface WalletsState {
  newWallet: any[],
  wallets: any[],
  filterWallets: any[],
  meansOfPayment: boolean,
  activeAll: boolean,
  activeFiat: boolean,
  activeCrypto: boolean,
  fiat: boolean,
  crypto: boolean
}

export interface WalletAction {
  newWallet: any[],
  wallets: any[],
  filterWallets: any[],
  meansOfPayment: boolean,
  activeAll: boolean,
  activeFiat: boolean,
  activeCrypto: boolean,
  type: string,
  fiat: boolean,
  crypto: boolean
}

export interface Wallet {
  walletName: string,
  currency: string,
  firsName: string,
  lastName: string,
  namberCard: number
}

export type newWallet = {
  walletName: string,
  currency: string,
  firsName: string,
  lastName: string;
  namberCard: any;
  expiryDate: any;
  securityCode: any;
}


export interface FuncFilterWallets {
  type: string,
  meansOfPayment: boolean
}

export interface FuncActiveAllBtn {
  type: string,
  activeAll: boolean
}

export interface FuncActiveFiatBtn {
  type: string,
  activeFiat: boolean
}

export interface FuncActiveCryptoBtn {
  type: string,
  activeCrypto: boolean
}

export interface FuncNewWallet {
  type: string,
  newWallet: object
}

export interface FuncGetWallet {
  type: string,
  wallets: object
}

export interface FuncFetchWallets {
  type: string,
}

export interface FuncPostWallets {
  type: string,
  options: object
}

export interface FuncBtnFormFiatActive {
  type: string,
  fiat: boolean
}

export interface FuncBtnFormCryptoActive {
  type: string,
  crypto: boolean
}

export interface SagaParams {
  type: string,
  crypto: object
}