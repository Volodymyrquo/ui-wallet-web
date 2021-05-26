import { ButtonState, ButtonAction } from './typeScript';
import { BTN_PROMOTE } from './actionTypes';

const initialState = {
  activePromote: true,
  activeInvite: false,
  activeEarnings: false,
  activePioneer: false,
}

const buttonReducer = (state = initialState, action: ButtonAction): ButtonState => {
  switch(action.type) {
    case BTN_PROMOTE:
    return
    default:
      return state;
  }
}

export default buttonReducer;