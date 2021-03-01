import { InferActionTypes } from './../index';
import { SET_USER_SETTINGS,SET_USER_SETTINGS_SUCCESS } from "./actionTypes";
import { UserSettingsType } from "./reducer";

export type ContactsListActionType = InferActionTypes<typeof actions>

const actions = {
    setUserSettings: (contactsList:UserSettingsType) => ({
        type: SET_USER_SETTINGS,
        payload: contactsList
    } as const),
    setUserSettingsSuccess: (contactsList:UserSettingsType) => ({
        type: SET_USER_SETTINGS_SUCCESS,
        payload: contactsList
    } as const)

}

export const {setUserSettings, setUserSettingsSuccess} = actions
