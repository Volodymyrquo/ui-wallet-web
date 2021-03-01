import { UserSettingsType } from '../../store/contactsList/reducer';
export const getStatusOptions = ():Array<string> => [
  "choose...",
  "active",
  "inactive",
  "stopped",
  "away",
  "deleted",
]
export const getTariffOptions = ():Array<string> => [
  "choose...",
  "Gold",
  "Silver",
  "Brilliant",
  "Cooper",
  "Steel",
]
export const getTypefOptions = ():Array<string> => [
  "choose...",
  "Owner",
  "Lender",
  "Render",
  "Administrator",
  "Lawyer",
]

export const getUserSettings = ():Array<UserSettingsType> => [
  {
  id:'1',
    userName: 'user one',
    name: 'One',
    status: 'active',
    tariff: 'gold',
    type: 'any',
    description: 'some descriptions',
    staffRemark: 'staff remark for user'
  
},
  {
  id: '2',
    userName: 'user two',
    name: 'Two',
    status: 'active',
    tariff: 'gold',
    type: 'any',
    description: 'some descriptions',
    staffRemark: 'staff remark for user'
  
}
]
