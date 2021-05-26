import arrow from '../../assets/images/wallets/arrow.svg';
import visa from '../../assets/images/wallets/visa.png';
import master from '../../assets/images/wallets/master.png';
import BTC from '../../assets/images/wallets/BTC.png';
import LTC from '../../assets/images/wallets/LTC.png';
import ERT from '../../assets/images/wallets/ERT.png';
import IconCopy from '../../assets/images/wallets/IconCopy.png';
import masterColor from '../../assets/images/wallets/background/card-bg--01.svg';
import visaColor from '../../assets/images/wallets/background/card-bg--03.svg';
import ERTColor from '../../assets/images/wallets/background/card-bg--04.svg';
import LTCColor from '../../assets/images/wallets/background/card-bg--08.svg';
import BTCcolor from '../../assets/images/wallets/background/card-bg--18.svg';
import color02 from '../../assets/images/wallets/background/card-bg--02.svg';
import color05 from '../../assets/images/wallets/background/card-bg--05.svg';
import color06 from '../../assets/images/wallets/background/card-bg--06.svg';
import color07 from '../../assets/images/wallets/background/card-bg--07.svg';
import color09 from '../../assets/images/wallets/background/card-bg--09.svg';

export const colorWallets = [
  masterColor,
  visaColor,
  ERTColor,
  LTCColor,
  BTCcolor,
  color02,
  color05,
  color06,
  color07,
  color09
]

export const wallets = [
  {
    namewallet: "Suspense",
    numberwallet: "**** 0735",
    image: visa,
    totalBalance: "$9,250.00",
    holdBalance: "$1,550.25",
    sinceLastMonth: "+$950.25",
    background: visaColor,
    arrow,
    crypto: "",
    percent: "+2.5%"
  },

  {
    namewallet: "Suspense",
    numberwallet: "**** 0099",
    image: master,
    totalBalance: "$3,450.25",
    holdBalance: "$1,550.25",
    sinceLastMonth: "+$950.25",
    percent: "+2.5%",
    crypto: "",
    background: masterColor,
    arrow
  },

  {
    namewallet: "BTC",
    numberwallet: "bc1qxyqtzq2n0d..",
    image: BTC,
    iconCopY: IconCopy,
    totalBalance: "0,85485",
    crypto: "BTC",
    holdBalance: "~ $1,100.25",
    sinceLastMonth: "+$350.25",
    percent: "-1.5%",
    background: BTCcolor,
    arrow
  },

  {
    namewallet: "LTC",
    numberwallet: "bc1qxy2tzq2n0dgj",
    image: LTC,
    iconCopY: IconCopy,
    totalBalance: "3,45656",
    crypto: "LTC",
    holdBalance: "~ $1,100.25",
    sinceLastMonth: "+$250.25",
    percent: "+2.5%",
    background: LTCColor,
    arrow
  },

  {
    namewallet: "ERT",
    numberwallet: "bc1qxy2sqtzq2n0dgjr..",
    image: ERT,
    iconCopY: IconCopy,
    crypto: "ERT",
    totalBalance: "0,85485",
    holdBalance: "~ $1,100.25",
    sinceLastMonth: "+$950.25",
    percent: "+2.5%",
    background: ERTColor,
    arrow
  }
];

export interface WalletsType {
  namewallet: string,
  numberwallet: string,
  image: string,
  totalBalance: string,
  holdBalance: string,
  sinceLastMonth: string,
  background: string,
  arrow: string,
  crypto: string,
  percent: string,
  iconCopY?: undefined
}
