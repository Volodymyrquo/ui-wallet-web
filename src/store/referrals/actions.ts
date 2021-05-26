import {
  BTN_PROMOTE,
} from './actionTypes';

export const actions = {
  activBtnPromote: (activePromote: boolean) => ({
    type: BTN_PROMOTE,
    activePromote
  }),
}