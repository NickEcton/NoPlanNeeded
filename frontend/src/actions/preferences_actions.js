//need a create preferences

//need an edit preferences

//need a fetch preferences

import * as preferencesAPIUtil from '../util/api/preferences.js';

export const RECEIVE_PREFERENCE = 'RECEIVE_PREFERENCE';

const getPreference = (preference) => ({
    type: RECEIVE_PREFERENCE,
    preference: preference
});

export const fetchPreference = () => dispatch => {
    // debugger;
    return preferencesAPIUtil.fetchPreference()
        .then(preference => dispatch(getPreference(preference.data)))
}

export const createPreference = (preference) => dispatch => {
    // debugger;
    return preferencesAPIUtil.createPreference(preference)
        .then(preference => dispatch(getPreference(preference.data)))
}

export const editPreference = (preference) => dispatch => {
    // debugger;
    return preferencesAPIUtil.editPreference(preference)
        .then(preference => dispatch(getPreference(preference.data)))
}