export interface ButtonState {
  activePromote: boolean,
  activeInvite: boolean,
  activeEarnings: boolean,
  activePioneer: boolean
}

export interface ButtonAction {
  activePromote: boolean,
  activeInvite: boolean,
  activeEarnings: boolean,
  type: string,
  activePioneer: boolean
}
